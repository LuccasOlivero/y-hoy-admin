import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/ui/header";

import { columns } from "./column";
import Link from "next/link";

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
      <div className="flex justify-between items-center uppercase">
        <div>
          <Link href="/">Y HOY</Link>
          <Header>Bebidas</Header>
        </div>

        <Link href="/new-drink">
          <Button>Agregar nueva bebida</Button>
        </Link>
      </div>

      <Separator className="bg-[#A98A4D]" />

      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
}
