import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Client from "../../entities/client.entity";
import { IClientReturn, IClientUpdate } from "../../interfaces/client.interfaces";
import { returnClientSchema } from "../../schemas/client.schemas";

const updateClientService = async (
  newClientData: IClientUpdate,
  clientId: number
): Promise<IClientReturn> => {
  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);

  const oldClientData: Client | null = await clientRepository.findOne({
    where: {
      id: clientId,
    },
  });

  if (!oldClientData) {
    throw new Error("Client not found");
  }

  const updatedClient: Client = {
    ...oldClientData,
    ...newClientData,
    deletedAt: oldClientData.deletedAt
  };

  await clientRepository.save(updatedClient);

  const updatedClientReturn: IClientReturn = returnClientSchema.parse(updatedClient);

  return updatedClientReturn;
};

export default updateClientService;
