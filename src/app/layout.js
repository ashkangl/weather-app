import { Geist, Geist_Mono, Ubuntu } from "next/font/google";
import "./globals.css";
import Footer from "@/components/homapage/Footer";
import Header from "@/components/homapage/Header";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: '400'
})



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
