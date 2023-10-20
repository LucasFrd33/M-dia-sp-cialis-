import Link from "next/link";
import style from "./header.module.scss";

function Header() {
  return (
    <div className={style.header}>
      <Link href="/admin/articles" className={style.button}>
        Gestion des articles
      </Link>
      <Link href="/admin/articles" className={style.button}>
        Creation d'un article
      </Link>
      <Link href="/admin/articles" className={style.button}>
        Gestion des commentaires
      </Link>
    </div>
  );
}

export default Header;
