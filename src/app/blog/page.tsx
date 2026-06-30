"use client";

import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-0 bg-gradient-to-b from-secondary to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              title="Yoga & Wellness Blog"
              subtitle="Insights, tips, and inspiration to support your practice on and off the mat."
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Blog Grid ── */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {blogPosts.map((post, i) => (
              <AnimateOnScroll key={post.slug} delay={i * 0.1}>
                <BlogCard post={post} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
