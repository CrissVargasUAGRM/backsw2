import { Request, Response } from "express";
import { IConsultaMedica } from "../interfaces/IConsultaMedica";
import { ConsultaMedica } from "../utils/modelsRelations";
import dotenv from "dotenv";
import * as verify from "../middlewares/verify";
import { QueryResult } from "pg";
import { pool } from "../database";

dotenv.config();

export const registrarReserva = async(req: Request, res: Response) => {
    try {
        const {fecha, iddoctor, client, email, telefono, username} = req.body;
        const fechaRes = new Date(fecha);
        const nroRes = await verify.lastReservation() + 1;
        const idUser = await verify.getUserId(username);
        const estado = "aprobado";
        const resp: QueryResult = await pool.query(
            "insert into consultamedica(fecha,nroreserva,iduser,iddoctor,client,email,telefono,estado) values($1,$2,$3,$4,$5,$6,$7,$8)",
            [fechaRes,nroRes,idUser,iddoctor,client,email,telefono,estado]
        );
        console.log(resp)
        return res.status(200).send({
            message: "Reservado"
        });
    } catch (error) {
       console.log(error);
       return res.status(500).send({
           message: "Error",
           error
       }); 
    }
}

export const getReservas = async(req: Request, res: Response) => {
    try {
        const username = req.query.username as string;
        const idUser = await verify.getUserId(username);
        return res.status(200).send(
            await ConsultaMedica.findAll({
                attributes: ["fecha","nroreserva","client","email","telefono"],
                where: {iduser: idUser}
            })
        );
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error",
            error
        });
    }
}

