import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Client from "../../entities/client.entity";
import { IClient, IClientReturn } from "../../interfaces/client.interfaces";
import { returnClientSchema } from "../../schemas/client.schemas";

const createClientService = async (clientData: IClient): Promise<IClientReturn> => {
  const { name, email, phone } = clientData;

  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);

  const client: Client = clientRepository.create({
    name,
    email,
    phone,
  });

  await clientRepository.save(client);

  const newClient: IClientReturn = returnClientSchema.parse(client);

  return newClient;
};

export default createClientService;