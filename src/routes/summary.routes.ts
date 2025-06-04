import express from "express";
import { handleGetSummaryByUserId } from "../controllers/summary.controller";

const router = express.Router();

router.get(
  "/:userId",
  handleGetSummaryByUserId
)

export default router;