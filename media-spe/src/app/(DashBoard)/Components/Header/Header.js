import Link from "next/link";
import style from "./header.module.scss";

function Header() {
  return (
    <div className={style.header}>
      <Link href="/admin/articles-list" className={style.button}>
        Gestion des articles
      </Link>
      <Link href="/admin/articles-create" className={style.button}>
        Creation d'un article
      </Link>
      {/* <Link href="/admin/comment" className={style.button}>
        Gestion des commentaires
      </Link> */}
      <Link href="/" className={style.button}>
        Accueil
      </Link>
    </div>
  );
}

export default Header;
