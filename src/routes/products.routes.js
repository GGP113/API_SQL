import { Router } from "express";

import { getProducts } from "../controllers/products.controller.js";
import { getProduct } from "../controllers/products.controller.js";
import { postProducts } from "../controllers/products.controller.js";
import { putProducts } from "../controllers/products.controller.js";
import { deleteProducts } from "../controllers/products.controller.js";

const router = Router();

router.get("/productos", getProducts);

router.get("/productos/:id", getProduct);

router.post("/productos", postProducts);

router.put("/productos/:id", putProducts);

router.delete("/productos/:id", deleteProducts);

export default router;
