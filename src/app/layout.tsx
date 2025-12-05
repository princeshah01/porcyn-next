import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import React from "react";
import "./globals.css";

// Fonts
const inter = localFont({
  src: "../assets/fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 700 800 900",
});

const spaceGrotesk = localFont({
  src: "../assets/fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 700",
});

// Metadata
export const metadata: Metadata = {
  title: "Porcyn — Explore Concepts. Ask Questions. Grow Faster",
  description: `Porcyn is a developer-focused platform built to 
  help you dig deeper into complex concepts, collaborate with other developers, 
  and grow your career. Ask questions, join discussions, explore threads, 
  and get instant AI-powered responses that accelerate your learning. 
  Whether you're solving problems, sharing knowledge, or searching for your next job opportunity, 
  Porcyn brings everything together in one smart, connected space`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        cz-shortcut-listen="true"
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
