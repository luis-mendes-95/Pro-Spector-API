import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contact.entity";
import { IContactReturn, IContactUpdate } from "../../interfaces/contact.interfaces";
import { returnContactSchema } from "../../schemas/contact.schemas";

const updateContactService = async (
  newContactData: IContactUpdate,
  contactId: number
): Promise<IContactReturn> => {
  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);

  const oldContactData: Contact | null = await contactRepository.findOne({
    where: {
      id: contactId,
    },
  });

  if (!oldContactData) {
    throw new Error("Contact not found");
  }

  const contact: Contact = contactRepository.create();
  contact.client = oldContactData.client;
  contact.name = newContactData.name || oldContactData.name;
  contact.email = newContactData.email || oldContactData.email;

  await contactRepository.save(contact);

  const updatedContact: IContactReturn = returnContactSchema.parse(contact);

  return updatedContact;
};

export default updateContactService;
