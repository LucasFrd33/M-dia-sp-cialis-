import Articles from "./Components/Articles/Articles";
import prisma from "@/utils/prisma";
import PlaylistDisplay from "./Components/PlaylistDisplay/PlaylistDisplay";
import Reader from "./Components/Reader/Reader";

export default async function HomePage() {
  // const articles = await prisma.articles.findMany();

  const lastPodcast = await prisma.articles.findFirst({
    where: {
      type: "podcast",
    },
    orderBy: {
      id: 'desc',
    },
    take: 1,
  });

  const lastShort = await prisma.articles.findFirst({
    where: {
      type: "short",
    },
    orderBy: {
      id: 'desc',
    },
    take: 1,
  });

  const lastVideo = await prisma.articles.findFirst({
    where: {
      type: "video",
    },
    orderBy: {
      id: 'desc',
    },
    take: 1,
  });

  const lastArticle = await prisma.articles.findFirst({
    where: {
      type: "article",
    },
    orderBy: {
      id: 'desc',
    },
    take: 1,
  });
  
  return (
    //carroussel ici
    //podcast ici
    //video courte
    //video longue
    //article écrits
    <div>
      <h1>CAROUSSEL ICI</h1>
      <br/>
      <br/>
      <br/>

      <PlaylistDisplay lastArt={lastPodcast}/>
      <PlaylistDisplay lastArt={lastShort}/>
      <PlaylistDisplay lastArt={lastVideo}/>
      <PlaylistDisplay lastArt={lastArticle}/>
      <Reader currentArticle={lastPodcast}/>

      {/* {articles.map((articles) => (
        <Articles articles={articles} />
      ))*/}
      {/* <Carousel /> */}
    </div>
  );
}
