import  express  from "express";
import dotenv from "dotenv";
import {connectDB} from "./database";

import index from "./routes/index"


//CREAR INSTANCIA DE EXPRESS

const app = express();



//traer el puerto de las variables de entorno
dotenv.config();

//base de datos
connectDB()

//establecer el puerto en el cual se ejecuta
const port = process.env.PORT || 3200


//establecer usos de express
app.use(express.json());
//establecer las rutas a usar en el api

app.use("/api", index)



//ejecución API
app.listen(port, ()=>console.log(`API is running in port ${port}`))