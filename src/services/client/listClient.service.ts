import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Client from "../../entities/client.entity";
import { IArrayClients } from "../../interfaces/client.interfaces";
import { arrayClientSchema } from "../../schemas/client.schemas";

const listAllClientsService = async (): Promise<IArrayClients> => {
  
  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);

  const listClients: Array<Client> = await clientRepository.find();

  const clients: IArrayClients = arrayClientSchema.parse(listClients);

  return clients;
};

export default listAllClientsService;