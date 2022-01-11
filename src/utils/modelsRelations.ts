import User from "../models/User";
import Rol from "../models/Rol";
import Histories from "../models/Histories";
import Doctor from "../models/Doctor";
import DataSensor from "../models/DataSensor";
import ConsultaMedica from "../models/ConsultaMedica";
import Clinic from "../models/Clinic";

User.hasOne(Rol, { foreignKey: "idrol", as: "rol" });
Rol.belongsTo(User, {foreignKey: "idrol", as: "user"});

User.hasMany(DataSensor, {foreignKey: "iduser", as: "datasensors"});
DataSensor.belongsTo(User, {foreignKey: "iduser", as: "user"});

User.hasMany(ConsultaMedica, {foreignKey: "iduser", as: "consultasmedicas"});
ConsultaMedica.belongsTo(User, {foreignKey: "iduser", as: "user"});

ConsultaMedica.hasOne(Histories, {foreignKey: "idReserva", as: "historie"});
Histories.belongsTo(ConsultaMedica, {foreignKey: "idReserva", as: "consultamedica"});

ConsultaMedica.hasOne(Doctor, {foreignKey: "iddoctor", as: "doctor"});
Doctor.belongsTo(ConsultaMedica, {foreignKey: "iddoctor", as: "consultamedica"});

Clinic.hasMany(Doctor, {foreignKey: "idclinic", as: "doctores"});
Doctor.belongsTo(Clinic, {foreignKey: "idclinic", as: "clinica"});

export {
    User,
    Rol,
    Histories,
    Doctor,
    DataSensor,
    ConsultaMedica,
    Clinic
}