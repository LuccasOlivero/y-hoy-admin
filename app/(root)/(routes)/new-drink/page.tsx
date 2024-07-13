import prisma from "@/lib/db";

import { Separator } from "@/components/ui/separator";

import DrinkForm from "../../components/drink-form";
import Header from "../../../../components/ui/header";
import Container from "../../components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Drinks() {
  const types = await prisma.typeDrink.findMany();

  return (
    <>
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">Y HOY</Link>
            <Header>Crear una bebida</Header>
          </div>

          <Link href="/drinks">
            <Button>Ver todas las bebidas</Button>
          </Link>
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
