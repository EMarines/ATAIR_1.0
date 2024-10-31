// // import type { Actions } from './$types';

// // export const actions = {
// // 	default: async (event) => {
// //     const data = await event.request.formData();
// //     console.log(data, "data form server");
// // 		// TODO log the user in
// // 	}
// // } satisfies Actions;


// import type { Actions } from './$types';
// // import { db } from '$lib/firebase.js';
// // import { collection, addDoc, deleteDoc, getDoc, getDocs, doc, updateDoc, onSnapshot} from 'firebase/firestore';


// export const actions = {
//     default: async (event) => {
//         try {
//             const data = await event.request.formData();
// 						const contact = Object.fromEntries(data);
//             console.log(contact, "data form server");
// 						// const contToAdd = collection(db, "contacts")
// 						// await addDoc(contToAdd, contact);
            
//             // // Hacer la llamada a la API de EasyBroker
//             // const response = await fetch('URL_DE_TU_API_EASYBROKER', {
//             //     method: 'POST',
//             //     headers: {
//             //         'Content-Type': 'application/json',
//             //     },
//             //     body: JSON.stringify(Object.fromEntries(data))
//             // });

//             // if (!response.ok) {
//             //     throw new Error('Error en la respuesta de la API');
//             // }

//             // const responseData = await response.json();
//             // return { success: true, data: responseData };
            
//         } catch (error) {
//             console.error('Error:', error);
//             return { 
//                 success: false, 
//                 error: error instanceof Error ? error.message : 'Error desconocido'
//             };
//         }
//     }
// } satisfies Actions;