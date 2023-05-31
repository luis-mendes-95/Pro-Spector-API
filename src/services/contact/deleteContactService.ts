import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contact.entity";

const deleteContactService = async (contactId: number): Promise<void> => {
  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);

  const contact: Contact | null = await contactRepository.findOne({
    where: {
      id: contactId,
    },
  });

  await contactRepository.softRemove(contact!);
};

export default deleteContactService;