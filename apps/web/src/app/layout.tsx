import { buildMetadata } from "@ativ/seo";
import "@ativ/ui/styles.css";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { localFontPreloads } from "@/lib/fonts";

import "./fonts.css";
import "./globals.css";

export const metadata = buildMetadata({
  title: "Fundação técnica | ATIV",
  description:
    "Superfície técnica temporária para validar a fundação da plataforma ATIV.",
  pathname: "/",
  index: false,
});

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      {localFontPreloads.map((href) => (
        <link
          key={href}
          rel="preload"
          href={href}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      ))}
      <body className="ativ-escuro">
        <a className="skip-link" href="#conteudo-principal">
          Pular para o conteúdo
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
