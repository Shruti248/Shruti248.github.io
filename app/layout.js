import { Mukta } from "next/font/google";
import "./globals.css";

const muktaSans = Mukta({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata = {
  title: "Shruti",
  description: "Full Stack Developer",
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
