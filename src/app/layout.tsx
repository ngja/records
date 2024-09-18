import type {Metadata} from "next";
import {Nanum_Gothic_Coding} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes";

const nanumGothicCoding = Nanum_Gothic_Coding({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Records",
  description: "Record Everything",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nanumGothicCoding.className} antialiased`}
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
