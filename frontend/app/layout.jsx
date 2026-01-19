import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Nike AI Rebrand",
  description: "AI-powered Nike website redesign",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
