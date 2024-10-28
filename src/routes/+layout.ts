import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data }) => {

	if (data.role !== "Administrator") {
		throw redirect(307, '/dashboard');
	}
	
	return { ...data };  // Retorna los datos existentes
};
