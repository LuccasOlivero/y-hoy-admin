import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: { typeId: string } }
) {
  try {
    if (!params.typeId) {
      return new NextResponse("Missing typeId", { status: 400 });
    }

    const drinks = await prisma.drink.findMany({
      where: {
        typeId: params.typeId,
      },
    });

    return NextResponse.json(drinks);
  } catch (e) {
    console.error("[DRINKS_GET]", e);
  }
  return new NextResponse("Internal Error", { status: 500 });
}
