"use client";
import { useState } from "react";
import style from "./carousel.module.scss";
import CarouCard from "./components/CarouCard";
import InfoCarou from "./components/InfoCarou";

function Carou({ carouselArticles }) {
  const [currentCarou, setCurrentCarou] = useState(0);
  const [slide, setSlide] = useState(0);
  const [viewMore, setviewMore] = useState(false);

  const backgroundCarou = {
    backgroundImage: `url(data:image/jpeg;base64,${carouselArticles[currentCarou].headlineImage})`,
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

  function openViewMore() {
    setviewMore(!viewMore);
    console.log(viewMore);
  }

  return (
    <>
      <div className={viewMore ? style.viewMoreOpen : style.viewMoreClose}>
        <button onClick={openViewMore}>X</button>
        <div className={style.viewMoreImageBlur} style={backgroundCarou}></div>
        <div className={style.viewMoreImage} style={backgroundCarou}></div>
        <div className={style.viewMoreText}>
          <h2>{carouselArticles[currentCarou]?.title}</h2>
          <p>{carouselArticles[currentCarou]?.text}</p>
        </div>
      </div>
      <div className={style.carrousel} style={backgroundCarou}>
        <div className={style.blur}></div>

        <div className={`${style.containerCardCarou}`} style={changeSlide}>
          {carouselArticles.map((article) => (
            <CarouCard
              article={article}
              key={article.id}
              openViewMore={() => openViewMore()}
            />
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
          <button onClick={desincCurrentSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
            >
              <rect width="37" height="37" rx="5" fill="#FF8F44" />
              <path
                d="M27 18L13.5 25.7942L13.5 10.2058L27 18Z"
                fill="#FAFAFA"
              />
            </svg>
          </button>
          <button onClick={incrCurrentSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
            >
              <rect width="37" height="37" rx="5" fill="#FF8F44" />
              <path
                d="M27 18L13.5 25.7942L13.5 10.2058L27 18Z"
                fill="#FAFAFA"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Carou;
