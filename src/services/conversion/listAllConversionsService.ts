import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Conversion from "../../entities/conversion.entity";
import { IArrayConversions } from "../../interfaces/conversion.interfaces";
import { arrayConversionSchema } from "../../schemas/conversion.schemas";

const listAllConversionsService = async (): Promise<IArrayConversions> => {
  const conversionRepository: Repository<Conversion> = AppDataSource.getRepository(Conversion);

  const listConversions: Conversion[] = await conversionRepository.find();

  const conversions: IArrayConversions = arrayConversionSchema.parse(listConversions);

  return conversions;
};

export default listAllConversionsService;