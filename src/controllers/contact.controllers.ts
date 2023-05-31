import { Request, Response } from "express";
import createContactService from "../services/contact/createContactService";
import listAllContactsService from "../services/contact/listAllContactsService";
import deleteContactService from "../services/contact/deleteContactService";
import updateContactService from "../services/contact/updateContactService";
import { IContact, IContactUpdate } from "../interfaces/contact.interfaces";

const createContactController = async (req: Request, res: Response): Promise<Response> => {

  const contactData: IContact = req.body;

  if (!contactData.clientId) {
    return res.status(400).json({ error: "clientId is required" });
  }

  const newContact = await createContactService(contactData);

  return res.status(201).json(newContact);
};

const listAllContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contacts = await listAllContactsService();
  return res.json(contacts);
};

const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteContactService(parseInt(req.params.id));
  return res.status(204).send();
};

const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactData: IContactUpdate = req.body;
  const contactId = parseInt(req.params.id);

  const updatedContact = await updateContactService(contactData, contactId);
  return res.json(updatedContact);
};

export {
  createContactController,
  listAllContactsController,
  deleteContactController,
  updateContactController,
};