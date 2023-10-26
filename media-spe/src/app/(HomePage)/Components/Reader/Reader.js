'use client'

import React from 'react'
import style from './reader.module.scss'
import { useState } from 'react';
import { get, set } from 'react-hook-form';


async function getFullArticle(articleId, action, articleType) {
    const res = await fetch(`/api/article/${articleId}/${action}/${articleType}`, {
        method: "GET",
    });
    return res.json()
}

async function getWaitlistArticle(articleType, articleId) {
    const results = await fetch(`/api/waitList/${articleType}/${articleId}`, {
        method: "GET",
    });
    return results.json()
}


function Reader({ currentArticle, emitClickEvent }) {

    const [count, setCount] = useState(0);
    const [miniature, setMiniature] = useState(currentArticle.miniatureArticle);
    const [readedArticle, setReadedArticle] = useState(currentArticle);
    const [waitlist, setWaitlist] = useState([]);

    const divStyle = {
        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url(data:image/jpeg;base64,' + miniature + ')',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        filter: 'blur(8px)',
        backgroundSize: "cover",
        backgroundPosition: "center"
    };

    async function loadArticles(readedArticle, action) {
        const data = await getFullArticle(readedArticle.id, action, readedArticle.type);
        if (data != null) {
            setReadedArticle(data);
            setMiniature(data.miniatureArticle);
        }
    }

    function handleClick(event) {
        emitClickEvent(event);
    }

    async function loadWaitlist(articleType) {
        const data = await getWaitlistArticle(articleType, readedArticle.id);
        setWaitlist(data);
        console.log(waitlist)
    }

    loadWaitlist(readedArticle.type);


    return (
        <div className={(readedArticle.type == "podcast" && `${style.reader} ${style.podcast}` || readedArticle.type == "short" && `${style.reader} ${style.short}` || readedArticle.type == "video" && `${style.reader} ${style.video}` || `${style.reader} ${style.article}`)}>

            <div className={style.content}>
                <button className={style.close} onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="63" height="40" viewBox="0 0 63 40" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.3756 13.4658C18.9003 12.872 19.7792 12.8419 20.3388 13.3986L30.5 23.5063L40.6611 13.3986C41.2209 12.8419 42.0998 12.872 42.6245 13.4658C43.1489 14.0595 43.1206 14.9921 42.5611 15.5488L31.4499 26.6014C30.9157 27.1329 30.0844 27.1329 29.5501 26.6014L18.439 15.5488C17.8794 14.9921 17.851 14.0595 18.3756 13.4658Z" fill="#AC8AF4" />
                    </svg>
                </button>

                <img className={style.miniature} src={`data:image/jpeg;base64,${miniature}`} />
                <video className={style.videoMedia} controls controlsList="nodownload noplaybackrate nopictureinpicture" src={`data:video/mp4;base64,${readedArticle.media}`} />

                <h1>{readedArticle.title}</h1>
                <audio className={style.audio} autoPlay controls controlsList="nodownload noplaybackrate" src={`data:audio/mp3;base64,${readedArticle.media}`} />





                <section className={style.buttons}>
                    <button className={style.previous} onClick={() => setCount(loadArticles(readedArticle, "next"))}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                            <path d="M43.6562 10.9193C43.6562 8.35129 40.7904 6.82333 38.6564 8.2537L16.8309 22.9093C16.3951 23.2018 16.0377 23.5968 15.7899 24.0595C15.5422 24.5223 15.4117 25.0388 15.41 25.5637C15.4082 26.0886 15.5352 26.6059 15.7798 27.0703C16.0244 27.5348 16.3791 27.9321 16.8129 28.2276L38.6409 43.104C39.1233 43.4321 39.686 43.6226 40.2686 43.6549C40.8511 43.6872 41.4314 43.5601 41.9471 43.2873C42.4628 43.0145 42.8944 42.6064 43.1956 42.1067C43.4967 41.607 43.656 41.0347 43.6562 40.4513V10.9193ZM7.70425 8.98815C7.70425 8.64761 7.83953 8.32102 8.08032 8.08023C8.32112 7.83943 8.64771 7.70415 8.98825 7.70415C9.32879 7.70415 9.65538 7.83943 9.89618 8.08023C10.137 8.32102 10.2722 8.64761 10.2722 8.98815V42.3722C10.2722 42.7127 10.137 43.0393 9.89618 43.2801C9.65538 43.5209 9.32879 43.6562 8.98825 43.6562C8.64771 43.6562 8.32112 43.5209 8.08032 43.2801C7.83953 43.0393 7.70425 42.7127 7.70425 42.3722V8.98815Z" fill="white" />
                        </svg>
                    </button>
                    <button className={style.play}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="69" height="69" viewBox="0 0 69 69" fill="none">
                            <path d="M34.8184 6.3335C29.1846 6.3335 23.6773 8.0041 18.993 11.1341C14.3087 14.264 10.6577 18.7127 8.50179 23.9177C6.34584 29.1226 5.78174 34.8499 6.88084 40.3755C7.97993 45.901 10.6929 50.9765 14.6765 54.9602C18.6602 58.9438 23.7357 61.6568 29.2612 62.7559C34.7868 63.855 40.5141 63.2909 45.719 61.1349C50.924 58.979 55.3727 55.328 58.5026 50.6437C61.6326 45.9594 63.3032 40.4521 63.3032 34.8183C63.3032 31.0777 62.5664 27.3736 61.1349 23.9177C59.7034 20.4617 57.6052 17.3216 54.9602 14.6765C52.3151 12.0315 49.175 9.93327 45.719 8.50178C42.2631 7.07028 38.559 6.3335 34.8184 6.3335ZM29.1214 47.6365V22.0002L46.2123 34.8183L29.1214 47.6365Z" fill="white" />
                        </svg>
                    </button>
                    <button className={style.next} onClick={() => setCount(loadArticles(readedArticle, "previous"))}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                            <path d="M7.70447 10.92C7.70447 8.35182 10.5706 6.82375 12.7047 8.25423L34.5317 22.9108C34.9676 23.2034 35.325 23.5984 35.5728 24.0612C35.8205 24.524 35.951 25.0405 35.9528 25.5654C35.9545 26.0904 35.8275 26.6077 35.5829 27.0722C35.3383 27.5367 34.9835 27.934 34.5497 28.2295L12.7201 43.107C12.2377 43.4352 11.6749 43.6256 11.0924 43.6579C10.5098 43.6902 9.92949 43.5631 9.41374 43.2903C8.89799 43.0175 8.46633 42.6093 8.16517 42.1096C7.86401 41.6099 7.70474 41.0375 7.70447 40.4541V10.92ZM43.659 8.98873C43.659 8.64817 43.5237 8.32156 43.2829 8.08074C43.0421 7.83993 42.7155 7.70464 42.3749 7.70464C42.0344 7.70464 41.7077 7.83993 41.4669 8.08074C41.2261 8.32156 41.0908 8.64817 41.0908 8.98873V42.3751C41.0908 42.7157 41.2261 43.0423 41.4669 43.2831C41.7077 43.5239 42.0344 43.6592 42.3749 43.6592C42.7155 43.6592 43.0421 43.5239 43.2829 43.2831C43.5237 43.0423 43.659 42.7157 43.659 42.3751V8.98873Z" fill="white" />
                        </svg>
                    </button>
                </section>
            </div>

            <section className={style.waitList}>
                {waitlist.map((article, index) => (
                    <h1>{article.title}</h1>
                ))}
            </section>

        </div>
    )
    //si je suis au premier, pas de previous --> desac bouton
    //si je suis au dernier, pas de next --> desac bouton
}

export default Reader