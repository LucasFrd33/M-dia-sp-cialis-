import Articles from "./Components/Articles/Articles";
import prisma from "@/utils/prisma";
import PlaylistDisplay from "./Components/PlaylistDisplay/PlaylistDisplay";
import Reader from "./Components/Reader/Reader";
import Carousel from "./Components/Carrousel/Carrousel";
import Carou from "./Components/Carou/Carou";

export default async function HomePage() {
  // const items = [
  //   <img src="../_a0f23d48-44ca-4d28-976a-321a74670fe6.jpeg" alt="Image 1" />,
  //   <img src="../_d0477d81-225d-44dc-9b5e-33c682a4f844.jpeg" alt="Image 2" />,
  //   <video
  //     src="../cm-chat-media-video-1_c4a3b2d4-c4d8-4d5a-9264-a806f45286c6_177_0_0.mov"
  //     controls
  //   />,
  // ];
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

      <Carou carouselArticles={carouselArticles} />
      <PlaylistDisplay lastArt={lastPodcast} />
      <PlaylistDisplay lastArt={lastShort} />
      <PlaylistDisplay lastArt={lastVideo} />
      {/* <PlaylistDisplay lastArt={lastArticle} />*/}
    </>
  );
}
