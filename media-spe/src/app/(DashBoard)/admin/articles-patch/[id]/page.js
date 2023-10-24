import prisma from "@/utils/prisma";
import PatchArticleForm from "./components/PatchArticleForm";
import style from "./Style/PatchArticleForm.module.scss";

export default async function ArticlePatchPage({ params }) {
  const idArticles = parseInt(params.id);
  const articles = await prisma.articles.findUnique({
    where: {
      id: idArticles,
    },
  });
  return (
    <div className={style.formPatchArticles}>
      {<PatchArticleForm articles={articles} />}
    </div>
  );
}
