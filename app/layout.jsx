import "./globals.css";
import { Dancing_Script, Rubik, EB_Garamond } from "next/font/google";
// import { localFont } from "next/font/local";

import Header from "./components/Header";
import Footer from "./components/Footer";

const dancingScript = Dancing_Script({
  weight: "500",
  variable: "--font-handwrite",
  subsets: ["vietnamese"],
  display: "swap",
});

const rubik = Rubik({
  weight: ["800", "400", "300"],
  subsets: ["hebrew"],
  display: "swap",
  variable: "--font-rubik",
});
const ebGaramond = EB_Garamond({ display: "swap", subsets: ["greek"] });

export const metadata = {
  title: "The Place",
  description: "lukury hotel",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${dancingScript.variable} ${rubik.variable}`}
    >
      <body className={ebGaramond.className}>
        {
          <>
            <Header />
            {children}
            <Footer />
          </>
        }
      </body>
    </html>
  );
}
