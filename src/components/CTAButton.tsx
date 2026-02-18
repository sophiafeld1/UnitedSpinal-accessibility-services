import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base = "inline-block px-8 py-3 font-semibold rounded transition-colors";
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover",
    outline: "border-2 border-white text-white hover:bg-white hover:text-accent",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
