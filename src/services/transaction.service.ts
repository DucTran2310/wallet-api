import { createTransaction, deleteTransactionById, getTransactionsByUserId } from "../models/transaction.model";
import { Transaction } from "../types/transaction.type";

/**
 * Service to create a transaction
 */
export const createTransactionService = async (data: {
  user_id: string;
  title: string;
  amount: number;
  category: string;
}): Promise<Transaction> => {
  return await createTransaction(data);
};

/**
 * Service to get all transactions by user ID
 */
export const getTransactionsByUserIdService = async (userId: string): Promise<Transaction[]> => {
  return await getTransactionsByUserId({ userId });
};

/**
 * Delete transaction by transactionId
 */
export const deleteTransactionIdService = async (id: string): Promise<Transaction[]> => {
  return await deleteTransactionById({ id });
};
