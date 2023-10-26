'use client'

import style from './playlistDisplay.module.scss'
import { useState } from 'react';
import Reader from '../Reader/Reader';

function PlaylistDisplay({ lastArt }) {
  const artType = lastArt.type;
  const artMiniature = lastArt.miniatureArticle;

  const [isPlaying, setIsPlaying] = useState(false);

  function handleClickEvent(event, data) {
    // click event object, 'Hello from child'
    setIsPlaying(false);
  }


  return (
    <div className={(artType == "podcast" && `${style.playlistDisplay} ${style.podcast}` || artType == "short" && `${style.playlistDisplay} ${style.short}` || artType == "video" && `${style.playlistDisplay} ${style.video}` || `${style.playlistDisplay} ${style.article}`)}>

      <svg xmlns="http://www.w3.org/2000/svg" width="392" height="606" viewBox="0 0 392 606" fill="none">
        <path d="M0 101.773C0 77.0188 18.1134 55.9908 42.5948 52.3246L392 -0.000732422V503.726C392 528.48 373.887 549.508 349.405 553.175L0 605.5V101.773Z" fill="#1F1F1F" />
      </svg>

      <section className={style.titles}>
        <h2 className={style.sectionTitle}>{(artType == "podcast" ? `À écouter en voiture` : (artType == "short" ? "La pozz pipi" : (artType == "video" ? "Soirée posée" : "Les articles")))}</h2>
        <div className={style.type}>
          <h3>{(artType == "podcast" && "podcast" || artType == "short" && "short" || artType == "video" && "vidéo" || "articles")}</h3>
        </div>
      </section>


      <section className={style.main}>
        <section className={style.description}>
          <img className={style.miniature} src={`data:image/jpeg;base64,${artMiniature}`} />
          <button className={style.button} onClick={() => setIsPlaying(true)}>{(artType == "podcast" && "Voir la playlist" || artType == "short" && "Voir les vidéos" || artType == "video" && "Voir les vidéos" || "articles")}</button>
        </section>

        <h2>{lastArt.title}</h2>

      </section>

      {(isPlaying ? <Reader emitClickEvent={handleClickEvent} currentArticle={lastArt} /> : null)}


    </div>
  )
}

export default PlaylistDisplay