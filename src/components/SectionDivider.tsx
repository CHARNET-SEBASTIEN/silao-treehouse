/**
 * Organic SVG wave separator between homepage sections.
 * variant: "wave" (default) or "curve"
 * flip: mirror vertically
 */
const SectionDivider = ({
  variant = "wave",
  flip = false,
  className = "",
}: {
  variant?: "wave" | "curve";
  flip?: boolean;
  className?: string;
}) => {
  const transform = flip ? "scaleY(-1)" : undefined;

  if (variant === "curve") {
    return (
      <div className={`-my-px overflow-hidden ${className}`} aria-hidden>
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          style={{ transform }}
          preserveAspectRatio="none"
        >
          <path
            d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`-my-px overflow-hidden ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1440 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full"
        style={{ transform }}
        preserveAspectRatio="none"
      >
        <path
          d="M0 48V16C120 32 240 40 360 36C480 32 600 16 720 12C840 8 960 16 1080 24C1200 32 1320 40 1440 36V48H0Z"
          fill="hsl(var(--background))"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
