import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Client from "../../entities/client.entity";
import Contact from "../../entities/contact.entity";
import { IContact, IContactReturn } from "../../interfaces/contact.interfaces";
import { returnContactSchema } from "../../schemas/contact.schemas";

const createContactService = async (contactData: IContact): Promise<IContactReturn> => {

  const { clientId, name, email, phone } = contactData;

  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);

  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);

  const client: Client | null = await clientRepository.findOne({
    where: { id: clientId },
  });

  if (!client) {
    throw new Error("Client not found");
  }

  const contact: Contact = contactRepository.create({
    client,
    name,
    email,
    phone
  });

  const newContact: IContactReturn = returnContactSchema.parse(contactData);

  await contactRepository.save(contact);

  return newContact;
};

export default createContactService;