import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Conversion from "../../entities/conversion.entity";
import { IConversionReturn, IConversionUpdate } from "../../interfaces/conversion.interfaces";
import { returnConversionSchema } from "../../schemas/conversion.schemas";

const updateConversionService = async (  newConversionData: IConversionUpdate,  conversionId: number): Promise<Conversion> => {
  
  const conversionRepository: Repository<Conversion> = AppDataSource.getRepository(Conversion);

  const conversionToUpdate: Conversion | null = await conversionRepository.findOne({
    where: {
      id: conversionId,
    },
  });

  if (!conversionToUpdate) {
    throw new Error("Conversion not found");
  }

  conversionToUpdate.details = newConversionData.details || conversionToUpdate.details;
  conversionToUpdate.value = newConversionData.value || conversionToUpdate.value;

  await conversionRepository.save(conversionToUpdate);

  return conversionToUpdate;
};


export default updateConversionService;
