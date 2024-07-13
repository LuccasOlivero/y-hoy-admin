import { Separator } from "@/components/ui/separator";

import Header from "../../../components/ui/header";
import Logo from "../components/logo";
import Container from "../components/container";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
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

        <Header>Administrador</Header>

        <Separator />

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
