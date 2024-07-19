import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import Header from "@/components/ui/header";
import { Button } from "@/components/ui/button";

import Logo from "../components/logo";
import Container from "../components/container";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Container>
        <div className="flex">
          <Logo />
          <Header>Administrador</Header>
        </div>
        <h3 className="text-lg font-normal text-[#A98A4D]">
          Bienvenido a la aplicación de administración donde podes crear, editar
          y eliminar bebidas.
        </h3>

        <Separator className="bg-[#A98A4D]" />

        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/new-drink">
            <Button>Crear una bebida</Button>
          </Link>

          <Link href="/drinks">
            <Button>ver todas las bebidas</Button>
          </Link>

          <Link href="/new-type">
            <Button>Crear un tipo de bebida</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
