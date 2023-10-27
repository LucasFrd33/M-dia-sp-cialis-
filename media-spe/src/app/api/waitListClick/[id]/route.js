import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {

    const id = params.id;
  
    const articles = await prisma.articles.findMany({
      where: {
        id: parseInt(id),
      },
    });
    return NextResponse.json(articles);
  }