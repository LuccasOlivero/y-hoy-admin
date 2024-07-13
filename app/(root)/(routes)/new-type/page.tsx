import prisma from "@/lib/db";
import Header from "../../../../components/ui/header";
import { Separator } from "@/components/ui/separator";
import Container from "../../components/container";
import TypeDrinkForm from "./components/type-drink-form";
import Link from "next/link";

export default async function Drinks() {
  const types = await prisma.typeDrink.findMany();

  return (
    <>
      <Container>
        <div>
          <Link href="/">Y HOY</Link>
          <Header>Crear un tipo de bebida</Header>
        </div>

        <Separator />

        <h3 className="text-lg font-bold text-[#A98A4D] mt-2">
          Antes de crear un nuevo tipo de bebida, verificá NO que esté creado.
          Los creados son:
        </h3>
        <div className="flex flex-wrap h-auto w-full my-2 gap-x-2">
          {types.map((type) => (
            <div
              key={type.id}
              className="rounded-lg bg-green text-white px-2 py-1 bg-[#267b40] shadow-lg"
            >
              <h2 className="text-base font-bold">{type.nameOfType}</h2>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-start mt-4">
          <TypeDrinkForm />
        </div>
      </Container>
    </>
  );
}
