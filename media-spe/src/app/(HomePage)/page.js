import Articles from "./Components/Articles/Articles";
import prisma from "@/utils/prisma";
import PlaylistDisplay from "./Components/PlaylistDisplay/PlaylistDisplay";
import Reader from "./Components/Reader/Reader";
import Carousel from "./Components/Carrousel/Carrousel";
import Carou from "./Components/Carou/Carou";

async function getData(articleId, action, articleType) {
  const res = await fetch(
    `/api/article/${articleId}/${action}/${articleType}`,
    {
      method: "GET",
    }
  );
  return res.json();
}

export default async function HomePage() {


  const lastPodcast = await prisma.articles.findFirst({
    where: {
      type: "podcast",
    },
    orderBy: {
      id: "desc",
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
    take: 1,
  });

  const lastVideo = await prisma.articles.findFirst({
    where: {
      type: "video",
    },
    orderBy: {
      id: "desc",
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
    take: 1,
  });

  return (
    <>
      {/* <Carousel items={items} />
      <br />
      <br /> */}
      <Carou />
      <PlaylistDisplay lastArt={lastPodcast} />
      <PlaylistDisplay lastArt={lastShort} />
      <PlaylistDisplay lastArt={lastVideo} />
      {/* <PlaylistDisplay lastArt={lastArticle} /> */}
    </>
  );
}
