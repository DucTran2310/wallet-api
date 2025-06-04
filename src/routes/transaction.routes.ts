import express from "express";
import { handleCreateTransaction, handleDeleteTransactionsByUserId, handleGetTransactionsByUserId } from "../controllers/transaction.controller";
import { validateCreateTransaction, validateId } from "../validators/transaction.validator";
import { validateRequest } from "../middlewares/validateTransaction.middleware";

const router = express.Router();

router.post(
  "/",
  validateCreateTransaction,
  validateRequest,
  handleCreateTransaction
);

router.get(
  "/:userId",
  handleGetTransactionsByUserId
)

router.delete(
  "/:id",
  validateId,
  validateRequest,
  handleDeleteTransactionsByUserId
)

export default router;