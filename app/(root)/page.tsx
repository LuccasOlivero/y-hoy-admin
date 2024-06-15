import { Separator } from "@/components/ui/separator";

export default async function Home() {
  return (
    <section>
      <picture className="w-12 h-12">
        <img src="/logo.png" alt="Logo" className="w-full h-full" />
      </picture>

      <div className="w-full h-full flex justify-start">
        <title className="text-2xl text-white font-semibold">
          Administrador
        </title>
      </div>

      <Separator />

      <form>formulario</form>
    </section>
  );
}
