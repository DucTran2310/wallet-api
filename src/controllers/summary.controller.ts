import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { successResponse } from "../utils/response";
import { getSummaryByUserIdService } from "../services/summary.service";

export const handleGetSummaryByUserId = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const summary = await getSummaryByUserIdService(userId);
  res.status(200).json(successResponse("Get info summary successfully", summary));
});