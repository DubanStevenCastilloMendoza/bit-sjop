import Express from "express";
import mongoose from "mongoose";
import productModel from "../models/product.model";

export const createProduct = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    let newProduct = req.body;
      const productCreated = await productModel.create(newProduct);
      if (productCreated) return res.status(201).json({ msg: "Producto creado" });
      throw { msg: "Error al crear el producto" };
  } catch (error) {
    return res.status(400).json({ msg: "ha ocurrido un error", error });
  }
};

 export const getProducts = async (req: Express.Request, res: Express.Response) => {
   try {
     const result = await productModel.find();
     return res.status(200).json({ result });
   } catch (error) {
     return res.status(400).json({ msg: "ha ocurrido un error", error });
   }
 };

 export const updateProduct = async (
   req: Express.Request,
   res: Express.Response
 ) => {
   // {
   //     id:
   //     dataToUpdate{}
   // }
   try {
     let { dataToUpdate, _id } = req.body;
     const updateDate = await productModel.findByIdAndUpdate(_id, dataToUpdate);
     return res.status(200).json({ msg: "producto actualizado" });
   } catch (error) {
     return res.status(400).json({ msg: "ha ocurrido un error", error });
   }
 };


 export const deleteProduct = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    let {_id} = req.body;
    await productModel.findByIdAndDelete({_id });
    return res.status(200).json({msg:"producto eliminado correctamente"});
  } catch (error) {
    return res.status(400).json({ msg: "ha ocurrido un error", error });
  }
};

export const factura = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
      let {id, idx}= req.params

    const producto = await productModel.findOne({id});
    const productoT = await productModel.findOne({idx});
 
    if(producto && productoT){

      let name = producto.name;
      let edad = producto.price;
      let namex = productoT.name;
      let edadx = productoT.price;
      

      let total = edad + edadx;

      res.status(200).json({
        producto: {
          nombre: name,
          precio: edad
        },
        productoT: {
          nombre: namex,
          precio: edadx
        },
        total: total
      });
    }
   

    
  } catch (error) {
    return res.status(400).json({ msg: "ha ocurrido un error", error });
  }
};







