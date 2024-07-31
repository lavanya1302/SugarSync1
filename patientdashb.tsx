import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#" prefetch={false}>
                  Dashboard
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Doctor Profile</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <img
                  src="/placeholder.svg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 p-4 sm:px-6 sm:py-0 md:p-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="col-span-1 md:col-span-2">
            <Card>
              <CardHeader className="flex items-center gap-4 border-b pb-4">
                <Avatar className="h-16 w-16 border-2 border-primary">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>DR</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="text-2xl font-bold">Dr. John Doe</div>
                  <div className="text-sm text-muted-foreground">
                    Cardiologist
                  </div>
                </div>
              </CardHeader>
              <CardContent className="grid gap-6 py-6">
                <div className="grid gap-2">
                  <div className="text-sm font-medium text-muted-foreground">
                    Contact
                  </div>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <PhoneIcon className="h-5 w-5" />
                      <a href="#" className="text-sm">
                        +1 (234) 567-890
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <MailIcon className="h-5 w-5" />
                      <a href="#" className="text-sm">
                        john.doe@example.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="text-sm font-medium text-muted-foreground">
                    Affiliation
                  </div>
                  <div className="flex items-center gap-2">
                    <BuildingIcon className="h-5 w-5" />
                    <div className="text-sm">Apollo Hospital</div>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="text-sm font-medium text-muted-foreground">
                    Expertise
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartIcon className="h-5 w-5" />
                    <div className="text-sm">Endocrinology</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-1">
            <Card>
              <CardHeader className="border-b pb-4">
                <CardTitle>Upcoming Appointments</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">John Doe</div>
                    <div className="text-sm text-muted-foreground">
                      10:00 AM
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Endocrinology Checkup
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Confirmed
                    </Badge>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Jane Smith</div>
                    <div className="text-sm text-muted-foreground">2:00 PM</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Follow-up Consultation
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Pending
                    </Badge>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Michael Johnson</div>
                    <div className="text-sm text-muted-foreground">4:30 PM</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Routine Checkup
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Confirmed
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

function BuildingIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
