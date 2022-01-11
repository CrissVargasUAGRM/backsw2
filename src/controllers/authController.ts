import { Request, Response } from "express";
import {IUser} from "../interfaces/IUser";
import { User, Rol } from "../utils/modelsRelations";
import dotenv from "dotenv";

dotenv.config();

export const singup = async(req: Request, res: Response) => {
    try {
        
        // insertar el nuevo usuario en la base de datos
        const {username,namecomplete,email,password,ci} = req.body as IUser;
        const rolAdd = await Rol.findOne({
            where: {rol: "Cliente"}, 
            attributes: ["id","rol"]
        });
        const idRol = rolAdd?.getDataValue("id");
        const newUSer = await User.create({
            username,
            namecomplete,
            email,
            password,
            ci,
            idrol: idRol
        });
        return res.status(200).send({
            user: {
                username,
                namecomplete,
                email,
                ci,
                idRol
            }
        });
    } catch (error) {
        return res.status(500).json({message: "Error al registrate", error});
    }
};

export const singin = async(req: Request, res: Response) => {
    try {
        
        //encontrar al usuario
        const {username, password} = req.body;
        return res.status(200).json(
            await User.findOne({
                where: {
                    username: username
                },
                attributes: ["username","namecomplete","email","idrol"]
            })
        );
    } catch (error) {
        return res.status(500).send({message: "Error al logearse", error});
        
    }
}
