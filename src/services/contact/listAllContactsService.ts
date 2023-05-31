import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contact.entity";
import { IArrayContacts } from "../../interfaces/contact.interfaces";
import { arrayContactSchema } from "../../schemas/contact.schemas";

const listAllContactsService = async (): Promise<IArrayContacts> => {
  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);

  const listContacts: Contact[] = await contactRepository.find();

  const contacts: IArrayContacts = arrayContactSchema.parse(listContacts);

  return contacts;
};

export default listAllContactsService;