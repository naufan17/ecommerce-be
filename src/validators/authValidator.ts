import { body } from "express-validator";

export const registerValidator = () => {
  return [
    body("name")
      .notEmpty()
      .withMessage("Name is required"),
    body("email")
      .isEmail()
      .withMessage("Email is invalid"),
    body("gender")
      .isIn(["male", "female"])
      .withMessage("Gender is invalid"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters"),
  ]
};

export const loginValidator = () => {
  return [
    body("email")
      .isEmail()
      .withMessage("Email is invalid"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters"),
  ]
};