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
          viewBox="0 0 1440 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          style={{ transform }}
          preserveAspectRatio="none"
        >
          <path
            d="M0 28V14C240 0 480 0 720 14C960 28 1200 28 1440 14V28H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`-my-px overflow-hidden ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1440 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full"
        style={{ transform }}
        preserveAspectRatio="none"
      >
        <path
          d="M0 20V8C120 14 240 18 360 16C480 14 600 8 720 6C840 4 960 8 1080 10C1200 14 1320 18 1440 16V20H0Z"
          fill="hsl(var(--background))"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
