import Image from "next/image";

type SiteLogoProps = Readonly<{
  className?: string;
}>;

export function SiteLogo({ className }: SiteLogoProps) {
  return (
    <Image
      alt="ATIV Tecnologia"
      className={["ativ-logo", "ativ-logo--completo", className]
        .filter(Boolean)
        .join(" ")}
      decoding="async"
      height="78"
      src="/brand/logo-2t-claro.svg"
      width="153"
    />
  );
}
