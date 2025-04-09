import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Clock, User } from "lucide-react" 
import {unstable_ViewTransition as ViewTransition} from "react"; 


export default function Home() {
  // Sample blog posts data
  const posts = [
    {
      id: 1,
      slug: "getting-started-with-nextjs",
      title: "Getting Started with Next.js",
      description: "Learn how to build modern web applications with Next.js",
      content:
        "Next.js is a React framework that enables server-side rendering and static site generation for React applications. It's a powerful tool for building modern web applications with features like file-based routing, API routes, and more.",
      author: "Jane Doe",
      date: "2023-10-15",
      readTime: "5 min read",
    },
    {
      id: 2,
      slug: "mastering-tailwind-css",
      title: "Mastering Tailwind CSS",
      description: "A comprehensive guide to using Tailwind CSS effectively",
      content:
        "Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. This guide covers everything from basic usage to advanced techniques for optimizing your Tailwind workflow.",
      author: "John Smith",
      date: "2023-10-20",
      readTime: "8 min read",
    },
    {
      id: 3,
      slug: "server-components-explained",
      title: "React Server Components Explained",
      description: "Understanding the new React Server Components paradigm",
      content:
        "React Server Components represent a new paradigm in React development, allowing components to render on the server with zero client-side JavaScript. This post explains how they work and how to use them effectively in your Next.js applications.",
      author: "Alex Johnson",
      date: "2023-10-25",
      readTime: "10 min read",
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Blog</h1>
        <Link href="/blog/create">
          <Button>Create New Post</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="text-xl">
                <ViewTransition name={post.title}><Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link></ViewTransition>
              </CardTitle>
              <CardDescription>{post.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="line-clamp-3 text-muted-foreground">{post.content.substring(0, 150)}...</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-2 pt-4 border-t">
              <div className="flex items-center text-sm text-muted-foreground">
                <User className="mr-1 h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex justify-between w-full text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CalendarIcon className="mr-1 h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
