import Express from "express";
import mongoose from "mongoose";
import userModel from "../models/user.model";

export const createUser = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    let newUser = req.body;

    const { username, edad, email } = req.body;
    // Busca el usuario por nombre de usuario en la base de datos
    const user = await userModel.findOne({ username });
    const emails = await userModel.findOne({ email });

    if (user || emails) {
      return res.json({ exists: true });
    }

    if (edad > 18) {
      const userCreated = await userModel.create(newUser);
      if (userCreated) return res.status(201).json({ msg: "Usuario creado" });
      throw { msg: "Error al crear usuario" };
    }
    res.json({ msg: "no puede" });

    //  res.json({ exists: false });
  } catch (error) {
    return res.status(400).json({ msg: "ha ocurrido un error", error });
  }
};

export const getUsers = async (req: Express.Request, res: Express.Response) => {
  try {
    const result = await userModel.find();
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(400).json({ msg: "ha ocurrido un error", error });
  }
};

export const updateUser = async (
  req: Express.Request,
  res: Express.Response
) => {
  // {
  //     id:
  //     dataToUpdate{}
  // }
  try {
    let { dataToUpdate, _id } = req.body;
    const updateDate = await userModel.findByIdAndUpdate(_id, dataToUpdate);
    return res.status(200).json({ msg: "usuario actualizado" });
  } catch (error) {
    return res.status(400).json({ msg: "ha ocurrido un error", error });
  }
};

export const getUserEspe = async (req: Express.Request, res: Express.Response) => {
    try {

        const {username} = req.body;
        const user = await userModel.findOne({username})
        if(user){
            return res.status(200).json({ user });
        }
            return res.status(400).json({msg: "f"})
        
    } catch (error) {
        return res.status(400).json({ msg: "ha ocurrido un error", error }); 
    }
}
export const deleteUser = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    let {_id} = req.body;
    await userModel.findByIdAndDelete({_id });
    return res.status(200).json({msg:"usuario eliminado correctamente"});
  } catch (error) {
    return res.status(400).json({ msg: "ha ocurrido un error", error });
  }
};