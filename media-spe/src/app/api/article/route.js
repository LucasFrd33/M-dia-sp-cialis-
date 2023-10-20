import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(data) {
  const body = await data.json();
  const article = await prisma.articles.create({
    data: {
      title: body.title,
      content: body.content,
      file: body.file,
    },
  });

  const { title, content, file, ...rest } = article;
  return NextResponse.json(rest);
}
