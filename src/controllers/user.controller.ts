import  Express  from "express";

export const createUser = (req: Express.Request, res: Express.Response ) =>{
    res.status(201).json({msg: "usuario creado"})
}