import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { typeName } = body;

    if (!typeName) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const type = await prisma.typeDrink.create({
      data: {
        nameOfType: typeName,
      },
    });

    return NextResponse.json(type);
  } catch (e) {
    console.error("[TYPES_POST]", e);
  }
  return new NextResponse("ok");
}
