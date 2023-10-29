import Articles from "./Components/Articles/Articles";
import prisma from "@/utils/prisma";
import PlaylistDisplay from "./Components/PlaylistDisplay/PlaylistDisplay";
import Reader from "./Components/Reader/Reader";
import Carousel from "./Components/Carrousel/Carrousel";
import Carou from "./Components/Carou/Carou";
import { Suspense } from "react";

export default async function HomePage() {
  const today = new Date();
  let millisecondsInADay = 24 * 60 * 60 * 1000;
  let yesterdayMilliseconds = today.getTime() - millisecondsInADay;
  let yesterdayDate = new Date(yesterdayMilliseconds);

  const carouselArticles = await prisma.articles.findMany({
    where: {
      isHeadline: true,
      date: {
        lt: today,
        gt: yesterdayDate,
      },
    },
  });

  const lastPodcast = await prisma.articles.findFirst({
    where: {
      type: "podcast",
    },
    orderBy: {
      id: "desc",
    },
    select: {
      id: true,
      miniatureArticle: true,
      title: true,
      type: true,
      date: true,
    },
    take: 1,
  });

  const lastShort = await prisma.articles.findFirst({
    where: {
      type: "short",
    },
    orderBy: {
      id: "desc",
    },
    select: {
      id: true,
      miniatureArticle: true,
      title: true,
      type: true,
      date: true,
    },
    take: 1,
  });

  const lastVideo = await prisma.articles.findFirst({
    where: {
      type: "video",
    },
    orderBy: {
      id: "desc",
    },
    select: {
      id: true,
      miniatureArticle: true,
      title: true,
      type: true,
      date: true,
    },
    take: 1,
  });

  const lastArticle = await prisma.articles.findFirst({
    where: {
      type: "article",
    },
    orderBy: {
      id: "desc",
    },
    select: {
      id: true,
      miniatureArticle: true,
      title: true,
      type: true,
      date: true,
    },
    take: 1,
  });

  return (
    <>

      <Carou carouselArticles={carouselArticles} />

      <PlaylistDisplay lastArt={lastPodcast} />


      <PlaylistDisplay lastArt={lastShort} />

      <PlaylistDisplay lastArt={lastVideo} />

      {/* <PlaylistDisplay lastArt={lastArticle} />*/}
    </>
  );
}
