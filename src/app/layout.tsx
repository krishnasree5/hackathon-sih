import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "PathFinder",
  description: "Find your career path with personalized guidance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen m-0 p-0">
        <Header />
        <main className="flex-1 p-4 m-0 p-0">{children}</main>
      </body>
    </html>
  );
}
