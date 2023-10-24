import Articles from "./Components/Articles/Articles";
import prisma from "@/utils/prisma";
import Carousel from "./Components/Carrousel/Carrousel";

export default async function HomePage() {
  const articles = await prisma.articles.findMany();
  
  const items = [
    <img src="../_a0f23d48-44ca-4d28-976a-321a74670fe6.jpeg" alt="Image 1" />,
    <img src="../_d0477d81-225d-44dc-9b5e-33c682a4f844.jpeg" alt="Image 2" />,
    <video src="../cm-chat-media-video-1_c4a3b2d4-c4d8-4d5a-9264-a806f45286c6_177_0_0.mov" controls />,
    <img src="../IMG_4349.jpeg" alt="Image 3" />,
    <img src="../_e060db87-0610-40af-b932-6810890ab5f8.jpeg" alt="Image 4" />,
  
  ];
  return (
    <div>
      {articles.map((articles) => (
        <Articles articles={articles} />
      ))}
    <div> 
<Carousel items={items} />
 </div>  
    </div>
  );
}
