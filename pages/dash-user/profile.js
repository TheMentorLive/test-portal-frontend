/**
 * v0 by Vercel.
 * @see https://v0.dev/t/B1LttvRso19
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/public/ui/label"
import { Input } from "@/public/ui/input"
import { Textarea } from "@/public/ui/textarea"
import Link from "next/link"
import { Button } from "@/public/ui/button"

export default function Profile() {
  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      <div className="w-full max-w-[800px] mx-auto bg-white p-8 sm:p-12 space-y-6 rounded-lg shadow-lg">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Edit Profile</h1>
          <p className="text-muted-foreground">Update your profile information.</p>
        </div>
        <form className="space-y-6">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Personal Info</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Enter your name" defaultValue="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    defaultValue="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    defaultValue="+1 (555) 555-5555"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Location</Label>
                  <Input
                    id="address"
                    type="text"
                    placeholder="Enter your address"
                    defaultValue="123 Main St, Anytown USA"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Enter your bio"
                  className="min-h-[100px]"
                  defaultValue="I am a software engineer with a passion for building beautiful and functional web applications. I have been working in the industry for 5 years and have experience with a variety of technologies including React, Node.js, and MongoDB."
                />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Education</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="college">College</Label>
                  <Input
                    id="college"
                    type="text"
                    placeholder="Enter your college"
                    defaultValue="University of California, Berkeley"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="graduation-year">Graduation Year</Label>
                  <Input
                    id="graduation-year"
                    type="text"
                    placeholder="Enter your graduation year"
                    defaultValue="2020"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cgpa">CGPA</Label>
                  <Input id="cgpa" type="text" placeholder="Enter your CGPA" defaultValue="4.0" required />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Recent Employment</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Current Company</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Enter your current company"
                    defaultValue="Acme Inc."
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="skills">Job Role</Label>
                  <Input
                    id="skills"
                    type="text"
                    placeholder="Enter your job role"
                    defaultValue="Software Engineer"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Links</h2>
              <div className="space-y-2">
                <Label htmlFor="links">Links</Label>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Input
                      id="links"
                      type="text"
                      placeholder="Enter your links"
                      defaultValue="https://github.com/johndoe"
                      required
                    />
                  </div>
                  <div className="flex items-center">
                    <Input
                      id="links"
                      type="text"
                      placeholder="Enter your links"
                      defaultValue="https://linkedin.com/in/johndoe"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <Link
              href="/dash-user/dash"
              className="inline-flex items-center px-4 py-2 rounded-md text-muted-foreground hover:bg-muted/20 transition-colors"
              prefetch={false}
            >
              Cancel
            </Link>
            <Button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}