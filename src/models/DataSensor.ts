import { DataTypes,Model } from "sequelize";
import sequelize from "../utils/sequelize";
import { IDataSensor } from "../interfaces/IDataSensor";

class DataSensor extends Model<IDataSensor> {}

DataSensor.init(
    {
        id: {
            key: "id",
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            autoIncrementIdentity: true
        },
        valor: {
            key: "valor",
            type: DataTypes.INTEGER,
        },
        fecha: {
            key: "fecha",
            type: DataTypes.DATE
        },
        iduser: {
            key: "iduser",
            type: DataTypes.INTEGER,
            references: {key: "id", model: "User"}
        }
    },
    {
        sequelize,
        tableName: "datasensors",
        timestamps: false
    }
);

export default DataSensor;