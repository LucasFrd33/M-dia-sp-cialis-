import style from "./ArticlesList.module.scss";
import prisma from "@/utils/prisma";

function ArticlesList({ data }) {
  async function deleteArticles(id) {
    await prisma.articles.delete({
      where: { id: id },
    });
  }
  return (
    <div className={style.list}>
      <h3>{data.title}</h3>
      <button onClick={deleteArticles(data.id)}>Supprimer</button>
    </div>
  );
}

export default ArticlesList;
