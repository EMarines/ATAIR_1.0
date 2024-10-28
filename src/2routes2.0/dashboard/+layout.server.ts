import type { LayoutServerLoad } from "./$types";
import { EASYBORKER_APP_CLIENT_ID } from '$env/static/private'
import { redirect } from "@sveltejs/kit";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-Authorization': EASYBORKER_APP_CLIENT_ID
  }
};

export const load: LayoutServerLoad = async ({ cookies, fetch }) => {
  const accessToken = cookies.get('state')
  if(accessToken) {
    const response = await fetch('https://api.easybroker.com/v1/properties?page=1&limit=2', options)
    const res = await fetch('https://api.easybroker.com/v1/contact_requests?page=1&limit=2', options)
    
    const properties = await response.json()
    const contacts = await res.json()
    const userDisplay = cookies.get('first_name')
    const first_name = cookies.get('first_name')
    const id = cookies.get("userid")
    const role = cookies.get("role")

    if(response.status === 200 && res.status === 200) {
      
        return { 
          properties,
          contacts,
          userDisplay,
          first_name,
          id,
          role
        }
      } else {
        return {
          properties: null,
          contacts: null,
          userDisplay: null,
          first_name: null,
          id: null,
          role: null
        }
      }
    } 
    else {
      throw redirect(307, '/api/auth/login')
    }
}
    
