'use client'

import style from './playlistDisplay.module.scss'
import { useState } from 'react';
import Reader from '../Reader/Reader';

function PlaylistDisplay({ lastArt }) {
  const artType = lastArt.type;
  const artMiniature = lastArt.miniatureArticle;
  let path;

  const [isPlaying, setIsPlaying] = useState(false);

  function handleClickEvent(event, data) {
    setIsPlaying(false);
  }

  if(lastArt.type == "video"){
    path = "M-1 58.7034L392 -0.000732422V545.295L-1 603.999V58.7034Z";
  }else{
    path = path = "M0 101.773C0 77.0188 18.1134 55.9908 42.5948 52.3246L392 -0.000732422V503.726C392 528.48 373.887 549.508 349.405 553.175L0 605.5V101.773Z";
  }


  return (
    <div className={(artType == "podcast" && `${style.playlistDisplay} ${style.podcast}` || artType == "short" && `${style.playlistDisplay} ${style.short}` || artType == "video" && `${style.playlistDisplay} ${style.video}` || `${style.playlistDisplay} ${style.article}`)}>

      <svg className={style.background} xmlns="http://www.w3.org/2000/svg" width="392" height="606" viewBox="0 0 392 606" fill="none">
        <path d={path}/>
      </svg>

      <section className={style.titles}>
        <h2 className={style.sectionTitle}>{(artType == "podcast" ? `À écouter en voiture` : (artType == "short" ? "La pozz pipi" : (artType == "video" ? "Soirée posée" : "Les articles")))}</h2>
        <div className={style.type}>
          <h3>{(artType == "podcast" && "podcast" || artType == "short" && "short" || artType == "video" && "vidéo" || "articles")}</h3>
        </div>
      </section>


      <section className={style.main} onClick={() => setIsPlaying(true)}>
        <section className={style.description}>
          <section className={style.image}>
            <img className={style.miniature} src={`data:image/jpeg;base64,${artMiniature}`} />
            <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
              <path d="M28.4849 0C22.8511 0 17.3438 1.67061 12.6595 4.80056C7.97522 7.93052 4.32424 12.3792 2.16829 17.5842C0.012342 22.7891 -0.551753 28.5164 0.547341 34.042C1.64644 39.5675 4.35935 44.643 8.34303 48.6267C12.3267 52.6104 17.4022 55.3233 22.9277 56.4224C28.4533 57.5215 34.1806 56.9574 39.3855 54.8014C44.5905 52.6455 49.0392 48.9945 52.1691 44.3102C55.2991 39.6259 56.9697 34.1186 56.9697 28.4848C56.9697 24.7442 56.2329 21.0401 54.8014 17.5842C53.3699 14.1282 51.2717 10.9881 48.6267 8.34302C45.9816 5.69796 42.8415 3.59978 39.3855 2.16828C35.9296 0.736783 32.2255 0 28.4849 0ZM22.7879 41.303V15.6667L39.8788 28.4848L22.7879 41.303Z" fill="#FAFAFA" />
            </svg>
          </section>
          <button className={style.button} >{(artType == "podcast" && "Voir la playlist" || artType == "short" && "Voir les vidéos" || artType == "video" && "Voir les vidéos" || "articles")}</button>
        </section>

        <h2>{lastArt.title}</h2>

      </section>
      
      {(isPlaying ? <Reader emitClickEvent={handleClickEvent} currentArticle={lastArt} /> : null)}

    </div>
  )
}

export default PlaylistDisplay