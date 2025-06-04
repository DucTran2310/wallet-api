import { Request, Response, NextFunction } from "express";
import { errorResponse } from "../utils/response";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("❌ Global Error:", err);
  const statusCode = err.status || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json(errorResponse(message));
};