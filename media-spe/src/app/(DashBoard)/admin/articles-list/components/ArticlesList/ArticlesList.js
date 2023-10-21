"use client";
import style from "./ArticlesList.module.scss";
import { useRouter } from "next/navigation";

function ArticlesList({ data }) {
  const router = useRouter();

  const onDelete = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/article/${data.id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.list}>
      <h3>{data.title}</h3>
      <button onClick={onDelete}>Supprimer</button>
    </div>
  );
}

export default ArticlesList;
