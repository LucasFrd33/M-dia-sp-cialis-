import prisma from "@/utils/prisma";
import ArticlesList from "./components/ArticlesList/ArticlesList";
import style from "./style/ArticlesListMain.module.scss";

export default async function ListArticles() {
  const articles = await prisma.articles.findMany({
    select: {
      title: true,
      id: true,
    },
  });
  return (
    <div className={style.listContent}>
      {articles.map((articles) => (
        <ArticlesList data={articles} />
      ))}
    </div>
  );
}
