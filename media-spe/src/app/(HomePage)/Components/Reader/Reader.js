'use client'

import React from 'react'
import style from './reader.module.scss'
import { useState } from 'react';
import { get } from 'react-hook-form';


async function getData(articleId, action, loadType) {
    const res = await fetch(`/api/article/${articleId}/${action}/${loadType}`, {
        method: "GET",
    });
    return res.json()
}


function Reader({ currentArticle }) {

    const [count, setCount] = useState(0);
    const [miniature, setMiniature] = useState(currentArticle.miniatureArticle);
    const [readedArticle, setReadedArticle] = useState(currentArticle);

    console.log(getData(currentArticle.id, "next", "miniature"));

    async function loadArticles(readedArticle, action) {
        const data = await getData(readedArticle.id, action, "whole");
        if (data != null) {
            setReadedArticle(data);
            setMiniature(data.miniatureArticle);
        }
    }


    return (
        <div>
            <img className={style.miniature} src={`data:image/jpeg;base64,${miniature}`} />
            <button onClick={() => setCount(loadArticles(readedArticle, "next"))}>Next</button>
            <button onClick={() => setCount(loadArticles(readedArticle, "previous"))}>Previous</button>
        </div>
    )
    //si je suis au premier, pas de previous --> desac bouton
    //si je suis au dernier, pas de next --> desac bouton
}

export default Reader