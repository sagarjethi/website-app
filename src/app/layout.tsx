import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COPUTE — Decentralized AI Compute Network",
  description: "Earn crypto by contributing your idle GPU power. Join the decentralized AI compute revolution.",
  keywords: ["AI", "GPU", "compute", "decentralized", "blockchain", "Solana", "WebGPU", "earn crypto"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-void text-cloud antialiased">
        {/* Scan line effect */}
        <div
          className="fixed inset-0 pointer-events-none z-50 opacity-[0.02]"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
          }}
        />
        {children}
      </body>
    </html>
  );
}
