import type { Metadata } from "next";
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./globals.css";




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body> {/* ClassName hata diya */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
