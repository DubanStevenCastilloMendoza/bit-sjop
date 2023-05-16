import Express from "express";
import { Router } from "express";
import controllers from "../controllers";

const router = Router()

//crear un usuario:

router.post("/create", controllers.user.createUser)


export default router