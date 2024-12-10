import express, { Router, Request, Response } from "express";
import { handleNotFound, handleOk, handleInternalServerError } from "../helper/responseHelper";
import { ReqGetAllProducts, ReqCreateProduct, ReqGetProductById, ReqUpdateProductById, ReqDeleteProductById } from "../controllers/productController";
import { ReqLogin, ReqRegister } from "../controllers/authController";
import { authetication } from "../middleware/authenticateMiddleware";
import { ReqGetProfile } from "../controllers/userController";
import { ReqGetCategories } from "../controllers/categoryController";

const router: Router = express.Router();

// Authentication route
router.post("/auth/register", ReqRegister);
router.post("/auth/login", ReqLogin);

// User route
router.get("/profile", authetication, ReqGetProfile);

// Product route
router.get("/products", ReqGetAllProducts);
router.post("/products", authetication, ReqCreateProduct);
router.get("/products/:id", ReqGetProductById);
router.put("/products/:id", authetication, ReqUpdateProductById);
router.delete("/products/:id", authetication, ReqDeleteProductById);

// Category route
router.get("/categories", ReqGetCategories);

router.get("/", (req: Request, res: Response) => {
  handleOk(res, "Welcome to E-commerce API", {
    version: '1.0'
  });
});

router.use((req: Request, res: Response) => {
  handleNotFound(res, "Route not found");
})

router.use((err: unknown, req: Request, res: Response) => {
  handleInternalServerError(res, "Internal server error", err);
})

export default router;