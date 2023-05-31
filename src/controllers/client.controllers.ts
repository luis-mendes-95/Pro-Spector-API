import { Request, Response } from "express";
import createClientService from "../services/client/createClient.service";
import listAllClientsService from "../services/client/listClient.service";
import deleteClientService from "../services/client/deleteClient.service";
import updateClientService from "../services/client/updateClient.service";
import { IClient, IClientUpdate } from "../interfaces/client.interfaces";

const createClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientData: IClient = req.body;

  const newClient = await createClientService(clientData);
  return res.status(201).json(newClient);
};

const listAllClientsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clients = await listAllClientsService();
  return res.json(clients);
};

const deleteClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteClientService(parseInt(req.params.id));
  return res.status(204).send();
};

const updateClientController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const clientData: IClientUpdate = req.body;
  const clientId = parseInt(req.params.id);

  const updatedClient = await updateClientService(clientData, clientId);
  return res.json(updatedClient);
};

export {
  createClientController,
  listAllClientsController,
  deleteClientController,
  updateClientController,
};