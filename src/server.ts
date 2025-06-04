// src/server.ts
import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { initDB } from "./config/db";

const PORT = process.env.PORT || 5001;

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});