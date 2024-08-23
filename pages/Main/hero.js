import Link from "next/link";
import { Button } from "@/public/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/public/ui/card";
import { Input } from "@/public/ui/input";
import { Label } from "@/public/ui/label";

export default function Hero() {
  return (
    <div className="flex-1 px-4 md:px-10 lg:px-20 xl:px-32 py-8">
      <section className="w-full flex items-center min-h-[100dvh] justify-center">
        <div className="container grid gap-6 px-4 mr-16 ml-16 -mt-32 md:px-6 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-4 pt-24">
            <h1 className="text-3xl  font-bold text-black tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Master the Future <br/> with  <br/> GenAI Learning
            </h1>
            <p className="max-w-full md:max-w-[600px] text-green-50 text-muted-foreground md:text-xl lg:text-base xl:text-lg">
            GenAI Learning offers world-class online courses and programs to help you achieve your career goals. Learn from
              industry experts and transform your future.
            </p>
            <div className="flex flex-col gap-6 md:flex-row">
              <Link
                href=""
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Explore Courses
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-10 md:mt-14 space-y-8">
            <Card className="w-full max-w-md border-opacity-40 border-blue-400">
              <CardHeader>
                <CardTitle className="text-xl md:text-[29px]">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="full-name" className="text-sm">Full Name</Label>
                  <Input id="full-name" placeholder="Full Name" className="border-opacity-40 border-blue-400 focus:border-blue-700" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm">Email</Label>
                  <Input id="email" placeholder="Email" type="email" className="border-opacity-40 border-blue-400 focus:border-blue-700" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-sm">Contact</Label>
                  <Input id="contact" placeholder="Contact" className="border-opacity-40 border-blue-400 focus:border-blue-700" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-500 text-white">Start Learning</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
