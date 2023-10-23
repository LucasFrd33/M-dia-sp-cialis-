import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(data) {
  const body = await data.json();
  const article = await prisma.articles.create({
    data: {
      title: body.title,
      text: body.text,
      type: body.type,
      media: body.media,
      miniatureArticle: body.miniatureArticle,
    },
  });

  const { title, content, media, type, text, ...rest } = article;
  return NextResponse.json(rest);
}
