import { z } from "zod";
import { DeepPartial } from "typeorm";

const conversionSchema = z.object({
  clientId: z.number(),
  details: z.string().max(200),
  value: z.number().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

const returnConversionSchema = conversionSchema.extend({
  id: z.number(),
});

const arrayConversionSchema = z.array(returnConversionSchema);

const conversionUpdateSchema = z.object({
  details: z.string().max(200),
  value: z.number().positive(),
}).partial();

type IConversion = z.infer<typeof conversionSchema>;
type IConversionUpdate = DeepPartial<IConversion>;

export {
  IConversion,
  IConversionUpdate,
  conversionSchema,
  returnConversionSchema,
  arrayConversionSchema,
  conversionUpdateSchema,
};