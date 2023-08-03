import Header from "./components/Header";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Next.js Crash Course by Traversy Media",
  description: "Web Development Crash Course of Next.js",
  keywords:
    "web development, reactjs, react framework, frontend developer, html, css, js, react development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
