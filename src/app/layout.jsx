import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Uyga vazifa",
  description: "CSR SSR SSG ISR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Navigate  */}
        <nav className="flex gap-4 font-medium">
          <Link href="/csr">CSR</Link>
          <Link href="/ssr">SSR</Link>
          <Link href="/ssg">SSG</Link>
          <Link href="/isr">ISR</Link>
        </nav>

        <hr />

        {/* betlari */}
        {children}
      </body>
    </html>
  );
}
