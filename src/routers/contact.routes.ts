import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listAllContactsController,
  updateContactController,
} from "../controllers/contact.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { contactSchema, contactUpdateSchema } from "../schemas/contact.schemas";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsvalid.middleware";
import ensureUserIsAdmin from "../middlewares/ensureIsAdmin.middleware";
import ensureIsAuthorizedUser from "../middlewares/ensureIsAutorzedUser.middleware";

const contactRoutes: Router = Router();

contactRoutes.post(
  "",
  ensureDataIsValidMiddleware(contactSchema),
  createContactController
);

contactRoutes.get(
  "",
  ensureTokenIsValidMiddleware,
  ensureUserIsAdmin,
  listAllContactsController
);

contactRoutes.patch(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureIsAuthorizedUser,
  ensureDataIsValidMiddleware(contactUpdateSchema),
  updateContactController
);

contactRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureUserIsAdmin,
  deleteContactController
);

export default contactRoutes;