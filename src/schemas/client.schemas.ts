import { z } from "zod";

const clientSchema = z.object({
  name: z.string().min(3).max(45),
  email: z.string().email().max(45),
  phone: z.string().max(20),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

const returnClientSchema = clientSchema
  .extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
  });

const arrayClientSchema = returnClientSchema.array();

const clientUpdateSchema = z
  .object({
    name: z.string().min(3).max(45),
    email: z.string().email().max(45),
    phone: z.string().max(20),
  })
  .partial();

export { clientSchema, returnClientSchema, arrayClientSchema, clientUpdateSchema };