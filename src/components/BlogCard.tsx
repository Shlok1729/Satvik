import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-primary/5 h-full flex flex-col">
        {/* Thumbnail */}
        <div className="relative h-48 bg-gradient-to-br from-primary/15 to-accent/10 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          {/* Category badge */}
          <span className="absolute top-4 left-4 bg-accent/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 text-xs text-text-light mb-3">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>

          <h3 className="font-heading text-lg font-bold text-text-dark mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-text-light text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
            Read More
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </article>
    </Link>
  );
}
