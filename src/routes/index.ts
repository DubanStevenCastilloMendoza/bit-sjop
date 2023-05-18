import {Router} from "express";
import user from "./user.routes"
import product from "./product.routes"

const router = Router();

//acceso a las rutas 

//rutas del usuario 
router.use("/user", user)
//rutas productos
router.use("/product", product)


export default router;