import Navbar from "./component/navbar";
import Footer from "./component/footer"; // 1. Import your footer component
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F3F0E6] text-[#221F1B] min-h-screen flex flex-col font-sans">
        <Navbar />
        
        {/* Main page content container */}
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer /> {/* 2. Render your footer component here */}
      </body>
    </html>
  );
}