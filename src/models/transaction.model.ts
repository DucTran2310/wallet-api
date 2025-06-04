import { sql } from "../config/db";
import { Transaction } from "../types/transaction.type";

export async function createTransaction(data: {
  user_id: string;
  title: string;
  amount: number;
  category: string;
}): Promise<Transaction> {
  const result = await sql`
    INSERT INTO transactions (user_id, title, amount, category)
    VALUES (${data.user_id}, ${data.title}, ${data.amount}, ${data.category})
    RETURNING *;
  `;

  return result[0] as Transaction;
}

export async function getTransactionsByUserId(data: {
  userId: string;
}): Promise<Transaction[]> {
  const transactions = await sql`
    SELECT * FROM transactions WHERE user_id = ${data.userId} ORDER BY created_at DESC
  `;
  return transactions as Transaction[];
}

export async function deleteTransactionById(data: {
  id: string;
}): Promise<Transaction[]> {
  const transactions = await sql`
    DELETE FROM transactions WHERE id = ${data.id} RETURNING *
  `;
  return transactions as Transaction[];
}
