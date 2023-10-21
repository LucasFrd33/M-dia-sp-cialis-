import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function DELETE({ params }) {
  const articleId = params.id;
  const article = await prisma.articles.deleteMany({
    where: {
      id: parseInt(articleId),
    },
  });
  return NextResponse.json(article);
}
