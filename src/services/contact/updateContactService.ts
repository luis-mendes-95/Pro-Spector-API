import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contact.entity";
import { IContactReturn, IContactUpdate } from "../../interfaces/contact.interfaces";
import { returnContactSchema } from "../../schemas/contact.schemas";

const updateContactService = async (
  newContactData: IContactUpdate,
  contactId: number
): Promise<Contact> => {
  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);

  const contactToUpdate: Contact | null = await contactRepository.findOne({
    where: {
      id: contactId,
    },
  });

  if (!contactToUpdate) {
    throw new Error("Contact not found");
  }

  contactToUpdate.name = newContactData.name || contactToUpdate.name;
  contactToUpdate.email = newContactData.email || contactToUpdate.email;
  contactToUpdate.phone = newContactData.phone || contactToUpdate.phone;

  await contactRepository.save(contactToUpdate);

  return contactToUpdate;
};

export default updateContactService;
