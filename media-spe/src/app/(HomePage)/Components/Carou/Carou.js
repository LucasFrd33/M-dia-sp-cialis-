"use client";
import { useState } from "react";
import style from "./carousel.module.scss";
import CarouCard from "./components/CarouCard";
import InfoCarou from "./components/InfoCarou";

function Carou({ carouselArticles }) {
  const [currentCarou, setCurrentCarou] = useState(0);
  const [slide, setSlide] = useState(0);

  const backgroundCarou = {
    backgroundImage: `url(data:image/jpeg;base64,${carouselArticles[currentCarou].miniatureArticle})`,
  };

  function incrCurrentSlide() {
    const current = currentCarou;
    const divi = 100 / carouselArticles.length;
    const maxIncre = carouselArticles.length - 1;
    const desincSlide = maxIncre * divi;
    const currentSlide = slide;
    if (current < maxIncre) {
      setCurrentCarou(current + 1);
      setSlide(currentSlide - divi);
    } else {
      setCurrentCarou(0);
      setSlide(currentSlide + desincSlide);
    }
    // console.log(`Avant : ${slide}`);
  }

  function desincCurrentSlide() {
    const current = currentCarou;
    const divi = 100 / carouselArticles.length;
    const currentSlide = slide;
    const maxDecrement = 0;
    const maxIncre = carouselArticles.length - 1;
    const desincSlide = maxIncre * divi;
    if (current > maxDecrement) {
      setCurrentCarou(current - 1);
      setSlide(currentSlide + divi);
    } else {
      setCurrentCarou(carouselArticles.length - 1);
      setSlide(currentSlide - desincSlide);
    }
    // console.log(`Arriere : ${slide}`);
  }

  const changeSlide = {
    transform: `translate(${slide}%)`,
  };

  return (
    <div className={style.carrousel} style={backgroundCarou}>
      <div className={style.blur}></div>

      <div className={`${style.containerCardCarou}`} style={changeSlide}>
        {carouselArticles.map((article) => (
          <CarouCard article={article} key={article.id} />
        ))}
      </div>

      <div className={style.infoCarou}>
        <div className={style.info}>
          {carouselArticles.map((article, index) => (
            <InfoCarou
              article={article}
              index={index}
              key={index}
              currentCarou={currentCarou}
            />
          ))}
        </div>
      </div>

      <div className={style.controlCarou}>
        <button onClick={desincCurrentSlide}>{"<"}</button>
        <button onClick={incrCurrentSlide}>{">"}</button>
      </div>
    </div>
  );
}

export default Carou;
