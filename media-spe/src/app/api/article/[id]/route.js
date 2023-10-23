import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  const articleId = params.id;
  const article = await prisma.articles.deleteMany({
    where: {
      id: parseInt(articleId),
    },
  });
  return NextResponse.json(article);
}

export async function PATCH(data, { params }) {
  const body = await data.json();
  const articleId = params.id;
  const article = await prisma.articles.update({
    where: {
      id: parseInt(articleId),
    },
    data: {
      title: body.title,
      text: body.text,
      type: body.type,
      media: body.media,
      miniatureArticle: body.miniatureArticle,
    },
  });
  return NextResponse.json(article);
}
