import { DataTypes,Model } from "sequelize";
import sequelize from "../utils/sequelize";
import { IRol } from "../interfaces/IRol";

class Rol extends Model<IRol> {}

Rol.init(
    {
        id: {
            key: "id",
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            autoIncrementIdentity: true
        },
        rol: {
            key: "rol",
            type: DataTypes.STRING(255)
        }
    },
    {
        sequelize,
        tableName: "rols",
        timestamps: false
    }
);

export default Rol;