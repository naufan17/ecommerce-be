import { body } from "express-validator";

export const createProductValidator = () => {
  return [
    body("name")
      .notEmpty()
      .withMessage("Name is required"),
    body("description")
      .notEmpty()
      .withMessage("Description is required"),
    body("price")
      .isNumeric()
      .withMessage("Price must be a number"),
    body("quantity")
      .isNumeric()
      .withMessage("Quantity must be a number"),
    body("category_id")
      .isNumeric()
      .withMessage("Category ID must be a number"),
  ]
};

export const updateProductValidator = () => {
  return [
    body("name")
      .notEmpty()
      .withMessage("Name is required"),
    body("description")
      .notEmpty()
      .withMessage("Description is required"),
    body("price")
      .isNumeric()
      .withMessage("Price must be a number"),
    body("quantity")
      .isNumeric()
      .withMessage("Quantity must be a number"),
    body("category_id")
      .isNumeric()
      .withMessage("Category ID must be a number"),
  ]
};