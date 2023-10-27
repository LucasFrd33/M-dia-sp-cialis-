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
        <svg className={style.logo} xmlns="http://www.w3.org/2000/svg" width="60" height="64" viewBox="0 0 60 64" fill="none">
          <path d="M30.6562 25.0765V7.72282C30.6562 4.07289 33.1693 1.09497 36.2449 1.09497C37.7202 1.09497 39.1205 1.78016 40.1707 3.00558C41.246 4.25737 41.8336 5.9308 41.8336 7.72282V38.1872L30.6562 25.0765Z" fill="#FAFAFA" />
          <path d="M36.2452 1.78003C37.533 1.78003 38.7582 2.37298 39.6834 3.46664C40.6461 4.59983 41.1712 6.10197 41.1712 7.7227V36.3687L31.3067 24.8128V7.7227C31.3067 4.45489 33.5196 1.78003 36.2452 1.78003ZM36.2452 0.396484C32.7945 0.396484 29.9939 3.67747 29.9939 7.7227V25.3399L42.4965 39.9923V7.7227C42.4965 5.70667 41.7964 3.87512 40.6586 2.54428C39.5334 1.21344 37.9706 0.396484 36.2452 0.396484Z" fill="#8664CE" fill-opacity="0.47" />
          <path d="M36.2451 62.9856C33.1444 62.9856 30.6189 60.3239 30.6189 57.0561V43.0625L34.9323 47.6084C36.2326 48.9788 37.9579 49.7299 39.7958 49.7299C40.496 49.7299 41.2086 49.6113 41.8838 49.3873V57.0561C41.8713 60.3239 39.3457 62.9856 36.2451 62.9856Z" fill="#FAFAFA" />
          <path d="M31.2442 44.6568L34.4823 48.0695C35.8951 49.5585 37.783 50.3886 39.7834 50.3886C40.271 50.3886 40.7586 50.3359 41.2463 50.2437V57.0692C41.2463 59.9812 39.0083 62.3398 36.2452 62.3398C33.4821 62.3398 31.2442 59.9812 31.2442 57.0692V44.6568ZM29.9939 41.468V57.056C29.9939 60.6927 32.7945 63.6443 36.2452 63.6443C39.6959 63.6443 42.4965 60.6927 42.4965 57.056V48.4121C41.6463 48.8469 40.7211 49.0578 39.7834 49.0578C38.1831 49.0578 36.5828 48.4121 35.3575 47.134L29.9939 41.468Z" fill="#8664CE" fill-opacity="0.47" />
          <path d="M6.18872 62.9064C4.6884 62.9064 3.27561 62.2871 2.21288 61.1671C1.87531 60.8113 1.58775 60.416 1.3377 59.9812C1.3252 59.968 1.3127 59.9417 1.3127 59.9285C0.850099 59.0588 0.612549 58.0574 0.612549 57.056V6.98471C0.612549 5.98328 0.850099 4.98186 1.3127 4.1122C1.3252 4.08584 1.3377 4.07267 1.3502 4.04632C1.58775 3.62466 1.87531 3.22936 2.21288 2.87359C3.27561 1.75358 4.6884 1.13428 6.18872 1.13428C7.68903 1.13428 9.10182 1.75358 10.1645 2.87359L10.8522 3.59831L10.8897 3.63784L29.5436 23.2974L43.7716 38.2792C45.9595 40.5852 45.9595 44.3537 43.7716 46.6728C43.3215 47.1471 42.7964 47.5424 42.2338 47.8191C41.4836 48.2013 40.6334 48.3989 39.7957 48.3989C38.2954 48.3989 36.8826 47.7796 35.8199 46.6596L11.8649 21.4263V42.6012L15.2156 39.0698C16.2783 37.9498 17.6911 37.3305 19.1914 37.3305C20.6917 37.3305 22.1045 37.9498 23.1673 39.0698C24.23 40.1899 24.8176 41.6788 24.8176 43.26C24.8176 44.8412 24.23 46.3302 23.1673 47.4502L10.8647 60.4424L10.177 61.1671C9.11433 62.2871 7.70153 62.9064 6.18872 62.9064Z" fill="#FAFAFA" />
          <path d="M6.2013 1.79325C7.53907 1.79325 8.78934 2.34667 9.73954 3.33492L10.3897 4.0201L10.4522 4.08599L29.1061 23.7455L43.3216 38.7274C45.272 40.7829 45.272 44.1298 43.3216 46.1854C42.9215 46.607 42.4589 46.9496 41.9463 47.2132C41.2711 47.5557 40.5335 47.727 39.7833 47.727C38.4455 47.727 37.1953 47.1736 36.2451 46.1854L13.3653 22.0721L11.2398 19.8453V23.0208V41.0201V44.1957L13.3778 41.9425L15.6658 39.5312C16.616 38.5297 17.8662 37.9895 19.204 37.9895C20.5418 37.9895 21.7921 38.5429 22.7423 39.5312C24.6927 41.5867 24.6927 44.9336 22.7423 46.9891L10.4647 59.9286L10.4022 59.9945L9.75204 60.6797C8.80184 61.6811 7.55158 62.2214 6.2138 62.2214C4.87602 62.2214 3.62576 61.6679 2.67556 60.6797C2.3755 60.3634 2.12544 60.0208 1.9004 59.6387C1.88789 59.6255 1.87539 59.5992 1.86289 59.586C1.46281 58.8086 1.23776 57.9389 1.23776 57.0429V6.97167C1.23776 6.08884 1.4503 5.206 1.86289 4.42858C1.87539 4.4154 1.88789 4.38905 1.9004 4.37587C2.11294 3.99375 2.37549 3.65116 2.66306 3.33492C3.60075 2.34667 4.86352 1.79325 6.2013 1.79325ZM6.2013 0.475586C4.60096 0.475586 3.00063 1.12124 1.77537 2.39938C1.38779 2.79467 1.07522 3.24268 0.81267 3.70386C0.800167 3.71704 0.787663 3.74339 0.787663 3.75657C0.287559 4.70529 0 5.79895 0 6.9585V57.0298C0 58.1893 0.287559 59.283 0.787663 60.2317C0.800166 60.2449 0.81267 60.2712 0.81267 60.2844C1.07522 60.7587 1.40029 61.1936 1.77537 61.6021C3.00063 62.8934 4.60096 63.5258 6.2013 63.5258C7.80163 63.5258 9.40197 62.8802 10.6272 61.6021L11.3399 60.851L23.6174 47.9115C26.0554 45.3421 26.0554 41.1651 23.6174 38.5956C22.3922 37.3043 20.7918 36.6718 19.1915 36.6718C17.5912 36.6718 15.9908 37.3175 14.7656 38.5956L12.4901 41.0201V23.0208L35.3699 47.1341C36.5951 48.4254 38.1955 49.0579 39.7958 49.0579C40.721 49.0579 41.6462 48.8471 42.5089 48.4122C43.134 48.096 43.7091 47.6743 44.2217 47.1341C46.6598 44.5646 46.6598 40.3876 44.2217 37.8182L29.9938 22.8364L11.3399 3.1768L10.6272 2.42573C9.38946 1.12124 7.78913 0.475586 6.2013 0.475586Z" fill="#8664CE" fill-opacity="0.47" />
          <path d="M53.7487 63.1173C50.6481 63.1173 48.1226 60.4556 48.1226 57.1878V7.1165C48.1226 3.84869 50.6481 1.18701 53.7487 1.18701C56.8494 1.18701 59.3749 3.84869 59.3749 7.1165V57.1878C59.3749 60.4556 56.8494 63.1173 53.7487 63.1173Z" fill="#FAFAFA" />
          <path d="M53.7486 1.84574C56.5117 1.84574 58.7497 4.20436 58.7497 7.1164V57.1877C58.7497 60.0997 56.5117 62.4583 53.7486 62.4583C50.9855 62.4583 48.7476 60.0997 48.7476 57.1877V7.1164C48.7476 4.20436 50.9855 1.84574 53.7486 1.84574ZM53.7486 0.528076C50.2979 0.528076 47.4973 3.47965 47.4973 7.1164V57.1877C47.4973 60.8244 50.2979 63.776 53.7486 63.776C57.1993 63.776 59.9999 60.8244 59.9999 57.1877V7.1164C59.9999 3.47965 57.1993 0.528076 53.7486 0.528076Z" fill="#8664CE" fill-opacity="0.47" />
        </svg>

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
