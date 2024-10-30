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

export interface Property {

    public_id: string,
    title: string,
    created_at: string,
    updated_at: string,
    url: string,
    description: string,
    property_type: string,
    bedrooms: number,
    bathrooms: number,
    half_bathrooms: number,
    parking_spaces: number,
    lot_size: number,
    construction_size: number,
    expenses: string,
    lot_length: number,
    lot_width: number,
    floors: number,
    floor: number,
    age: string,
    agency_id: string,
    agent_id: string,
    ad_type: string,
    location: {
      region: string,
      city: string,
      city_area: string,
      street: string,
      postal_code: string,
      latitude: number,
      longitude: number,
      show_exact_location: boolean
    },
    operations: [
      {
        type: string,
        amount: number,
        formatted_amount: string,
        currency: string,
        unit: string
      },
      {
        type: string,
        amount: number,
        formated_amount: string,
        currency: string,
        period: string
      }
    ],
    features: [
      {
        id: number,
        name: string,
        name_es: string,
        name_pt: string,
        country_id: number
      }
    ],
    tags: [
      string,
      string
    ],
    images: [
      {
        url: string,
        title: string
      }
    ],
    videos: [
      string
    ],
    virtual_tour: string
  }
  // ... otras propiedades
// }
