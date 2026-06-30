interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      <h2
        className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-text-dark"
        }`}
      >
        {title}
      </h2>
      {/* Decorative accent line */}
      <div
        className={`w-16 h-1 rounded-full bg-accent mb-4 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/80" : "text-text-light"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
