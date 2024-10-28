



// import { json, error } from '@sveltejs/kit';
// import type { RequestHandler } from './[...path]/$types';
// import { EASYBORKER_APP_CLIENT_ID, BASE_URL } from '$env/static/private'

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     'X-Authorization': EASYBORKER_APP_CLIENT_ID
//   }
// };

	
// export const GET: RequestHandler = async ({ fetch, params, url }) => {

// 	// const response = await fetch('https://api.easybroker.com/v1/properties?page=1&limit=5', options);
// 	const response = await fetch(`${BASE_URL}/${params.path}${url.search}`, options);
// 	if (response.ok) {
// 		const properties = await response.json();

// 		return json(properties);

// 	}

// 	throw error(response.status, response.statusText);
// };
