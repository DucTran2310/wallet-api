import { body, param } from "express-validator";

export const validateCreateTransaction = [
  body("title").notEmpty().withMessage("Title is required"),
  body("user_id").notEmpty().withMessage("User ID is required"),
  body("category").notEmpty().withMessage("Category is required"),
  body("amount")
    .not()
    .isEmpty()
    .withMessage("Amount is required")
    .isNumeric()
    .withMessage("Amount must be a number"),
];

export const validateId = [
  param("id")
    .notEmpty().withMessage("Id is required")
    .isNumeric().withMessage("Id must be a number"),
];
