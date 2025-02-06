import "./globals.css";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learn Fast - Interactive Electricity Education",
  description: "A modern platform for learning about electricity with interactive 3D elements",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

