'use client'

import React from 'react'
import style from './reader.module.scss'
import { useState } from 'react';
import { get } from 'react-hook-form';


async function getData(articleId, action, articleType) {
    const res = await fetch(`/api/article/${articleId}/${action}/${articleType}`, {
        method: "GET",
    });
    return res.json()
}


function Reader({ currentArticle, emitClickEvent }) {

    const [count, setCount] = useState(0);
    const [miniature, setMiniature] = useState(currentArticle.miniatureArticle);
    const [readedArticle, setReadedArticle] = useState(currentArticle);

    const divStyle = {
        backgroundImage: 'url(data:image/jpeg;base64,' + miniature + ')'
    };

    async function loadArticles(readedArticle, action) {
        const data = await getData(readedArticle.id, action, readedArticle.type);
        if (data != null) {
            setReadedArticle(data);
            setMiniature(data.miniatureArticle);
        }
    }

    function handleClick(event) {
        emitClickEvent(event);
    }

    return (
        <div className={(readedArticle.type == "podcast" && `${style.reader} ${style.podcast}` || readedArticle.type == "short" && `${style.reader} ${style.short}` || readedArticle.type == "video" && `${style.reader} ${style.video}` || `${style.reader} ${style.article}`)}
            style={divStyle}>

            <button className={style.close} onClick={handleClick}>send</button>

            <img className={style.miniature} src={`data:image/jpeg;base64,${miniature}`} />
            <h1>{readedArticle.title}</h1>
            <audio className={style.audio} controls src={`data:audio/mp3;base64,${readedArticle.media}`} />
            <video className={style.videoMedia} controls src={`data:video/mp4;base64,${readedArticle.media}`} />
            <button onClick={() => setCount(loadArticles(readedArticle, "next"))}>Next</button>
            <button onClick={() => setCount(loadArticles(readedArticle, "previous"))}>Previous</button>
        </div>
    )
    //si je suis au premier, pas de previous --> desac bouton
    //si je suis au dernier, pas de next --> desac bouton
}

export default Reader