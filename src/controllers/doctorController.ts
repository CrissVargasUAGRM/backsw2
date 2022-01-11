import { Request, Response } from "express";
import { pool } from "../database";
import { QueryResult } from "pg";
import dotenv from "dotenv";
import { IDoctor } from "../interfaces/IDoctor";
import { Doctor } from "../utils/modelsRelations";

dotenv.config();

export const registerDoctor = async(req: Request, res: Response) => {
    try {
        const {nombre,matricula,especialidad,idclinic,telefono} = req.body;
        const response: QueryResult = await pool.query(
            "INSERT INTO doctors(nombre,matricula,especialidad,idClinic,telefono) VALUES ($1,$2,$3,$4,$5)",
            [nombre,matricula,especialidad,idclinic,telefono]
        );
    
        return res.status(200).json({
            message: "Doctor registrado exitosamente"
        });
    } catch (error) {
        res.status(500).json({
            message: "No se pudo registrar al doctor"
        });
    }
}

export const getAllDoctors = async(req: Request, res: Response) => {
    try {
        return res.status(200).json(
            await Doctor.findAll({
                attributes: ["id","nombre", "especialidad"]
            })
        );
    } catch (error) {
        console.log(error);
        return res.status(500).send({message: "Error en la consulta", error});
    }
}

export const getDoctorsClinic = async(req: Request, res: Response) => {
    try {
        const idclinic = req.params.clinic;
        const response: QueryResult = await pool.query(
            "select doctors.nombre, doctors.especialidad, doctors.telefono from doctors, clinica where doctors.idclinic = clinica.id and clinica.id = $1", [idclinic]
        );
        const doctorsclinic = response.rows;
        return res.status(200).json(doctorsclinic);
    } catch (error) {
        return res.status(500).json({
            message: "error al obtener los doctores de la clinica"
        });
    }

}