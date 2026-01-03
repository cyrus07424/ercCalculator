import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ERC Calculator - トヨタ車載機ロック解除コード計算機",
  description: "トヨタ車載機のERCコードからロック解除コードを計算するツール",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
