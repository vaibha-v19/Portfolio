import { metadata } from "./metadata";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProviderWrapper } from "./ThemeProviderWrapper"; // Client wrapper

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-black text-white min-h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black min-h-screen`}>
        <ThemeProviderWrapper>
          <div className="min-h-screen bg-black">{children}</div>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
