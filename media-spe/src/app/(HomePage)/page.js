import Articles from "./Components/Articles/Articles";
import prisma from "@/utils/prisma";
import Carousel from "./Components/Carrousel/Carrousel";

export default async function HomePage() {
  const articles = await prisma.articles.findMany();

  return (
    <div>
      {articles.map((articles) => (
        <Articles articles={articles} />
      ))}
      <Carousel />
    </div>
  );
}
