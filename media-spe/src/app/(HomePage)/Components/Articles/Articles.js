import style from "./articles.module.scss";

function Articles({ articles }) {
  return (
    <div className={style.articles}>
      <h2>{articles.title}</h2>
      <p>{articles.text}</p>
      <img src={`data:image/jpeg;base64,${articles.miniatureArticle}`} />
      <video width="750" height="500" controls>
        <source
          src={`data:video/mp4;base64,${articles.media}`}
          type="video/mp4"
        />
      </video>
      <audio controls src={`data:audio/mp3;base64,${articles.media}`} />
    </div>
  );
}

export default Articles;
