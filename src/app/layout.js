import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "jungheerok 포트폴리오",
  description: "정희록의 포트폴리오 입니다☺️",
  keywords: "Next.js, 웹 개발, 포트폴리오, 프론트엔드",
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
