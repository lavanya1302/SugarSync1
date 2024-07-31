import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function PatientInfoForm() {
  return (
    <div className="w-full max-w-5xl mx-auto p-6 sm:p-8 md:p-10 h-svh">
      <div className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Health Submission Form</h2>
          <p className="text-muted-foreground text-sm">
            Fill out the form below to submit your health information.
          </p>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact">Contact Number</Label>
              <Input
                id="contact"
                type="tel"
                placeholder="Phone number"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" type="number" placeholder="age" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                id="weight"
                type="number"
                placeholder="weight"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="blood-pressure">Blood Pressure</Label>
              <Input
                id="blood-pressure"
                placeholder="blood pressure"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="stress-level">Stress Level</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select stress level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="glucose">Glucose Level</Label>
              <Input
                id="glucose"
                type="number"
                placeholder="glucose level"
              />
            </div>
          </div>
          <div className="col-span-2 space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="exercise-followups">Exercise Followups</Label>
              <Textarea
                id="exercise-followups"
                rows={3}
                placeholder="Describe your exercise routine and followups"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="diet-followups">Diet Followups</Label>
              <Textarea
                id="diet-followups"
                rows={3}
                placeholder="Describe your diet and any followups"
              />
            </div>
          </div>
        </form>
        <div className="flex justify-end">
          <Button type="submit" className="px-8 py-2">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
