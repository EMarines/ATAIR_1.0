// import type { Actions } from './$types';
// import { db } from '$lib/firebase/firebase.js';
// import { collection, addDoc } from 'firebase/firestore';

// export const actions = {
// 	default: async (event) => {
// 		try {
// 			const data = await event.request.formData();
// 			const contact = Object.fromEntries(data);
			
// 			const contToAdd = collection(db, "contacts");
// 			await addDoc(contToAdd, contact);
			
// 			return { success: true };
// 		} catch (error) {
// 			console.error('Error:', error);
// 			return {
// 				success: false,
// 				error: error instanceof Error ? error.message : 'Error desconocido'
// 			};
// 		}
// 	}
// } satisfies Actions; 