/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";

export function LandingPage() {
  return (
    <div className="w-full space-y-12">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">QueerSports Space</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Resources
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Lectures
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <div
        className="space-y-8 text-center py-12 lg:py-24"
        style={{
          backgroundImage: "url('/duteechand.webp')",
        }}
      >
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            QueerSports Space
          </h1>
          <p className="mx-auto max-w-2xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Creating an inclusive space for LGBTQ+ athletes and sports
            enthusiasts.
          </p>
        </div>
      </div>
      <div className="bg-gray-100/50 py-12 lg:py-24 dark:bg-gray-800/50">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Us
            </h2>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We are dedicated to promoting diversity and inclusion in sports.
              Our mission is to provide a safe and supportive environment for
              LGBTQ+ athletes and allies.
            </p>
          </div>
        </div>
      </div>
      <div className="container py-12 lg:py-24">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Resources
            </h2>
              <div className="flex space-x-3 mb-4">
                <Card className="w-full max-w-md">
                  <CardHeader>
                    <CardTitle>PDF Documents</CardTitle>
                    <CardDescription>
                      Explore our collection of PDFs and documents.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex items-center space-x-4">
                      <FileIcon className="h-6 w-6" />
                      <Link className="text-blue-600 hover:underline" href="#">
                        Document 1
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card className="w-full max-w-md">
                  <CardHeader>
                    <CardTitle>PDF Documents</CardTitle>
                    <CardDescription>
                      Explore our collection of PDFs and documents.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex items-center space-x-4">
                      <FileIcon className="h-6 w-6" />
                      <Link className="text-blue-600 hover:underline" href="#">
                        Document 2
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card className="w-full max-w-md">
                  <CardHeader>
                    <CardTitle>PDF Documents</CardTitle>
                    <CardDescription>
                      Explore our collection of PDFs and documents.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex items-center space-x-4">
                      <FileIcon className="h-6 w-6" />
                      <Link className="text-blue-600 hover:underline" href="#">
                        Document 3
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12 lg:py-24 dark:bg-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Lectures
            </h2>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Watch recordings or read transcripts of our past lectures and
              presentations on LGBTQ+ inclusion in sports.
            </p>
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4 md:p-6">
              <div className="relative group overflow-hidden rounded-lg">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Thumbnail 1"
                  className="object-cover w-full h-60"
                  height={225}
                  src="/image1.webp"
                  style={{
                    aspectRatio: "400/225",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="bg-gray-50 p-2 flex items-center gap-2 text-sm dark:bg-gray-950 dark:text-gray-500">
                  <VideoIcon className="w-4 h-4" />
                  <span className="truncate-2-lines">
                    How to Make the Perfect Cup of Coffee at Home
                  </span>
                  <span className="ml-auto">5:42</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayIcon className="w-10 h-10 fill-white" />
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Thumbnail 2"
                  className="object-cover w-full h-60"
                  height={225}
                  src="/image1.webp"
                  style={{
                    aspectRatio: "400/225",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="bg-gray-50 p-2 flex items-center gap-2 text-sm dark:bg-gray-950 dark:text-gray-500">
                  <VideoIcon className="w-4 h-4" />
                  <span className="truncate-2-lines">
                    Exploring Hidden Gems: Hiking Trails in the Pacific
                    Northwest
                  </span>
                  <span className="ml-auto">8:19</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayIcon className="w-10 h-10 fill-white" />
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Thumbnail 3"
                  className="object-cover w-full h-60"
                  height={225}
                  src="/image1.webp"
                  style={{
                    aspectRatio: "400/225",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="bg-gray-50 p-2 flex items-center gap-2 text-sm dark:bg-gray-950 dark:text-gray-500">
                  <VideoIcon className="w-4 h-4" />
                  <span className="truncate-2-lines">
                    The Art of Sourdough: Mastering the Perfect Loaf
                  </span>
                  <span className="ml-auto">12:10</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayIcon className="w-10 h-10 fill-white" />
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Thumbnail 4"
                  className="object-cover w-full h-60"
                  height={225}
                  src="/image1.webp"
                  style={{
                    aspectRatio: "400/225",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="bg-gray-50 p-2 flex items-center gap-2 text-sm dark:bg-gray-950 dark:text-gray-500">
                  <VideoIcon className="w-4 h-4" />
                  <span className="truncate-2-lines">
                    Unboxing the Latest Tech: Gadgets and Gizmos Galore!
                  </span>
                  <span className="ml-auto">6:37</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayIcon className="w-10 h-10 fill-white" />
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Thumbnail 5"
                  className="object-cover w-full h-60"
                  height={225}
                  src="/image1.webp"
                  style={{
                    aspectRatio: "400/225",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="bg-gray-50 p-2 flex items-center gap-2 text-sm dark:bg-gray-950 dark:text-gray-500">
                  <VideoIcon className="w-4 h-4" />
                  <span className="truncate-2-lines">
                    Cooking with Chef Mia: Delicious and Easy Recipes for Busy
                    Days
                  </span>
                  <span className="ml-auto">9:24</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayIcon className="w-10 h-10 fill-white" />
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Thumbnail 6"
                  className="object-cover w-full h-60"
                  height={225}
                  src="/image1.webp"
                  style={{
                    aspectRatio: "400/225",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="bg-gray-50 p-2 flex items-center gap-2 text-sm dark:bg-gray-950 dark:text-gray-500">
                  <VideoIcon className="w-4 h-4" />
                  <span className="truncate-2-lines">
                    The Great Outdoors: Camping Tips and Adventure Stories
                  </span>
                  <span className="ml-auto">14:50</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayIcon className="w-10 h-10 fill-white" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="container py-12 lg:py-24">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contact Us
            </h2>
            <form className="grid gap-4 md:gap-6">
              <div className="space-y-2">
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="space-y-2">
                <Textarea
                  className="min-h-[100px]"
                  id="message"
                  placeholder="Enter your message"
                />
              </div>
              <div className="flex flex-col gap-2 lg:flex-row">
                <Button type="submit">Submit</Button>
                <Button type="reset" variant="outline">
                  Reset
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 QueerSports Space. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function FileIcon(props: any) {
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
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function PlayIcon(props: any) {
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
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function VideoIcon(props: any) {
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
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  );
}
