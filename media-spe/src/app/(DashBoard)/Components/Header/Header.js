import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className={style.header}>
      <Link href="/admin/articles">Gestion des articles</Link>
    </div>
  );
}

export default Header;
