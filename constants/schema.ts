import * as z from "zod";

export const formSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.string(),
  percentAlcohol: z.string(),
  amargor: z.string(),
  flavour: z.string(),
  typeId: z.string(),
});

export const formSchemaType = z.object({
  typeName: z.string(),
});
