import style from "../carousel.module.scss";

function CarouCard({ article }) {
  return (
    <div className={style.backgroundCard}>
      <div className={style.cardCarou}>
        <img src={`data:image/jpeg;base64,${article.headlineImage}`} />
        <div className={style.textCarouContainer}>
          <div className={style.textCarou}>
            <h3>{article.title}</h3>
            <p>{article.text}</p>
          </div>
          <button>Lire l’article</button>
        </div>
      </div>
    </div>
  );
}

export default CarouCard;
