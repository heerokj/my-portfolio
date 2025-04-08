import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "정희록 프론트엔드 포트폴리오",
  description: "정희록의 포트폴리오 입니다☺️",
  keywords: "Next.js, 웹 개발, 포트폴리오, 프론트엔드",
  openGraph: {
    type: "website",
    url: "https://jungheerok.vercel.app/",
    title: "정희록 프론트엔드 포트폴리오",
    description: "안녕하세요! 정희록의 포트폴리오 사이트입니다.☺️",
    siteName: "정희록 프론트엔드 포트폴리오",
    images: [
      {
        url: "/images/heerok-character.png",
        alt: "jungheerok image",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-content ">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
