import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Conversion from "../../entities/conversion.entity";
import { IArrayConversions } from "../../interfaces/conversion.interfaces";
import { arrayConversionSchema } from "../../schemas/conversion.schemas";

const listAllConversionsService = async (): Promise<Conversion[]> => {
  const conversionRepository: Repository<Conversion> = AppDataSource.getRepository(Conversion);

  const listConversions: Conversion[] = await conversionRepository.find({ relations: ["client"] });

  return listConversions;
};

export default listAllConversionsService;