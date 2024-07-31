import ConnectToDB from "@/configs/db/ConnectToDB";
import { DoctorModel } from "@/models/doctor/doctor.model";
import { genSalt, hash } from "bcryptjs";
import { NextResponse } from "next/server";
import * as jose from "jose";

const Jwt_secret = process.env.JWT_SECRET;

interface IDoctorInfo {
  name: string;
  email: string;
  password: string;
  contactNumber: number;
  educationLevel: string;
  hospitalName: string;
  expertises: string;
  experience: string;
}

export async function POST(req: Request) {
  try {
    await ConnectToDB();
    const {
      name,
      email,
      password,
      contactNumber,
      educationLevel,
      experience,
      expertises,
      hospitalName,
    } = (await req.json()) as IDoctorInfo;
    const isEmailExist = await DoctorModel.findOne({ email });
    if (isEmailExist) {
      return NextResponse.json(
        {
          error: "Email already exist",
        },
        { status: 401 }
      );
    }
    const genNewSalt = await genSalt(11);
    const hashedPassword = await hash(password, genNewSalt);
    const newDoctor = await DoctorModel.create({
      name,
      email,
      salt: genNewSalt,
      password: hashedPassword,
      contactNumber,
      educationLevel,
      experience,
      expertises,
      hospitalName,
    });

    if (!newDoctor) {
      return NextResponse.json(
        { message: "Failed to create user" },
        { status: 500 }
      );
    }

    // jwt auth token
    const payload = {
      id: newDoctor._id,
    };
    const jwtsecret = new TextEncoder().encode(Jwt_secret);
    const alg = "HS256";
    const jwt = await new jose.SignJWT(payload)
      .setProtectedHeader({ alg })
      .setExpirationTime("2h")
      .setSubject(payload.id as string)
      .sign(jwtsecret);

    const response = NextResponse.json(
      { message: "User created successfully", jwtToken: jwt },
      { status: 201 }
    );
    return response;
  } catch (error: any) {
    console.error("API Route Error:", error.message);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
