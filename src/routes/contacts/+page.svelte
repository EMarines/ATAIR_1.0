<script lang="ts">
	import { page } from "$app/stores";
	import { CardContact, Button } from "$components";
	import type { PageData } from "./$types";
	import { getContacts } from '$lib/firebase/fbContacts.js'

	// $: contacts = dbContacts;

	export let data: PageData;
	// $: console.log(data, "desde contacts/page*-*");
	// $: con = dat
	$: contacts = data.contacts.content

	// $: contacts = data;
	// console.log(contacts);
	let currentPage = 1;
	$: currPage = currentPage;
	let isLoading = false;

	async function loadMoreItems() {
		if(!contacts) {
			return
		}
		isLoading = true
		let toFetch = `/api/easybroker/contact_requests?limit=18&page=${currPage}`
		const res = await fetch(toFetch);
		
		if(res.ok) {
			const nextProperties = await res.json()
			contacts = nextProperties.content
		} else {
			alert("Error: " + res.statusText)
		}
		isLoading = false
	}
	function nextPage() {
		currentPage = currentPage + 1
		loadMoreItems()
	}
	function previousPage() {
		currentPage = currentPage - 1
		loadMoreItems()
	}
</script>

<h4>Ingresaste como {$page.data.first_name}</h4>

 <h1>Total de Contactos Registrados en FireBase {contacts?.length}</h1>

 <div class="card_container">
   {#each contacts as contact}
     <div class="grid_items">
 			<a href="/contact/{contact.id}">
 				<CardContact {contact}/>
 			</a>       
     </div>
 		{/each}
 	</div>

 	<div class="pagination">
 		<Button 
 			element="button"
 				variant="outline"
 				disabled={isLoading}
 				on:click={previousPage}
 			>
 			← Previous Page <span class="visually-hidden">Items</span>
 		</Button>
 		<Button
 		element="button"
 				variant="outline"
 				disabled={isLoading}
 				on:click={nextPage}
 			>
 				Next Page  → <span class="visually-hidden">Items</span>
 		</Button>
</div>

<!-- <style lang="scss">
	.content-row {
		margin-bottom: 40px;
		.content-row-header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 20px;
			.section-title {
				font-size: functions.toRem(22);
				font-weight: 600;
				margin: 0;
			}
		}
	}
  .card_container {      
    display: flex;
    flex-wrap: wrap;
    width: 90%;
  }

	.pagination {
		display: flex;
		justify-content: center;
    width: 90%;
		gap: 10px;
		margin-top: 20px;
	}

</style> -->

