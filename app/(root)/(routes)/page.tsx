import { Separator } from "@/components/ui/separator";

import DrinkForm from "../components/drink-form";
import Header from "../components/header";
import Logo from "../components/logo";
import Container from "../components/container";

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
        <Header />
        <Separator />

        <div className="w-full flex justify-center mt-4">
          <DrinkForm />
        </div>
      </Container>
    </div>
  );
}
