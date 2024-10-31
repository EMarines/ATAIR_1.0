// Acomoda por orden decendente lista. "object" es la objeto a ordenar,
//  "toSort" es el elemento con el cual se va a ordenar

  
export function sortList(PropList){
   //  console.log("Estas en la funcion", toRender);
    PropList.sort((a, b) => {
        if(new Date(a.createdAt) < new Date(b.createdAt)){
           return 1;
        } else if (new Date(a.createdAt) > new Date(b.createdAt)){
           return -1;
        } else {
           return 0;
        }
     })
}

export function sortTodos(toRender){
    // console.log("Estas en la funcion", object);
    toRender.sort((/** @type {{ endTask: string | number | Date; }} */ a, /** @type {{ endTask: string | number | Date; }} */ b) => {
        if(new Date(a.endTask) < new Date(b.endTask)){
           return 1;
        } else if (new Date(a.endTask) > new Date(b.endTask)){
           return -1;
        } else {
           return 0;
        }
     })
}

export function sortBinnacle(toRender) {
   return toRender.sort((a, b) => {
       if(new Date(a.date) < new Date(b.date)){
          return 1;
       } else if (new Date(a.date) > new Date(b.date)){
          return -1;
       } else {
          return 0;
       }
    })
}