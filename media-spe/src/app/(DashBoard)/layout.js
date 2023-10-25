import { Inter } from "next/font/google";
import styles from "./styles/dashboard.module.scss";
import "../styles/globals.css";
import Header from "./Components/Header/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Dashboard",
  description: "Le dashboard de l'application.",
};

export default function DashBoardLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${styles.main}`}>
        <main className={`${styles.admin}`}>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
