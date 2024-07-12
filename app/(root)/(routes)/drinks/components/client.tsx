import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/ui/header";

import { columns } from "./column";

interface DrinksClient {
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
        <Header>Bebidas</Header>
        <Button className="bg-[#267b40] hover:bg-[#1e5b2f]">
          Agregar nueva bebida
        </Button>
      </div>

      <Separator className="bg-[#A98A4D]" />

      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
}
