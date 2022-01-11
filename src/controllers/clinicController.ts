import { Request, Response } from "express";
import { IClinic } from "../interfaces/IClinic";
import { Clinic } from "../utils/modelsRelations";
import dotenv from "dotenv";

dotenv.config();

export const getAllClinic = async(req: Request, res: Response) => {
    try {
        return res.status(200).json(
            await Clinic.findAll({
                attributes: ["id","nombre", "direccion"]
            })
        );
    } catch (error) {
        return res.status(500).send({message: "Error al obtener las clinicas", error});
    }
}

export const registerClinic = async(req: Request, res: Response) => {
    try {
        const {nombre,direccion} = req.body as IClinic;
        const newClinic = await Clinic.create({
            nombre,
            direccion
        });
        return res.status(200).send({
            clinic: {nombre, direccion},
            message: "Clinica registrada exitosamente"
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send({message: "Error al crear la clinica", error});
    }
}

export const deleteClinic = async(req: Request, res: Response) => {
    try {
        const {id} = req.params;
        await Clinic.destroy({where: {id}});
        return res.status(200).send({
            message: "Eliminado correctamente"
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send({message: "Error al eliminar la clinica", error});
    }
}
