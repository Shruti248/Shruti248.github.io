import { Mukta } from "next/font/google";
import "./globals.css";

const muktaSans = Mukta({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata = {
  metadataBase: new URL('https://shruti248.github.io'),
  title: "Shruti - Full Stack Engineer",
  description: "Full Stack Engineer",
  keywords: "Shruti, Full Stack Engineer",
  author: "Shruti"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${muktaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
