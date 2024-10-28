<script lang="ts">
  import { getProperties } from '$lib/firebase/fbProperties';
  
	let properties: Property[]=[]

  
	export async function load() {
		const fetchedProperties = await getProperties();
		console.log(fetchedProperties);
    return { props: { properties: fetchedProperties } }; 
	};

  </script>
  
  <h1>fbProperties</h1>
  
  {#each properties as property , i}
    <h1>{i+1} {property.nameProperty} </h1>
    <p>{property.areaBuilding} m² de contstrucción y {property.areaTotal} m² de terreno</p>
    <p>{property.description}</p>
  {/each}
