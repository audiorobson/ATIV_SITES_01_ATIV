import Image from "next/image";

type SiteLogoProps = Readonly<{
  className?: string;
  variant?: "lockup" | "symbol";
}>;

export function SiteLogo({ className, variant = "lockup" }: SiteLogoProps) {
  const symbol = variant === "symbol";

  return (
    <Image
      alt={symbol ? "ATIV" : "ATIV Tecnologia"}
      className={[
        "ativ-logo",
        symbol ? "ativ-logo--simbolo" : "ativ-logo--completo",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      decoding="async"
      height={symbol ? 36 : 78}
      src={symbol ? "/brand/icon-claro.svg" : "/brand/logo-2t-claro.svg"}
      width={symbol ? 36 : 153}
    />
  );
}
