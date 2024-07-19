import prisma from "@/lib/db";
import DrinkForm from "./components/drink-form";

const DrinkPage = async ({ params }: { params: { drinkId: string } }) => {
  const types = await prisma.typeDrink.findMany();
  const drink = await prisma.drink.findUnique({
    where: {
      id: params.drinkId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <DrinkForm initialData={drink} type={types} />
      </div>
    </div>
  );
};

export default DrinkPage;
