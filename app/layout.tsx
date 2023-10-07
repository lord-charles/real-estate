import './globals.css';
import Navbar from './components/Navbar/index';
import { Footer } from "./components";


export const metadata = {
  title: "Rift Homes",
  description:
    "For Nakuru house hunting, choose rift homes as your ultimate solution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
