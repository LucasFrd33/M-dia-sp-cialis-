"use client"
import React, { Component } from 'react';
import './carrousel.module.scss'; // Assurez-vous d'avoir un fichier CSS pour les styles du carrousel.

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [ // Remplacez ces éléments par les vôtres
        { id: 1, imageUrl: "../Carrousel/39a84fc9ac30203da2d2dcbf1f746cb5.jpeg", caption: "Belle vue" },
        { id: 2, imageUrl: "image2.jpg", caption: "Moment de détente" },
        { id: 3, imageUrl: "image3.jpg", caption: "Exploration urbaine" },
      ],
      currentIndex: 0,
    };
  }

  nextSlide = () => {
    const { currentIndex, items } = this.state;
    if (currentIndex < items.length - 1) {
      this.setState({ currentIndex: currentIndex + 1 });
    }
  };

  prevSlide = () => {
    const { currentIndex } = this.state;
    if (currentIndex > 0) {
      this.setState({ currentIndex: currentIndex - 1 });
    }
  };

  render() {
    const { items, currentIndex } = this.state;

    return (
      <div className="carousel">
        <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {items.map((item) => (
            <div key={item.id} className="carousel-item">
              <img src={item.imageUrl} alt={item.caption} />
              <div className="caption">{item.caption}</div>
            </div>
          ))}
        </div>
        <button className="prev-button" onClick={this.prevSlide}>Précédent</button>
        <button className="next-button" onClick={this.nextSlide}>Suivant</button>
      </div>
    );
  }
}

export default Carousel;
