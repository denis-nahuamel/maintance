export interface TecnicoInterface {
  dni: string;
  nombre: string;
  apellidos: string;
  telefono: string;
  correo: string;
  activo:number;
  contra: string;
}
export interface ITecnico extends TecnicoInterface {
     contra: string;
    equiposAsignados: string;
}
