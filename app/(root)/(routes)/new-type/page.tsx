import prisma from "@/lib/db";
import Header from "../../components/header";
import { Separator } from "@/components/ui/separator";
import Container from "../../components/container";
import TypeDrinkForm from "./components/type-drink-form";

export default async function Drinks() {
  return (
    <>
      <Container>
        <Header>Crear un tipo de bebida</Header>

        <Separator />

        <div className="w-full flex justify-center mt-4">
          <TypeDrinkForm />
        </div>
      </Container>
    </>
  );
}
