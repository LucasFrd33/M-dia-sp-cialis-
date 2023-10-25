import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {

  const articleId = params.id;
  const action = params.action;
  const type = params.type;

  switch (action) {
    case "next":
      const nextArticle = await prisma.articles.findFirst({
        where: {
          type: type,
          id: {
            lt: parseInt(articleId),
          },
        },
        orderBy: {
          id: 'desc',
        },
        take: 1,
      });
      return NextResponse.json(nextArticle);
      break;

    case "previous":
      const previousArticle = await prisma.articles.findFirst({
        where: {
          type: type,
          id: {
            gt: parseInt(articleId),
          },
        },
        orderBy: {
          id: 'asc',
        },
        take: 1,
      });
      return NextResponse.json(previousArticle);
      break;
  }
}