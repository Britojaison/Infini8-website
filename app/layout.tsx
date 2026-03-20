import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"]
});
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-jetbrains-mono" 
});

export const metadata: Metadata = {
  title: "Infini8",
  description: "AI-powered platform to help businesses automate, scale, and optimize critical growth functions",
  icons: {
    icon: "/infini8_logo.png",
    apple: "/infini8_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
       <body className={`${inter.className} bg-[#030305] text-white selection:bg-cyan-500/30 overflow-x-hidden`}>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}


