import { Request, Response, NextFunction } from "express";
import rateLimit from "../config/upstash";

const rateLimiter = (req: Request, res: Response, next: NextFunction) => {

  // here we just kept it simple
  // in a real-world-app you'd like to put the userId or ipAddress as your key
  // "my-rate-limit" là key định danh, dùng để đếm số lần truy cập.
  // rateLimit.limit(req.ip) => đem theo ip
  // hoặc rateLimit.limit(req.user.id) => nếu có hệ thống login và cần giới hạn theo user.
  rateLimit.limit("my-rate-limit").then(result => {

    if (!result.success) {
      return res.status(429).json({
        message: "Too many requests, please try again later."
      });
    }

    next();
  }).catch(error => {
    console.error("Rate limit error: ", error);
    next(error);
  });
};

export default rateLimiter;