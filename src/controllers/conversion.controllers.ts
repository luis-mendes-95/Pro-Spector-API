import { Request, Response } from "express";
import createConversionService from "../services/conversion/createConversionService";
import listAllConversionsService from "../services/conversion/listAllConversionsService";
import deleteConversionService from "../services/conversion/deleteConversionService";
import updateConversionService from "../services/conversion/updateConversionService";
import { IConversion, IConversionUpdate } from "../interfaces/conversion.interfaces";

const createConversionController = async (req: Request, res: Response): Promise<Response> => {

  const conversionData: IConversion = req.body;

  if (!conversionData.clientId) {
    return res.status(400).json({ error: "clientId is required" });
  }

  const newConversion = await createConversionService(conversionData);

  return res.status(201).json(newConversion);
};

const listAllConversionsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const conversions = await listAllConversionsService();
  return res.json(conversions);
};

const deleteConversionController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteConversionService(parseInt(req.params.id));
  return res.status(204).send();
};

const updateConversionController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const conversionData: IConversionUpdate = req.body;
  const conversionId = parseInt(req.params.id);

  const updatedConversion = await updateConversionService(conversionData, conversionId);
  return res.json(updatedConversion);
};

export {
  createConversionController,
  listAllConversionsController,
  deleteConversionController,
  updateConversionController,
};