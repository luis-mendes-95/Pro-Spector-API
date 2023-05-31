import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  conversionSchema,
  returnConversionSchema,
  arrayConversionSchema,
  conversionUpdateSchema,
} from "../schemas/conversion.schemas";

type IConversion = z.infer<typeof conversionSchema>;
type IConversionReturn = z.infer<typeof returnConversionSchema>;
type IArrayConversions = z.infer<typeof arrayConversionSchema>;
type IConversionUpdate = DeepPartial<IConversion> & { updatedAt?: string };

export {
  IConversion,
  IConversionReturn,
  IArrayConversions,
  IConversionUpdate,
};
