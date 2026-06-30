import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Simple markdown-to-HTML for headings and paragraphs
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="font-heading text-2xl font-bold text-text-dark mt-10 mb-4"
          >
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("### ")) {
        return (
          <h3
            key={i}
            className="font-heading text-xl font-semibold text-text-dark mt-8 mb-3"
          >
            {block.replace("### ", "")}
          </h3>
        );
      }
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={i} className="list-disc list-inside space-y-2 my-4 text-text-light">
            {items.map((item, j) => (
              <li key={j}>{item.replace("- ", "")}</li>
            ))}
          </ul>
        );
      }
      if (block.startsWith("*") && block.endsWith("*")) {
        return (
          <p key={i} className="text-primary italic my-6 text-lg font-medium">
            {block.replace(/\*/g, "")}
          </p>
        );
      }
      return (
        <p key={i} className="text-text-light leading-relaxed my-4">
          {block}
        </p>
      );
    });
  };

  return (
    <>
      {/* ── Header ── */}
      <section className="pt-8 md:pt-16 pb-8 bg-gradient-to-b from-secondary to-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-text-light hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-4">
            {post.category}
          </span>

          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-text-light">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </section>

      {/* ── Thumbnail ── */}
      <section className="bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="aspect-[2/1] rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center mb-8 md:mb-12 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-8 md:py-12 bg-cream">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-primary/5">
            {renderContent(post.content)}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-text-light mb-4">
              Interested in trying a class?
            </p>
            <WhatsAppButton
              message={`Hi, I just read your blog post "${post.title}" and I'd like to know more about joining a class.`}
            >
              Chat With Us
            </WhatsAppButton>
          </div>
        </article>
      </section>
    </>
  );
}
