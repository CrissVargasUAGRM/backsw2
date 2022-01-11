import { DataTypes,Model } from "sequelize";
import sequelize from "../utils/sequelize";
import { IUser } from "../interfaces/IUser";

class User extends Model<IUser> {}

User.init(
    {
        id: {
            key: "id",
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            autoIncrementIdentity: true
        },
        username: {
            key: "username",
            type: DataTypes.STRING(255)
        },
        namecomplete: {
            key: "namecomplete",
            type: DataTypes.STRING(255)
        },
        email: {
            key: "email",
            type: DataTypes.STRING(255)
        },
        password: {
            key: "password",
            type: DataTypes.STRING(255)
        },
        ci: {
            key: "ci",
            type: DataTypes.STRING(255)
        },
        idrol: {
            key: "idrol",
            type: DataTypes.INTEGER,
            references: {key: "id", model: "Rol"}
        }
    },
    {
        sequelize,
        tableName: "users",
        timestamps: false
    }
);

export default User;