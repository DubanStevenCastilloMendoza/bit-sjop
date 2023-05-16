import {Router} from "express";
import user from "./user.routes"

const router = Router();

//acceso a las rutas 

//rutas del usuario 
router.use("/user", user)
//rutas productos


export default router;