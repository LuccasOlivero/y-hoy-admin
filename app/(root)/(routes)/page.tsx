import { Separator } from "@/components/ui/separator";

import DrinkForm from "../components/drink-form";
import Header from "../components/header";
import Logo from "../components/logo";
import Container from "../components/container";
import prisma from "@/lib/db";

export default async function Home() {
  const typeOfDrinks = await prisma.typeDrink.findMany();
  // const [isMounted, setIsMounted] = useState<boolean>(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return null;
  // }

  return (
    <div className="flex flex-col items-center w-full">
      <Container>
        <Logo />
        <Header />
        <Separator />

        <div className="w-full flex justify-center mt-4">
          <DrinkForm typeOfDrinks={typeOfDrinks} />
        </div>
      </Container>
    </div>
  );
}
