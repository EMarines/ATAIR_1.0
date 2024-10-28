import type { Contact } from '$lib/types';
// import type { Contact } from 'lucide-svelte';
import { mosRange } from './rangValue'

const dateTo = new Date().getTime();

interface PropertyFilter {
  selectTP: string;
  beds: string;
  bathroom: string;
  park: string;
  price: string;
  locaProperty?: string[];
  tagsProperty?: string[];
  createdAt: number;
}
// let cont: Contact[] = [];

export function filtPropContInte(property: PropertyFilter, contacts: Contact[]){  

  let conInt = contacts;
  // busqueda de Hoy hasta 1/ene/23
        conInt = conInt.filter((cont: Contact) => Number(cont.createdAt) <= dateTo && Number(cont.createdAt) >= 1672596060000);   
      
      // Tipo de contacto    
        conInt = conInt.filter((cont: Contact) => cont.typeContact === "Comprador");        
        
      // Tipo de propiedad
        conInt = conInt.filter((cont: Contact) => cont.selecTP === property.selectTP);
      
      // Numero de recámaras   
        if (Number(property.beds) > 0) {
          conInt = conInt.filter((cont: Contact) => Number(cont.numBeds) <= Number(property.beds));
        };
        
      // Numero de baños
        if (Number(property.bathroom) > 0) {
            conInt = conInt.filter((cont: Contact) => Number(cont.numBaths) <= Number(property.bathroom));
        };
      // Estacionamientos
        if (Number(property.park) > 0) {
          conInt = conInt.filter((cont: Contact) => Number(cont.numParkssting) <= Number(property.park));
        };

      // Presupuesto
          conInt = conInt.filter((cont: Contact) => {
          if (cont.budget) {
            return (Number(cont.budget) * 0.7) <= Number(property.price) && (Number(cont.budget) * 1.1) >= Number(property.price);
          } else {
            return cont.rangeProp === mosRange(Number(property.price));
          }
        });

      // Filtra por Ubicación
        conInt = conInt.filter((cont: Contact) => {
          if (cont.locaProperty && Array.isArray(cont.locaProperty) && property.locaProperty) {
            return property.locaProperty.some(loc => cont.locaProperty?.includes(loc));
          }
          return true;
        });
        
        // Filtra por Etiquetas
        conInt = conInt.filter((cont: Contact) => {
          if (cont.tagsProperty && Array.isArray(cont.tagsProperty) && cont.tagsProperty.length > 0 && property.tagsProperty) {
            return cont.tagsProperty.every(tag => property.tagsProperty!.includes(tag));
          }
          return true;
        });

      return conInt; 
    };






