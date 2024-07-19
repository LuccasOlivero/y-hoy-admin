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
import { formSchema } from "@/constants/schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

type ProductFormValues = z.infer<typeof formSchema>;

interface Type {
  id: string;
  nameOfType: string;
}

interface DrinkFormProps {
  type: Type[];
}

export default function DrinkForm({ type }: DrinkFormProps) {
  const { toast } = useToast();

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: ProductFormValues) => {
    try {
      await axios({
        method: "POST",
        url: `/api/drink`,
        data,
      });

      toast({
        title: "Bebida creada exitosamente ✅",
      });
    } catch (e) {
      toast({
        title: "Error al crear la bebida",
        variant: "destructive",
      });
      console.error(e, "FORM ERROR");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full grid grid-cols-3 gap-x-2 gap-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#267b40] font-bold text-base">
                Nombre de la bebida
              </FormLabel>
              <FormControl>
                <Input placeholder="por ejemplo: Coca Cola" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#267b40] font-bold text-base">
                Descripción
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="por ejemplo: trago intenso y suave a pasar por la garganta"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#267b40] font-bold text-base">
                Precio
              </FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="percentAlcohol"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#267b40] font-bold text-base">
                Porcentaje de alcohol
              </FormLabel>
              <FormControl>
                <Input type="number" placeholder="por ejemplo: 5%" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amargor"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#267b40] font-bold text-base">
                Amargor
              </FormLabel>
              <FormControl>
                <Input placeholder="por ejemplo: 10" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="flavour"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#267b40] font-bold text-base">
                Sabor y aroma
              </FormLabel>
              <FormControl>
                <Input placeholder="por ejemplo: afrutado" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="typeId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#267b40] font-bold text-base">
                Tipo de bebida
              </FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder="Elegí el tipo de bebida"
                      defaultValue={field.value}
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {type.map((type) => (
                    <SelectItem key={type.id} value={type.id}>
                      {type.nameOfType}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-end items-end col-span-2 ">
          <Button type="submit" className="mt-4 px-9">
            Crear
          </Button>
        </div>
      </form>
    </Form>
  );
}
