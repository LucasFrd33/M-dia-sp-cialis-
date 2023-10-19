import { Poppins } from "next/font/google";
import styles from "./styles/dashboard.module.scss";
import "../styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Dashboard",
  description: "Le dashboard de l'application.",
};

export default function DashBoardLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} ${styles.main}`}>
        <main className={`${styles.admin}`}>{children}</main>
      </body>
    </html>
  );
}
