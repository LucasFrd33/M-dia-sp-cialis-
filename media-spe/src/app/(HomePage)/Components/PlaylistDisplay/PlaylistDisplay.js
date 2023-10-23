import React from 'react'
import style from './playlistDisplay.module.scss'

function PlaylistDisplay({ lastArt }) {
  const artType = lastArt.type;
  const artMiniature = lastArt.miniatureArticle;

  return (
    <div className={style.playlistDisplay}>
      <section className={style.titles}>
        <h2 className={style.sectionTitle}>{(artType == "podcast" ? "À écouter en voirure" : (artType == "short" ? "La pozz pipi" : (artType == "video" ? "Soirée posée" : "Les articles")))}</h2>
        <h3 className={style.type}>{lastArt.type}</h3>
      </section>

      <img className={style.miniature} src={`data:image/jpeg;base64,${artMiniature}`} />

      <button className={style.button}>Lire les {artType}</button>
    </div>
  )
}

export default PlaylistDisplay