import { Model,DataTypes } from "sequelize";
import { IConsultaMedica } from "../interfaces/IConsultaMedica";
import sequelize from "../utils/sequelize";

class ConsultaMedica extends Model<IConsultaMedica> {}

ConsultaMedica.init(
    {
        id: {
            key: "id",
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            autoIncrementIdentity: true
        },
        fecha: {
            key: "fecha",
            type: DataTypes.DATE
        },
        nroReserva: {
            key: "nroReserva",
            type: DataTypes.INTEGER
        },
        iduser: {
            key: "iduser",
            type: DataTypes.INTEGER,
            references: {key: "id", model: "User"}
        },
        iddoctor: {
            key: "iddoctor",
            type: DataTypes.INTEGER,
            references: {key: "id", model: "Doctor"}
        },
        client: {
            key: "client",
            type: DataTypes.STRING(255)
        },
        email: {
            key: "email",
            type: DataTypes.STRING(255)
        },
        telefono: {
            key: "telefono",
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        tableName: "consultamedica",
        timestamps: false
    }
);

export default ConsultaMedica;