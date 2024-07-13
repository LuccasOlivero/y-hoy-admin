import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id) {
      return new NextResponse("ID is required", { status: 400 });
    }

    const drinks = await prisma.drink.findMany({
      where: {
        typeId: params.id,
      },
    });

    return NextResponse.json(drinks);
  } catch (e) {
    console.error("[DRINKS_GET]", e);
  }
  return new NextResponse("Internal Error", { status: 500 });
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id) {
      return new NextResponse("ID is required", { status: 400 });
    }

    const drink = await prisma.drink.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(drink);
  } catch (e) {
    console.error("[DRINKS_DELETE]", e);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();

    const {
      name,
      description,
      price,
      percentAlcohol,
      amargor,
      flavour,
      typeId,
    } = body;

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!description) {
      return new NextResponse("Description is required", { status: 400 });
    }

    if (!price) {
      return new NextResponse("Price is required", { status: 400 });
    }

    if (!percentAlcohol) {
      return new NextResponse("PercentAlcohol is required", { status: 400 });
    }

    if (!amargor) {
      return new NextResponse("Amargor is required", { status: 400 });
    }

    if (!flavour) {
      return new NextResponse("Flavour is required", { status: 400 });
    }

    if (!typeId) {
      return new NextResponse("TypeId is required", { status: 400 });
    }

    const drink = await prisma.drink.update({
      where: {
        id: params.id,
      },
      data: {
        name,
        description,
        price: Number(price),
        percentAlcohol: Number(percentAlcohol),
        amargor,
        flavour,
        typeId,
      },
    });

    return NextResponse.json(drink);
  } catch (e) {
    console.error("[DRINKS_PATCH]", e);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
