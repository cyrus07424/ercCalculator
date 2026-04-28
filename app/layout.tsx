import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ERC Calculator - トヨタ純正ナビ ロック解除コード計算機",
  description:
    "トヨタ・レクサス純正カーナビ（NHDT・NHDN・NHZT・NHZN・NSZT・NSZN系）のERCコードからロック解除コードを無料で計算できるツールです。機種別の操作手順も確認できます。",
  keywords: [
    "ERC Calculator",
    "ERCコード",
    "ロック解除コード",
    "トヨタ",
    "レクサス",
    "純正ナビ",
    "カーナビ",
    "NHDT",
    "NHDN",
    "NHZT",
    "NHZN",
    "NSZT",
    "NSZN",
    "サービスモード",
    "解除コード計算",
  ],
  openGraph: {
    title: "ERC Calculator - トヨタ純正ナビ ロック解除コード計算機",
    description:
      "トヨタ・レクサス純正カーナビのERCコードからロック解除コードを無料で計算。機種別（NHDT・NHDN・NHZT・NHZN・NSZT・NSZN）の操作手順付き。",
    type: "website",
    locale: "ja_JP",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "ERC Calculator",
    description:
      "トヨタ・レクサス純正カーナビのERCコードからロック解除コードを計算するウェブアプリ。NHDT・NHDN・NHZT・NHZN・NSZT・NSZN系ナビに対応。",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "JPY",
    },
    inLanguage: "ja",
  };

  return (
    <html lang="ja">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
