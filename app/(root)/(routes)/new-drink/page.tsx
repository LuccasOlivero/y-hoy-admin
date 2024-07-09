import prisma from "@/lib/db";
import DrinkForm from "./components/drink-form";
import Header from "../../components/header";
import { Separator } from "@/components/ui/separator";
import Container from "../../components/container";

export default async function Drinks() {
  const typeOfDrinks = await prisma.typeDrink.findMany();

  return (
    <>
      <Container>
        <Header>Crear una bebida</Header>

        <Separator />

        <div className="w-full flex justify-center mt-4">
          <DrinkForm typeOfDrinks={typeOfDrinks} />
        </div>
      </Container>
    </>
  );
}
