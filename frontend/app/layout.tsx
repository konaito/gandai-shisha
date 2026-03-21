import type { Metadata } from "next";
import { RootProvider } from "fumadocs-ui/provider/next";
import "fumadocs-ui/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "BiPシーシャ — Build in Public",
  description:
    "完全AI駆動の貸切シーシャ。岩手大学生向け。物件探しから料金設計まで全プロセスをAIと一緒に構築。",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
