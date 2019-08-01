export class Integrante {
  id: number;
  nombre: string;
  apellido: string;
  cargo: Date;
  domicilio: Date;
  domicilioVisible: boolean;
  pisoDeptoOficina: string;
  telefono: string;
  fax: string;
  telefonoFaxVisible: boolean;
  email: string;
  funcion: string;
  tipoFuncion: string; //Normal - Subrogante - Interino - Conjuez
  borrado: boolean;
}