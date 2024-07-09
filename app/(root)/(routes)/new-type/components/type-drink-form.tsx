"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { formSchemaType } from "@/constants/schema";
import { useToast } from "@/components/ui/use-toast";

type ProductFormValues = z.infer<typeof formSchemaType>;

export default function TypeDrinkForm() {
  const { toast } = useToast();

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchemaType),
  });

  const onSubmit = async (data: ProductFormValues) => {
    try {
      //TODO: add validation and fix api call

      await axios({
        method: "POST",
        url: `/api/drinkTypes`,
        data,
      });

      toast({
        title: "Tipo de bebida creada exitosamente",
      });
    } catch (e) {
      toast({
        title: "Error al crear el tipo de bebida",
        variant: "destructive",
      });
      console.error(e, "FORM ERROR");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm">
        <FormField
          control={form.control}
          name="typeName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#267b40] font-bold text-base">
                Nombre del tipo de bebida
              </FormLabel>
              <FormControl>
                <Input placeholder="Ej: Espumante" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full flex justify-end">
          <Button type="submit" className="mt-4">
            Crear
          </Button>
        </div>
      </form>
    </Form>
  );
}
