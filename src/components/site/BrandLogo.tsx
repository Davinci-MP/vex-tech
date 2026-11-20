import Image from "next/image";

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/vex-tech-mark.png"
      alt=""
      width={320}
      height={218}
      sizes="64px"
      className={`h-auto ${className}`}
    />
  );
}

// Web copy of the transparent logo, cropped to its visible bounds.
export function BrandLogoFull({
  className = "",
  alt = "VEX Tech",
  sizes = "112px",
  eager = false,
}: {
  className?: string;
  alt?: string;
  sizes?: string;
  eager?: boolean;
}) {
  return (
    <Image
      src="/images/vex-tech-logo-web.png"
      alt={alt}
      width={480}
      height={432}
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      className={`w-auto ${className}`}
    />
  );
}
