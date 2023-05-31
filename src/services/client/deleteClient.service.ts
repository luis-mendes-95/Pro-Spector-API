import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Client from "../../entities/client.entity";

const deleteClientService = async (clientId: number): Promise<void> => {
  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);

  const client: Client | null = await clientRepository.findOne({
    where: {
      id: clientId,
    },
  });

  await clientRepository.softRemove(client!);
};

export default deleteClientService;