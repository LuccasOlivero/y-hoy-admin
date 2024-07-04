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

//TODO: fix this
type TypeOfDrinks = {
  typeOfDrinks: any[];
};

export default function DrinkForm({ typeOfDrinks }: TypeOfDrinks) {
  const { toast } = useToast();

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: ProductFormValues) => {
    try {
      //TODO: add validation and fix api call
      const { typeId } = data;
      console.log(`/api/${typeId}`);

      await axios({
        method: "POST",
        url: `/api/alcoholic`,
        data,
      });

      toast({
        title: "Bebida creada exitosamente",
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de la bebida</FormLabel>
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
              <FormLabel>Descripción</FormLabel>
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
              <FormLabel>Precio</FormLabel>
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
              <FormLabel>Porcentaje de alcohol</FormLabel>
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
              <FormLabel>Amargor</FormLabel>
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
              <FormLabel>Sabor y aroma</FormLabel>
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
              <FormLabel>Tipo de bebida</FormLabel>
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
                  {typeOfDrinks.map((type) => (
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
        <div className="w-full flex justify-end">
          <Button type="submit" className="mt-4">
            Enviar
          </Button>
        </div>
      </form>
    </Form>
  );
}
