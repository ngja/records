import type {Metadata} from "next";
import {Nanum_Gothic_Coding} from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
