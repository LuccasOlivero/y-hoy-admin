import prisma from "@/lib/db";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import Header from "@/components/ui/header";
import { Button } from "@/components/ui/button";

import DrinkForm from "../../components/drink-form";
import Container from "../../components/container";
import Logo from "../../components/logo";

export default async function Drinks() {
  const types = await prisma.typeDrink.findMany();

  return (
    <>
      <Container>
        <div className="grid">
          <Link href="/">
            <Logo />
          </Link>

          <div className="flex w-full justify-between items-center">
            {/* @ts-ignore */}
            <Header>Crear una bebida ({types.length})</Header>

            <Link href="/drinks">
              <Button>Ver todas las bebidas</Button>
            </Link>
          </div>
        </div>

        <h3 className="text-lg font-normal text-[#A98A4D]">
          Antes de crear una nueva bebida, verificá que esté creada en la tabla
          de bebidas.
        </h3>

        <Separator />

        <div className="w-full mt-4">
          <DrinkForm type={types} />
        </div>
      </Container>
    </>
  );
}
