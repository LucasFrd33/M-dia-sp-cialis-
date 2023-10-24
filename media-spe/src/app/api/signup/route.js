import prisma from "@/utils/prisma";
import * as bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      role: body.role,
      password: await bcrypt.hash(body.password, 10),
    },
  });
  const { password, ...rest } = user;
  return NextResponse.json(rest);
}
