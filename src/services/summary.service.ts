import { getSummaryByUserId } from "../models/summary.model";
import { IResponseSummary } from "../types/summary.type";

/**
 * Service to get summary by userId
 */
export const getSummaryByUserIdService = async (
  userId: string
): Promise<IResponseSummary> => {
  return await getSummaryByUserId(userId);
};