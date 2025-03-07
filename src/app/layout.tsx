import type { Metadata } from "next";
import "./reset.css";

export const metadata: Metadata = {
  title: "단버스",
  description: "단버스 새로운 universe로의 연결",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
