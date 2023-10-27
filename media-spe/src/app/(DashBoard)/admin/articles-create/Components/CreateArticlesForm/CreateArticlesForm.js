"use client";

import { useForm } from "react-hook-form";
import style from "./createArticlesForm.module.scss";
import { useRouter } from "next/navigation";

function CreateArticlesForm() {
  const { register, handleSubmit, reset, watch } = useForm();
  const carouselArticle = watch("type", "article");
  const articleIsHeadline = watch("isHeadline", false);
  const router = useRouter();

  async function onSubmit(data) {
    try {
      const miniatureArticle = data.miniatureArticle[0];
      const media = data.media[0];

      // Fonction pour lire un fichier comme DataURL
      const readFileAsDataURL = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event) => resolve(event.target.result.split(",")[1]);
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(file);
        });
      };

      // Lecture des fichiers
      const [media64, miniatureArticle64] = await Promise.all([
        readFileAsDataURL(media),
        readFileAsDataURL(miniatureArticle),
      ]);

      // Mise à jour des données avec les nouvelles valeurs encodées en base64
      data.media = media64;
      data.miniatureArticle = miniatureArticle64;

      // Envoi des données au serveur
      const response = await fetch("/api/article", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Vérification de la réponse
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const responseData = await response.json();

      // Reset et refresh (assure-toi que ces fonctions existent et sont définies)
      reset();
      router.refresh();
    } catch (error) {
      console.error("Error:", error);
    }
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
          <select {...register("type")}>
            <option value="article">Article</option>
            <option value="video">Vidéo</option>
            <option value="shorts">Vidéo courte</option>
            <option value="podcast">Podcast</option>
          </select>
        </label>

        {carouselArticle === "article" && (
          <div>
            <label>
              Afficher l'article sur le carousel ? :
              <input
                type="checkbox"
                placeholder="isHeadline"
                {...register("isHeadline")}
              />
            </label>
            {articleIsHeadline && (
              <div>
                <label>
                  Texte du carousel :
                  <textarea
                    title="headlineTitle"
                    placeholder="Le titre de l'article"
                    {...register("headlineTitle")}
                  />
                </label>
                <label>
                  Image du carousel :
                  <input
                    title="headlineImage"
                    type="file"
                    {...register("headlineImage")}
                  />
                </label>
              </div>
            )}
          </div>
        )}

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
