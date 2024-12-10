import express, { Router, Request, Response } from "express";
import RouteGroup from 'express-route-grouping';
import { handleNotFound, handleOk, handleInternalServerError } from "../helper/responseHelper";
import { ReqGetAllProducts, ReqCreateProduct, ReqGetProductById, ReqUpdateProductById, ReqDeleteProductById } from "../controllers/productController";
import { ReqLogin, ReqRegister } from "../controllers/authController";
import { authetication } from "../middleware/authenticateMiddleware";
import { ReqGetProfile } from "../controllers/userController";

const router: Router = express.Router();
const root: RouteGroup = new RouteGroup('/', router);

// root.group('products', (product) => {
//   product.get('/', ReqGetAllProducts);
//   product.post('/', ReqCreateProduct);
//   product.get('/:id', ReqGetProductById);
//   product.put('/:id', ReqUpdateProductById);
//   product.delete('/:id', ReqDeleteProductById);
// });

router.post("/auth/register", ReqRegister);
router.post("/auth/login", ReqLogin);

router.get("/profile", authetication, ReqGetProfile);

router.get("/products", ReqGetAllProducts);
router.post("/products", authetication, ReqCreateProduct);
router.get("/products/:id", ReqGetProductById);
router.put("/products/:id", authetication, ReqUpdateProductById);
router.delete("/products/:id", authetication, ReqDeleteProductById);

router.get("/", (req: Request, res: Response) => {
  handleOk(res, "Welcome to E-commerce API", {
    version: '1.0'
  });
});

router.use((req: Request, res: Response) => {
  handleNotFound(res, "Route not found");
})

router.use((err: unknown, req: Request, res: Response) => {
  handleInternalServerError(res, "Internal server rrror", err);
})

export default router;