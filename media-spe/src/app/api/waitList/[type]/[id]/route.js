import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {

  const type = params.type;
  const id = params.id;

  const articles = await prisma.articles.findMany({
    where: {
      type: type,
      id: {
        lt: parseInt(id),
      },
    },
    orderBy: {
      id: 'desc',
    },
    select: {
      date: true,
      title: true,
      miniatureArticle: true,
    },
  });
  return NextResponse.json(articles);

}


