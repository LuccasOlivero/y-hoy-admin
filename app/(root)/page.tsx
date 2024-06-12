import prisma from "@/lib/db";

export default async function Home() {
  const tragos = await prisma.drink.findMany();

  return (
    <div>
      {tragos.map((trago) => (
        <div key={trago.id}>{trago.name}</div>
      ))}
    </div>
  );
}
