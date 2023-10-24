"use client"

import React, { useState, useRef } from 'react';
import style from '../Carrousel/carrousel.module.scss'

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handlePointerDown = (e) => {
    setStartX(e.clientX);
    carouselRef.current.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!carouselRef.current.hasPointerCapture(e.pointerId)) return;
    if (e.clientX - startX > 100) {
      prevSlide();
      carouselRef.current.releasePointerCapture(e.pointerId);
    } else if (e.clientX - startX < 100) {
      nextSlide();
      carouselRef.current.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div className={style['carousel-wrapper']}>
      <div
        className={style.carousel}
        ref={carouselRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
      >
        <button className={style['carousel__button--prev']} onClick={prevSlide}>←</button>
        <div className={style.carousel__item}>{items[currentIndex]}</div>
        <button className={style['carousel__button--next']} onClick={nextSlide}>→</button>
        <div className={style.carousel__indicator}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`${style.carousel__indicator__dot} ${index === currentIndex ? style['carousel__indicator__dot--active'] : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;


