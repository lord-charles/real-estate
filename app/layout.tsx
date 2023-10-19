import './globals.css';
import Navbar from './components/Navbar/index';
import { Footer } from "./components";
import ScrollToTop from "./components/scroll-to-top/index";

export const metadata = {
  title: "Rift Homes",
  description:
    "For Nakuru house hunting, choose rift homes as your ultimate solution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-screen overflow-x-hidden">
        <Navbar />
        {children}
        <ScrollToTop />

        <Footer />
      </body>
    </html>
  );
}
