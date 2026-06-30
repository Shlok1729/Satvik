import './Blog.css';

export default function Blog() {
  const posts = [
    {
      title: "Benefits of Daily Meditation",
      excerpt: "Discover how just 10 minutes a day can transform your mental clarity.",
      date: "Oct 12, 2023"
    },
    {
      title: "Yoga for Better Sleep",
      excerpt: "Struggling with insomnia? Try these 5 gentle poses before bed.",
      date: "Oct 05, 2023"
    },
    {
      title: "Understanding Satvik Diet",
      excerpt: "Fuel your body the right way with our guide to pure eating.",
      date: "Sep 28, 2023"
    }
  ];

  return (
    <div className="blog-page">
      <div className="page-header">
        <h1>Wellness Blog</h1>
      </div>
      <section className="section container">
        <div className="blog-grid">
          {posts.map((post, idx) => (
            <article key={idx} className="blog-card glass-effect animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="blog-date">{post.date}</div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <button className="text-link mt-4 btn-link">Read More</button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
