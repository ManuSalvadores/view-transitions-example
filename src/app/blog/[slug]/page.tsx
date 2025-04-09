import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock, User, ArrowLeft } from "lucide-react"
import {unstable_ViewTransition as ViewTransition} from "react";


const getPosts = () => {
  return [
    {
      id: 1,
      slug: "getting-started-with-nextjs",
      title: "Getting Started with Next.js",
      description: "Learn how to build modern web applications with Next.js",
      content:
        "Next.js is a React framework that enables server-side rendering and static site generation for React applications. It's a powerful tool for building modern web applications with features like file-based routing, API routes, and more.\n\nIn this post, we'll explore how to set up a Next.js project from scratch, understand its file structure, and leverage its key features to build performant web applications.\n\nNext.js provides an excellent developer experience with features like Fast Refresh, which gives you instantaneous feedback on edits made to your React components. It also offers built-in CSS and Sass support, allowing you to import CSS files directly in your JavaScript components.\n\nOne of the most powerful features of Next.js is its hybrid rendering capabilities. You can choose between Server-Side Rendering (SSR), Static Site Generation (SSG), and Client-Side Rendering on a per-page basis, allowing you to optimize for both performance and user experience.",
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
        "Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. This guide covers everything from basic usage to advanced techniques for optimizing your Tailwind workflow.\n\nUnlike traditional CSS frameworks that provide pre-designed components, Tailwind gives you low-level utility classes that let you build completely custom designs. This approach might seem verbose at first, but it offers unparalleled flexibility and eliminates the need to write custom CSS for unique designs.\n\nIn this comprehensive guide, we'll cover Tailwind's core concepts, responsive design utilities, state variants, and how to optimize your production builds. We'll also explore how to extend Tailwind with custom utilities and plugins to suit your project's specific needs.\n\nBy the end of this guide, you'll have a solid understanding of how to leverage Tailwind CSS to build beautiful, responsive interfaces without writing a single line of custom CSS.",
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
        "React Server Components represent a new paradigm in React development, allowing components to render on the server with zero client-side JavaScript. This post explains how they work and how to use them effectively in your Next.js applications.\n\nServer Components enable you to write UI that can be rendered and optionally cached on the server. They help reduce the amount of JavaScript sent to the client, leading to improved performance and better user experience, especially on slower devices and networks.\n\nIn this post, we'll explore the fundamental concepts behind Server Components, how they differ from traditional Client Components, and the new mental model required to work with them effectively. We'll also look at practical examples of when to use Server Components versus Client Components in your Next.js applications.\n\nWe'll cover important topics like data fetching in Server Components, handling interactivity with Client Components, and how to structure your application to take full advantage of this new paradigm. By the end, you'll have a solid understanding of how Server Components can help you build faster, more efficient React applications.",
      author: "Alex Johnson",
      date: "2023-10-25",
      readTime: "10 min read",
    },
  ]
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const posts = getPosts()
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link href="/">
          <Button variant="outline" className="mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 max-w-3xl">
      <Link href="/">
        <Button variant="outline" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>
      </Link>

      <article>
        <ViewTransition name={post.title}><h1 className="text-4xl font-bold mb-4">{post.title}</h1></ViewTransition>
        <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
          <div className="flex items-center">
            <User className="mr-1 h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <CalendarIcon className="mr-1 h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  )
}
