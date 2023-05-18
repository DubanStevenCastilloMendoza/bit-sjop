import Express from "express";
import { Router } from "express";
import controllers from "../controllers";

const router = Router()

//crear un usuario:

router.post("/create", controllers.user.createUser)
router.get("/getAll", controllers.user.getUsers)
router.get("/getespe", controllers.user.getUserEspe)
router.put("/update", controllers.user.updateUser)
router.delete ("/delete", controllers.user.deleteUser)


export default router