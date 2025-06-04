import express from "express";
import transactionRoutes from "./routes/transaction.routes";
import summaryRoutes from "./routes/summary.routes";
import rateLimiter from './middlewares/rateLimiter';

const app = express();

//middleware
app.use(rateLimiter);
app.use(express.json());

app.get("/", (_, res) => {
  res.send("✅ API is working");
});

app.use("/api/transactions", transactionRoutes);
app.use("/api/transactions/summary", summaryRoutes);

export default app;
