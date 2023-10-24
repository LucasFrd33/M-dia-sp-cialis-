import Articles from "./Components/Articles/Articles";
import prisma from "@/utils/prisma";
import PlaylistDisplay from "./Components/PlaylistDisplay/PlaylistDisplay";
import Carousel from "./Components/Carrousel/Carrousel";
export default async function HomePage() {
  const articles = await prisma.articles.findMany();
  

const items = [
  <img src="../_a0f23d48-44ca-4d28-976a-321a74670fe6.jpeg" alt="Image 1" />,
  <img src="../_d0477d81-225d-44dc-9b5e-33c682a4f844.jpeg" alt="Image 2" />,
  <video src="../cm-chat-media-video-1_c4a3b2d4-c4d8-4d5a-9264-a806f45286c6_177_0_0.mov" controls />,
];



  <div>
    <h1>CAROUSSEL ICI</h1>
  
  </div>


  
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
  <div>
      <h1>CAROUSSEL ICI</h1>
      <Carousel items={items} />
      <br/>
      <br/>
      <PlaylistDisplay lastArt={lastPodcast}/>
      <PlaylistDisplay lastArt={lastShort}/>
      <PlaylistDisplay lastArt={lastVideo}/>
      <PlaylistDisplay lastArt={lastArticle}/>
   </div>
); 
}