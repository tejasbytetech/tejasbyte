import Image from "next/image";

interface LogoProps {
  size?: number;
  dark?: boolean;
  variant?: "icon" | "horizontal" | "full";
}

export default function Logo({ size = 36, dark = false, variant = "horizontal" }: LogoProps) {
  if (variant === "icon") {
    return (
      <Image
        src={dark ? "/logos/white-version-perfect-icon.png" : "/logos/full-color-primary.png"}
        alt="Tejasbyte"
        width={size}
        height={size}
        style={{ objectFit: "contain" }}
        priority
      />
    );
  }

  if (variant === "full") {
    return (
      <Image
        src={dark ? "/logos/white-version-perfect-icon.png" : "/logos/full-color-primary.png"}
        alt="Tejasbyte Technologies"
        width={size * 3.2}
        height={size}
        style={{ objectFit: "contain" }}
        priority
      />
    );
  }

  // horizontal (default)
  return (
    <Image
      src={dark ? "/logos/white-version-perfect-icon.png" : "/logos/horizontal-layout.png"}
      alt="Tejasbyte Technologies"
      width={size * 4.5}
      height={size}
      style={{ objectFit: "contain" }}
      priority
    />
  );
}
