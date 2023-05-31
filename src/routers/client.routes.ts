import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  listAllClientsController,
  updateClientController,
} from "../controllers/client.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { clientSchema, clientUpdateSchema } from "../schemas/client.schemas";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsvalid.middleware";
import ensureUserIsAdmin from "../middlewares/ensureIsAdmin.middleware";
import ensureIsAuthorizedUser from "../middlewares/ensureIsAutorzedUser.middleware";

const clientRoutes: Router = Router();

clientRoutes.post(
  "",
  ensureDataIsValidMiddleware(clientSchema),
  ensureTokenIsValidMiddleware,
  createClientController
);

clientRoutes.get(
  "",
  ensureTokenIsValidMiddleware,
  ensureUserIsAdmin,
  listAllClientsController
);

clientRoutes.patch(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureIsAuthorizedUser,
  ensureDataIsValidMiddleware(clientUpdateSchema),
  updateClientController
);

clientRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureUserIsAdmin,
  deleteClientController
);

export default clientRoutes;