import Express from "express";
import { Router } from "express";
import controllers from "../controllers";

const router = Router()

//crear un usuario:

router.post("/agregar", controllers.product.createProduct)
router.get("/getAll", controllers.product.getProducts)
router.put("/update", controllers.product.updateProduct)
router.delete ("/delete", controllers.product.deleteProduct)


export default router