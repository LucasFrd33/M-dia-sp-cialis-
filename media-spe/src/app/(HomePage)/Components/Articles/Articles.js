import style from "./articles.module.scss";

function Articles({ articles }) {
  return (
    <div className={style.articles}>
      <h2>{articles.title}</h2>
      <p>{articles.content}</p>
      <img src={`data:image/jpeg;base64,${articles.file}`} />
    </div>
  );
}

export default Articles;
