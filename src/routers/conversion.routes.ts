import { Router } from "express";
import {
  createConversionController,
  deleteConversionController,
  listAllConversionsController,
  updateConversionController,
} from "../controllers/conversion.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { conversionSchema, conversionUpdateSchema } from "../schemas/conversion.schemas";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsvalid.middleware";
import ensureUserIsAdmin from "../middlewares/ensureIsAdmin.middleware";
import ensureIsAuthorizedUser from "../middlewares/ensureIsAutorzedUser.middleware";

const conversionRoutes: Router = Router();

conversionRoutes.post(
  "",
  ensureDataIsValidMiddleware(conversionSchema),
  createConversionController
);

conversionRoutes.get(
  "",
  ensureTokenIsValidMiddleware,
  ensureUserIsAdmin,
  listAllConversionsController
);

conversionRoutes.patch(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureIsAuthorizedUser,
  ensureDataIsValidMiddleware(conversionUpdateSchema),
  updateConversionController
);

conversionRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureUserIsAdmin,
  deleteConversionController
);

export default conversionRoutes;