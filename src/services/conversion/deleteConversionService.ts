import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Conversion from "../../entities/conversion.entity";

const deleteConversionService = async (conversionId: number): Promise<void> => {
  const conversionRepository: Repository<Conversion> = AppDataSource.getRepository(Conversion);

  const conversion: Conversion | null = await conversionRepository.findOne({
    where: {
      id: conversionId,
    },
  });

  await conversionRepository.softRemove(conversion!);
};

export default deleteConversionService;
