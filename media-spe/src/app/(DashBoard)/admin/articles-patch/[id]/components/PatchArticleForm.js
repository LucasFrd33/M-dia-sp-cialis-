"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function PatchArticleForm({ articles }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      id: articles.id,
      title: articles.title,
      text: articles.text,
      type: articles.type,
      media: articles.media,
      miniatureArticle: articles.miniatureArticle,
    },
  });
  const router = useRouter();

  async function onSubmit(data) {
    try {
      const miniatureArticle = data.miniatureArticle[0];
      const media = data.media[0];

      const readFileAsDataURL = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event) => resolve(event.target.result.split(",")[1]);
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(file);
        });
      };

      const [media64, miniatureArticle64] = await Promise.all([
        readFileAsDataURL(media),
        readFileAsDataURL(miniatureArticle),
      ]);

      data.media = media64;
      data.miniatureArticle = miniatureArticle64;

      const response = await fetch(`/api/article`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const responseData = await response.json();

      reset();
      router.refresh();
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center"
      encType="multipart/form-data"
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
  );
}

export default PatchArticleForm;
