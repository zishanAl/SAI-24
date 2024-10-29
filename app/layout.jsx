import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Layout from "@/components/Layout";

export const metadata = {
  title: "Cognitive Wellness",
  description:
   "."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
