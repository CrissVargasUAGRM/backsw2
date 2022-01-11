export interface IConsultaMedica {
    id?: number,
    fecha: Date,
    nroReserva?: number,
    iduser?: number,
    iddoctor: number,
    client: string,
    email: string,
    telefono: number,
    estado?: string
}