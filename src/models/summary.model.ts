import { sql } from "../config/db";
import { IResponseSummary } from "../types/summary.type";

export async function getSummaryByUserId(userId: string): Promise<IResponseSummary> {
  const [result] = await sql`
    SELECT
      COALESCE(SUM(amount), 0) as balance,
      COALESCE(SUM(CASE WHEN amount > 0 THEN amount ELSE 0 END), 0) as income,
      COALESCE(SUM(CASE WHEN amount < 0 THEN amount ELSE 0 END), 0) as expenses
    FROM transactions
    WHERE user_id = ${userId}
  `;

  return {
    balance: result.balance,
    income: result.income,
    expenses: result.expenses,
  };
}
