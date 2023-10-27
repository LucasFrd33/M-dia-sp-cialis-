import style from "../carousel.module.scss";

function CarouCard({ article, openViewMore }) {
  return (
    <div className={style.cardCarou}>
      <img src={`data:image/jpeg;base64,${article.miniatureArticle}`} />
      <div className={style.textCarouContainer}>
        <div className={style.textCarou}>
          <h3>{article.title}</h3>
          <p>{article.text}</p>
        </div>
        <button onClick={openViewMore}>Lire l’article</button>
      </div>
    </div>
  );
}

export default CarouCard;
