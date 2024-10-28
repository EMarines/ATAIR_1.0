<script lang="ts">
	import type { PageData } from './$types';
	import { json } from '@sveltejs/kit';

	export let data: PageData

	console.log(data.newProperties, "desde page.svelte")



</script>
<h1>Home</h1>
<!--  
<h1>Bienvenido {data.first_name}</h1>

<h3>Gracias por permitirnos ayudarte a buscar tu nuevo hogar, actualmente tenemos un total de { data.newProperties} Propiedades en Inventario y estamos atendiendo a de clientes registrados</h3> --> 

<style lang="scss">

	

</style>