import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Client from "../../entities/client.entity";
import Conversion from "../../entities/conversion.entity";
import { IConversion, IConversionReturn } from "../../interfaces/conversion.interfaces";
import { returnConversionSchema } from "../../schemas/conversion.schemas";

const createConversionService = async (conversionData: IConversion): Promise<Conversion> => {
  const { clientId, details, value } = conversionData;

  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);
  const conversionRepository: Repository<Conversion> = AppDataSource.getRepository(Conversion);

  const client: Client | null = await clientRepository.findOne({
    where: {
      id: clientId,
    },
  });

  if (!client) {
    throw new Error("Client not found");
  }

  const conversion: Conversion = conversionRepository.create({
    client: client,
    details,
    value,
  });

  await conversionRepository.save(conversion);

  // const newConversion: IConversionReturn = returnConversionSchema.parse(conversion);

  return conversion;
};

export default createConversionService;
