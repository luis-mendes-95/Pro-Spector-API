import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  contactSchema,
  returnContactSchema,
  arrayContactSchema,
} from "../schemas/contact.schemas";

// type IContact = Omit<z.infer<typeof contactSchema>, "createdAt" | "updatedAt" | "deletedAt">;
type IContact = z.infer<typeof contactSchema>;
type IContactReturn = z.infer<typeof returnContactSchema>;
type IArrayContacts = z.infer<typeof arrayContactSchema>;
// type IContactUpdate = DeepPartial<IContact>;
type IContactUpdate = Partial<IContact>;

export { IContact, IContactReturn, IArrayContacts, IContactUpdate };