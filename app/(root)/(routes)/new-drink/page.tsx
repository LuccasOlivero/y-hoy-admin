import prisma from "@/lib/db";

import { Separator } from "@/components/ui/separator";

import DrinkForm from "../../components/drink-form";
import Header from "../../../../components/ui/header";
import Container from "../../components/container";

export default async function Drinks() {
  const types = await prisma.typeDrink.findMany();

  return (
    <>
      <Container>
        <Header>Crear una bebida</Header>

        <Separator />

        <div className="w-full flex justify-center mt-4">
          <DrinkForm type={types} />
        </div>
      </Container>
    </>
  );
}
