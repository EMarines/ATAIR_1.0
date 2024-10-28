<script lang="ts">  
	// import { PropertyPage, Button } from '$components'
	import type { PageData } from './$types';
	// import { Search, Send } from 'lucide-svelte';
	// import { sendWA } from '$lib/functions/sendWA.ts'

	export let data: PageData;

  $: console.log(data, "data desde layout server");

	// let isLoading = false;

	// 		let publicUrl = "";
	// let systStatus = "";

	// $: contact = data.contacto;
	// $: color = data.color;


	// function urtPublic () {
	// 	publicUrl = (data.property.public_url).replace('easybroker.com/mx/listings', 'matchhome.net/property')
	// }
	// urtPublic();

	// function findContacts(){
	// 	systStatus = "Send_Prop"
	// 	sendWA()
	// }	


</script>

