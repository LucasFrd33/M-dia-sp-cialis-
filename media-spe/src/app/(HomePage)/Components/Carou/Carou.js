import style from "./carousel.module.scss";
import CarouCard from "./components/CarouCard";

function Carou({ carouselArticles }) {
  return (
    <div className={style.carousel}>
      <div className={style.containerCardCarou}>
        {carouselArticles.map((article) => (
          <CarouCard article={article} />
        ))}
      </div>
    </div>
  );
}

export default Carou;
