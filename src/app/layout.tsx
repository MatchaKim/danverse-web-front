import type { Metadata } from "next";
import "./reset.css";
import 'react-loading-skeleton/dist/skeleton.css'
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "단버스",
  description: "단버스 새로운 universe로의 연결",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const appKey=process.env.NEXT_PUBLIC_KAKAO_MAP_KEY

  return (
    <html lang="ko">
      <head>
      <script type="text/javascript" src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}`}></script>
      <GoogleAnalytics gaId="GTM-MCST3SGL" />
      </head>      
      <body>
      <Suspense fallback={<Skeleton height={100} />}>
        {children}
      </Suspense>
      </body>
    </html>
  );
}
