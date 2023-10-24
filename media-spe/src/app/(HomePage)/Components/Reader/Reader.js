'use client'

import React from 'react'
import style from './reader.module.scss'
import { useState } from 'react';
import prisma from '@/utils/prisma';


function Reader({ currentArticle }) {
    

    const [count, setCount] = useState(0);

    const ReaderType = null;
    let readedArticle = currentArticle;
    const nextArticleMiniature = null;
    const previousArticleMiniature = null;

    async function loadArticles(readedArticle) {
        console.log("ptdrrr")
    }

    async function getNextImage(article) {
        let nextArtImage = await prisma.articles.findFirst({
            where: {
                type: "podcast",
            },
            orderBy: {
                id: 'desc',
            },
            take: 1,
        });

        console.log(nextArtImage)

    }

    getNextImage(readedArticle);

    async function getPreviousImage(article) {

    }

    async function getNextArticle(article) {
        //quand je click sur next, je load le suivant en tps que current, je garde la minia
        //load 1er article qu'a une date inférieur à celle du current
        let nextArticle = await prisma.articles.findFirst({
            where: {
                type: "podcast",
                id: {
                    lt: article.id,
                },
            },
            orderBy: {
                id: 'desc',
            },
            take: 1,
        });

        return nextArticle;
    }

    async function getPreviousArticle(article) {
        //quand je click sur previous, je load le précédent en tps que current, je garde la minia

        let previousArticle = await prisma.articles.findFirst({
            where: {
                type: "podcast",
                id: {
                    gt: article.id,
                },
            },
            orderBy: {
                id: 'desc',
            },
            take: 1,
        });

        return previousArticle;
    }

    return (
        <div>
            <button onClick={() => setCount(loadArticles(readedArticle))}>Next</button>
            <button onClick={() => setCount(loadArticles(readedArticle))}>Previous</button>
        </div>
    )
      //si je suis au premier, pas de previous --> desac bouton
    //si je suis au dernier, pas de next --> desac bouton
}

export default Reader