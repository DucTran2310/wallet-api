// src/server.ts
import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { initDB } from "./config/db";
import job from './config/cron'

if (process.env.NODE_ENV === 'production') job.start()

const PORT = process.env.PORT || 5001;

app.get('api/heath', (req, res) => {
  res.status(200).json({status: "ok"})
})

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});