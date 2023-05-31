import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  clientSchema,
  returnClientSchema,
  arrayClientSchema,
} from "../schemas/client.schemas";

type IClient = z.infer<typeof clientSchema>;
type IClientReturn = z.infer<typeof returnClientSchema>;
type IArrayClients = z.infer<typeof arrayClientSchema>;
type IClientUpdate = DeepPartial<IClient>;

export { IClient, IClientReturn, IArrayClients, IClientUpdate };