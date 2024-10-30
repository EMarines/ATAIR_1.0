const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado' ];
const mesAnyo = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ];
let fecha ;
let saludoHora;
let dia, mes, ano;
// let mes;



// Convertir fecha en timestamp a formato legible SIN hora

      /**
 * @param {string | number | Date} fecha
 */
      export function formatDate(fecha: string | number | Date){
        if(typeof fecha == "number"){
          const factZonaHorario= 64800000  // Diferencia de zona GTM a esta zona(18 horas  a milisegundos)
          fecha = new Date(fecha + factZonaHorario); 
          dia = fecha.getDate();
          if(dia < 10){
            dia = '0' + dia
          }
          mes = mesAnyo[fecha.getMonth()];
          ano = fecha.getFullYear();
        } else {
          fecha = new Date(fecha);
          dia = fecha.getDate()+1;
          if(dia < 10){
            dia = '0' + dia
          }
          mes = mesAnyo[fecha.getMonth()];
          ano = fecha.getFullYear();
        }
          return (`${dia}/${mes}/${ano}`)
      }

// Convertir HORA en timestamp   
      export function formatHour(fecha: string | number | Date){
          fecha = new Date(+fecha)
          let minutes: number = fecha.getMinutes();
            if(minutes < 10){
              minutes = `0${minutes}` as unknown as number
            }
          const minutesStr = minutes < 10 ? `0${minutes}` : minutes.toString();
          let hora = fecha.getHours();
          if (hora > 12){
            hora = hora - 12
          }
          
          if(hora < 10){
              hora = `0${hora}` as unknown as number
            }
            
          let dia = fecha.getDate();
          if(dia < 10)
            dia = `0${dia}` as unknown as number

          return (`${hora}:${minutesStr}`)
       }
      

//  Extraer dia de la semana
        /**
 * @param {string | number | Date} fecha
 */
        export function formatDay(fecha: string | number | Date){
          fecha = new Date(+fecha)
            dia = diaSemana[fecha.getDay()];

          return (`${dia}-`)
          };

// Definir si es dia, tarde o noche
        export function diaTarde(){
          fecha = new Date()
          const hora = fecha.getHours()
          if(hora < 12){
            saludoHora = "Buenos días. "
          } else if (hora < 21){
            saludoHora = "Buenas tardes. "
          } else {
            saludoHora = "Buenas noches. "
          }
          return saludoHora
        }

  // Cambiar de formato de fecha de tipo xx/xxx/xxxx a timeStamp
        /**
 * @param {string | number | Date} fecha
 */
        export function dateToTimeStamp(fecha: string | number | Date){
          fecha = new Date(fecha).getTime()
          return fecha
        }


// Copiar al portapapeles

  // export function copyToPaste(text) {
  //   console.log(text)
  //  text.select();
  //   document.execCommand("copy")
    // // @ts-ignore
    // navigator.clipboard.readText(text)
    // .then(() => {
    //     console.log('Text copied to clipboard: ', text);
    // })
    // .catch(err => {
    //     console.error('Error in copying text: ', err);
    // });
  // };

        


        
