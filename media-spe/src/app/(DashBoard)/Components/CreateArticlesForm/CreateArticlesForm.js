"use client";

import { useForm } from "react-hook-form";

function CreateArticlesForm() {
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    const file = data.file[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const base64String = event.target.result.split(",")[1];
      data.file = base64String;

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
        })
        .catch((error) => console.error("Error:", error));
    };

    reader.readAsDataURL(file);
  }

  return (
    <div className="h-screen flex justify-center">
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
            title="content"
            placeholder="Contenu de l'article"
            {...register("content")}
          />
        </label>

        <label>
          Importation du média (video, audio, image) :
          <input title="file" type="file" {...register("file")} />
        </label>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default CreateArticlesForm;
