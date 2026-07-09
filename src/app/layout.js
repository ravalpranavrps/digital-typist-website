import "./globals.css";

export const metadata = {
  title: "Digital Typist | Thesis Typing & Research Support",
  description:
    "Professional thesis typing, editing, proofreading and academic formatting services for PhD and M.Phil scholars.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
