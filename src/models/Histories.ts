import { DataTypes,Model } from "sequelize";
import sequelize from "../utils/sequelize";
import { IHistories } from "../interfaces/IHistories";

class Histories extends Model<IHistories> {}

Histories.init(
    {
        id: {
            key: "id",
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            autoIncrementIdentity: true
        },
        details: {
            key: "details",
            type: DataTypes.STRING(255)
        },
        fecha: {
            key: "fecha",
            type: DataTypes.DATE
        },
        idReserva: {
            key: "idreserva",
            type: DataTypes.INTEGER,
            references: {key: "id", model: "ConsultaMedica"}
        }
    },
    {
        sequelize,
        tableName: "histories",
        timestamps: false
    }
);

export default Histories;