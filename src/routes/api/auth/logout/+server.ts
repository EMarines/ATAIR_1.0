import { json, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = ({ cookies, request }) => {
	cookies.delete('state', { path: '/' });
	cookies.delete('easybroker_challenge', { path: '/' });
	cookies.delete('first_name', { path: '/' });
	cookies.delete('useremail', { path: '/' });
	cookies.delete('userid', { path: '/' });
	cookies.delete('username', { path: '/' });
	cookies.delete('role', { path: '/' });

	if (request.headers.get('accept') === 'application/json') {
		return json({ success: true });
	}
	throw redirect(303, '/');
};