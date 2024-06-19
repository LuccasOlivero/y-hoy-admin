import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(_req: Request) {
  try {
    const drinks = await prisma.drink.findMany();

    return NextResponse.json(drinks);
  } catch (e) {
    console.error("[DRINKS_GET]", e);
  }
  return new NextResponse("Internal Error", { status: 500 });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, description, price, percentAlcohol, amargor, flavour } = body;

    if (!name) {
      return new NextResponse("Missing name", { status: 400 });
    }

    if (!description) {
      return new NextResponse("Missing description", { status: 400 });
    }

    if (!price) {
      return new NextResponse("Missing price", { status: 400 });
    }

    if (!percentAlcohol) {
      return new NextResponse("Missing percent alcohol", { status: 400 });
    }

    if (!amargor) {
      return new NextResponse("Missing amargor", { status: 400 });
    }

    if (!flavour) {
      return new NextResponse("Missing flavour", { status: 400 });
    }

    const drinks = await prisma.drink.create({
      data: {
        name,
        description,
        price: Number(price),
        slug: name,
        percentAlcohol: Number(percentAlcohol),
        amargor,
        flavour,
      },
    });

    return NextResponse.json(drinks);
  } catch (e) {
    console.error("[DRINKS_POST]", e);
  }
  return new NextResponse("Internal Error", { status: 500 });
}
