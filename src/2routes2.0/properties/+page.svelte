<script lang="ts">
import type { PageData } from "../$types";
import { CardProperty, Pagination } from "$components";

export let data: PageData

$: properties = data.properties
$: propertiesToPagination = data.properties
$: console.log((properties.pagination.next_page).replace('https://api.easybroker.com/v1/properties', '/properties/'), "propertiesToPagination");
let isLoading = false;

async function loadMoreItems() {

	console.log("estas dentro de la funcion");
	// if(!properties) {
	// 	console.log("properties no found");
	// 	return
	// }
	// // console.log(properties);
	// isLoading = true
	// // console.log(properties.pagination.next_page);
	const res = await fetch ((properties.pagination.next_page).replace('https://api.easybroker.com/v1/properties', '/properties/').url);
	console.log(await res, "next page");
	if(res.ok) {
		const resJson = await res.json()
		console.log(resJson);
		properties = {
			...resJson, items: [...properties.content, ...resJson.items]
		}
	} else {
		alert("Error: " + res.statusText)
	}
	isLoading = false
}

</script>

<h4>Ingresaste como {data.first_name}</h4>

<h1>Total de Propiedades en Inventario { data.properties.pagination.total}</h1>
<h1>Total de Contactos Comprando { data.contacts.pagination.total}</h1>

<div class="card_container">
  {#each properties.content as property}
    <div class="grid_items">
			<a href="/property/{property.public_id}">
				<CardProperty {property}/>{property.public_id}
			</a>       
    </div>
		{/each}
		<Pagination paginatedList={properties.pagination} on:loadmore={loadMoreItems} {isLoading}/>
		<!-- <Pagination paginatedList={playlists} on:loadmore={loadMoreItems} {isLoading} /> -->
</div>


<style lang="scss">
	// .content-row {
	// 	margin-bottom: 40px;
		// .content-row-header {
		// 	display: flex;
		// 	align-items: center;
		// 	justify-content: space-between;
		// 	margin-bottom: 20px;
			// .section-title {
			// 	font-size: functions.toRem(22);
			// 	font-weight: 600;
			// 	margin: 0;
			// }
		// }
	// }
  .card_container {      
    display: flex;
    flex-wrap: wrap;
    width: 90%;
  }

</style>