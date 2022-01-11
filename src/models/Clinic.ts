import { DataTypes,Model } from "sequelize";
import sequelize from "../utils/sequelize";
import { IClinic } from "../interfaces/IClinic";

class Clinic extends Model<IClinic> {}

Clinic.init(
    {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            autoIncrementIdentity: true,
        },
        nombre: {
            type: DataTypes.STRING(255),
        },
        direccion: {
            type: DataTypes.STRING(255),
        }
    },
    {
        tableName: "clinica",
        sequelize,
        timestamps: false
    }
);

export default Clinic;