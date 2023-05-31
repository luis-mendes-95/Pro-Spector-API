import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Conversion from "../../entities/conversion.entity";
import { IConversionReturn, IConversionUpdate } from "../../interfaces/conversion.interfaces";
import { returnConversionSchema } from "../../schemas/conversion.schemas";

const updateConversionService = async (
  newConversionData: Partial<Conversion>,
  conversionId: number
): Promise<IConversionReturn> => {
  const conversionRepository: Repository<Conversion> = AppDataSource.getRepository(Conversion);

  const oldConversionData: Conversion | null = await conversionRepository.findOne({
    where: {
      id: conversionId,
    },
  });

  if (!oldConversionData) {
    throw new Error(`Conversion with ID ${conversionId} not found.`);
  }

  const mergedConversionData: Conversion = {
    ...oldConversionData,
    ...newConversionData,
  };

  const updatedConversion: Conversion = await conversionRepository.save(mergedConversionData);

  const parsedUpdatedConversion: IConversionReturn = returnConversionSchema.parse(updatedConversion);

  return parsedUpdatedConversion;
};

export default updateConversionService;
