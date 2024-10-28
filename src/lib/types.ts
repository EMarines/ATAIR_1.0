export interface Contact {
  // Define las propiedades de Contact aquí
  // Por ejemplo:
  nombre: string;
  typeContact: string;  // Tipo de contacto
  name: string;
  lastname: string;
  lastContact: string;
  telephon: string;
  email: string;
  selecMC: string;      // Modo de contacto
  propCont: string;     // Propiedad de contacto
  comContact: string;   // Comentarios
  rangeProp: string;    // Rango buscado
  contMode: string;     // Modo de contacto
  budget: string;       // Presupuesto tope
  numBeds: string;
  numBaths: string;
  halfBathroom: string;
  numParkssting: string;
  modePay: string;      // Modo de pago
  selecTP: string;      // Tipo de propiedad
  contactType: string;  // Modo de contacto
  contactStage: string; // Etapa del cliente
  createdAt: string;    // Fecha de alta
  locaProperty?: string [], // Localicacion buscada
  tagsProperty?: string [], // Etiquetas
  sendedProperties?: string [],  // Propiedades enviadas,
  id: string;
};
export interface Binnacles {
  comment: string;
  date: string;
  action: string;
  to: string;
  id: string;
} 
  // ... otras propiedades
// }
