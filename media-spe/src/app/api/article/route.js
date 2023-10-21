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

export async function DELETE(req) {
  const { id } = await req.json();
  console.log(req.json());
  await prisma.articles.delete({
    where: { id: id },
  });
  return NextResponse.json({ message: `L'articles ${id} a était supprimé` });
}
