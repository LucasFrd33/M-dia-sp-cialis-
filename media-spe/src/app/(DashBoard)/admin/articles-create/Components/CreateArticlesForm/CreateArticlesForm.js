"use client";

import { useForm } from "react-hook-form";
import style from "./createArticlesForm.module.scss";
import { useRouter } from "next/navigation";

function CreateArticlesForm() {
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

  function onSubmit(data) {
    const miniatureArticle = data.miniatureArticle[0];
    const media = data.media[0];

    const reader = new FileReader();

    reader.onload = (event) => {
      const base64String = event.target.result.split(",")[1];

      data.media = base64String;
      data.miniatureArticle = base64String;

      fetch("/api/article", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          reset();
          router.refresh();
        })
        .catch((error) => console.error("Error:", error));
    };

    reader.readAsDataURL(miniatureArticle, media);
  }

  return (
    <div className={style.formCreateArticles}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center"
      >
        <label>
          Titre de l'article :
          <input
            title="title"
            placeholder="Le titre de l'article"
            {...register("title")}
          />
        </label>

        <label>
          Contenu de l'article :
          <textarea
            title="text"
            placeholder="Contenu de l'article"
            {...register("text")}
          />
        </label>

        <label>
          Type de l'article :
          <textarea
            title="type"
            placeholder="Contenu de l'article"
            {...register("type")}
          />
        </label>

        <label>
          Miniature de l'article :
          <input
            title="miniatureArticle"
            type="file"
            {...register("miniatureArticle")}
          />
        </label>

        <label>
          Importation du média (video, audio, image) :
          <input title="media" type="file" {...register("media")} />
        </label>

        <button type="submit">Créer</button>
      </form>
    </div>
  );
}

export default CreateArticlesForm;
