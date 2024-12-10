import express, { Router, Request, Response } from "express";
import RouteGroup from 'express-route-grouping';
import { handleNotFound, handleOk, handleInternalServerError } from "../helper/responseHelper";
import { ReqGetAllProducts, ReqCreateProduct, ReqGetProductById, ReqUpdateProductById, ReqDeleteProductById } from "../controllers/productController";

const router: Router = express.Router();
const root: RouteGroup = new RouteGroup('/', router);

// root.group('products', (product) => {
//   product.get('/', ReqGetAllProducts);
//   product.post('/', ReqCreateProduct);
//   product.get('/:id', ReqGetProductById);
//   product.put('/:id', ReqUpdateProductById);
//   product.delete('/:id', ReqDeleteProductById);
// });

router.get("/products", ReqGetAllProducts);
router.post("/products", ReqCreateProduct);
router.get("/products/:id", ReqGetProductById);
router.put("/products/:id", ReqUpdateProductById);
router.delete("/products/:id", ReqDeleteProductById);

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