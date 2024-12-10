import express, { Router, Request, Response } from "express";
import { handleNotFound, handleOk, handleInternalServerError } from "../helper/responseHelper";
import { ReqGetAllProducts, ReqCreateProduct, ReqGetProductById, ReqUpdateProductById, ReqDeleteProductById } from "../controllers/productController";
import { ReqLogin, ReqRegister } from "../controllers/authController";
import { authetication } from "../middleware/authenticateMiddleware";
import { ReqGetProfile } from "../controllers/userController";
import { ReqGetCategories } from "../controllers/categoryController";
import { loginValidator, registerValidator } from "../validators/authValidator";
import { createProductValidator, updateProductValidator } from "../validators/productValidator";

const router: Router = express.Router();

// Authentication route
router.post("/auth/register", registerValidator(), ReqRegister);
router.post("/auth/login", loginValidator(), ReqLogin);

// User route
router.get("/profile", authetication, ReqGetProfile);

// Product route
router.get("/products", ReqGetAllProducts);
router.post("/products", createProductValidator(), authetication, ReqCreateProduct);
router.get("/products/:id", ReqGetProductById);
router.put("/products/:id", updateProductValidator(), authetication, ReqUpdateProductById);
router.delete("/products/:id", authetication, ReqDeleteProductById);

// Category route
router.get("/categories", ReqGetCategories);

router.get("/", (req: Request, res: Response) => {
  return handleOk(res, "Welcome to E-commerce API", {
    version: '1.0'
  });
});

router.use((req: Request, res: Response) => {
  return handleNotFound(res, "Route not found");
})

router.use((err: unknown, req: Request, res: Response) => {
  return handleInternalServerError(res, "Internal server error", err);
})

export default router;