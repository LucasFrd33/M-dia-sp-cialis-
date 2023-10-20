import style from "./Style/HomeAdmin.module.scss";
import CreateArticlesForm from "../Components/CreateArticlesForm/CreateArticlesForm";

function Admin() {
  return <div className={`${style.home}`}>{/* <CreateArticlesForm /> */}</div>;
}

export default Admin;
