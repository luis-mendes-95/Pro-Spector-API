import { z } from "zod";

const contactSchema = z.object({
  clientId: z.number(),
  name: z.string().min(3).max(45),
  email: z.string().email().max(45),
  phone: z.string().min(3).max(45),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

const returnContactSchema = contactSchema
  .extend({
    // id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
  });

const arrayContactSchema = returnContactSchema.array();

const contactUpdateSchema = z
  .object({
    name: z.string().min(3).max(45),
    email: z.string().email().max(45),
    phone: z.string().email().max(45),
  })
  .partial();

export { contactSchema, returnContactSchema, arrayContactSchema, contactUpdateSchema };