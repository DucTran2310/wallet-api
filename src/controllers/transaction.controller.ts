import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { errorResponse, successResponse } from "../utils/response";
import {
  createTransactionService,
  deleteTransactionIdService,
  getTransactionsByUserIdService,
} from "../services/transaction.service";

export const handleCreateTransaction = asyncHandler(async (req: Request, res: Response) => {
  const { title, amount, category, user_id } = req.body;
  const transaction = await createTransactionService({ user_id, title, amount, category });
  res.status(201).json(successResponse("Transaction created successfully", transaction));
});

export const handleGetTransactionsByUserId = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const transactions = await getTransactionsByUserIdService(userId);
  res.status(200).json(successResponse("Transactions fetched successfully", {listTransactions: transactions}));
});

export const handleDeleteTransactionsByUserId = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await deleteTransactionIdService(id);
  if (result.length === 0) {
    return res.status(404).json(errorResponse("Transaction not found", []))
  }
  res.status(200).json(successResponse("Delete transaction successfully", []));
});
