import prisma from "@/lib/db";
import DrinksClient from "./components/client";

export default async function Drinks() {
  const drinks = await prisma.drink.findMany();

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <DrinksClient data={drinks} />
      </div>
    </div>
  );
}
