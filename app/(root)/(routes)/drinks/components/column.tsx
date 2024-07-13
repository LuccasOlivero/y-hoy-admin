"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export type DrinksColumn = {
  id: string;
  name: string;
  description: string;
  price: number;
  percentAlcohol: number;
  amargor: string;
  flavour: string;
  typeId: string;
};

export const columns: ColumnDef<DrinksColumn>[] = [
  {
    accessorKey: "name",
    header: "Bebida",
  },
  {
    accessorKey: "description",
    header: "Descripción",
  },
  {
    accessorKey: "price",
    header: "Precio",
  },
  {
    accessorKey: "percentAlcohol",
    header: "Alcohol",
  },
  {
    accessorKey: "amargor",
    header: "Amargor",
  },
  {
    accessorKey: "flavour",
    header: "Sabor",
  },
  {
    accessorKey: "typeId",
    header: "Tipo",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
