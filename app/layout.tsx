import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

export const metadata: Metadata = {
  title: {
    default: "Genomac",
    template: "%s | Genomac",
  },
  description:
    "Genomac Holdings invests, governs, and scales a diversified portfolio across genomics,biotechnology, healthcare, and entrepreneurship.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Genomac",
    description:
      "Genomac Holdings invests, governs, and scales a diversified portfolio across genomics,biotechnology, healthcare, and entrepreneurship.",
    type: "website",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Genomac",
    description:
      "Genomac Holdings invests, governs, and scales a diversified portfolio across genomics,biotechnology, healthcare, and entrepreneurship.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <script
          key="ldjson"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Genomac",
              logo: "/logo.png",
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
