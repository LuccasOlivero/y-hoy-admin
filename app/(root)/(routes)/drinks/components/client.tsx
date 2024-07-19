import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/ui/header";

import { columns } from "./column";
import Link from "next/link";
import Logo from "@/app/(root)/components/logo";

interface DrinksClient {
  id: string;
  name: string;
  description: string;
  price: number;
  percentAlcohol: number;
  amargor: string;
  flavour: string;
  typeId: string;
}

interface DataTableProps {
  data: DrinksClient[];
}

export default function DrinksClient({ data }: DataTableProps) {
  return (
    <>
      <div className="grid">
        <Link href="/">
          <Logo type="block" />
        </Link>

        <div className="flex w-full justify-between items-center">
          <div>
            {/* @ts-ignore */}
            <Header>Bebidas ({data.length})</Header>
            <p className="font-normal pl-1 text-[#A98A4D]">
              Borra, edita o elimina las bebidas guardadas en la base de datos.
            </p>
          </div>

          <Link href="/new-drink">
            <Button>Agregar nueva bebida</Button>
          </Link>
        </div>
      </div>

      <Separator className="bg-[#A98A4D]" />

      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
}
