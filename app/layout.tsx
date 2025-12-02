import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">
        <div className="flex flex-col min-h-screen">
          <Header /> <main>{children}</main> <Footer />
        </div>
      </body>
    </html>
  );
}
