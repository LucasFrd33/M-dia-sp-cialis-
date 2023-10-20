import style from "./Style/HomeAdmin.module.scss";

function Admin() {
  return <div className={`${style.home}`}><CreateArticlesForm /></div>;
}

export default Admin;
