<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData



</script>

<h4>Dashboard</h4>

<h1>Bienvenido {data.first_name}</h1>

<h3>Cada día temenmos que ser mejores, acualmente tenemos <strong>{ data.properties.pagination.total}</strong>  Propiedades en Inventario y estamos atendiendo a <strong>{ data.contacts.pagination.total}</strong> de clientes registrados</h3>


