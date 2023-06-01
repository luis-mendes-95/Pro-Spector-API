import { z } from "zod";

const conversionSchema = z.object({
  clientId: z.number(),
  details: z.string(),
  value: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

const returnConversionSchema = conversionSchema
  .extend({
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
  });

const arrayConversionSchema = returnConversionSchema.array();

const conversionUpdateSchema = z
  .object({
    details: z.string(),
    value: z.number(),
  })
  .partial();

export { conversionSchema, returnConversionSchema, arrayConversionSchema, conversionUpdateSchema };