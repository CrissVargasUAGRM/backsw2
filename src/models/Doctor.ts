import { Model,DataTypes } from "sequelize";
import sequelize from "../utils/sequelize";
import { IDoctor } from "../interfaces/IDoctor";

class Doctor extends Model<IDoctor> {}

Doctor.init(
    {
        id: {
            key: "id",
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            autoIncrementIdentity: true
        },
        nombre: {
            key: "nombre",
            type: DataTypes.STRING(255)
        },
        matricula: {
            key: "matricula",
            type: DataTypes.STRING(255)
        },
        especialidad: {
            key: "especialidad",
            type: DataTypes.STRING(255)
        },
        idclinic: {
            key: "idclinic",
            type: DataTypes.INTEGER,
            references: {key: "id", model: "Clinic"}
        },
        telefono: {
            key: "telefono",
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        tableName: "doctors",
        timestamps: false
    }
);

export default Doctor;