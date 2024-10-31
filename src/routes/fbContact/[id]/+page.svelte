<script lang="ts">
	import type { Contact, Binnacles } from '$lib/types';
	import { ContactPage } from '$components';
	import { Edit, Trash } from 'lucide-svelte';
	import { binnacle } from '$lib/firebase/binnacle.js';
	import { sortBinnacle } from '$lib/functions/sort';



  export let data;
	let bitacoras: Binnacles[];
	let color = null;
	$: contact = data.contact as Contact;
	// $: bitacora = bitacoras as Binnacles;

	$: contactPageProps = {
		color: color,
		title: `${contact.name} ${contact?.lastname}`,
		createdAt: contact.createdAt,
		contactStage: contact.contactStage,
		comContact: contact.comContact,
		budget: getBudget(),
		selecTP: contact.selecTP,
		telephon: contact.telephon,
	};

	function getBudget() {
		if(contact.budget) {
			return contact.budget;
		} else if (contact.rangeProp) {
			return contact.rangeProp;
		} else {
			return "Undefined";
		}
	}
 function trash(){
	console.log('trash');
 }
 
 function edit() {
		console.log('edit');
	}
	
	$: if (contact) {
		getBinnacle();
	}

	function getBinnacle() {
		bitacoras = binnacle.filter(binn => binn.to === contact.telephon) as Binnacles[];
		sortBinnacle(bitacoras);
	}


</script>

  

		<ContactPage {...contactPageProps} >
		

		<div class="iconContainer">
			<div class="iconos">
				<button class="icono" on:click={edit}>
					<Edit focusable="false" aria-hidden/>
				</button>
				<button class="icono trash" on:click={trash}>
					<Trash focusable="false" aria-hidden/>
				</button>
			</div>
		</div>

		<div class="binnacle__container textarea__msg">
			<h6>Binnacle</h6>
			{#each bitacoras as binn}
				<div class="parag__binnacle">
					<div class="binn__header">
						<p>{binn.date ? new Date(binn.date).toLocaleDateString('es', {dateStyle: 'medium'}) : 'No disponible'}</p>						
						<p>{binn.action}</p>
					</div>
					<p>{binn.comment}</p>
					<!-- <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut sint tempore veniam nostrum, debitis deleniti vero provident! Consequatur explicabo culpa non ipsam laudantium deleniti sequi? Laboriosam libero magnam expedita aliquam tenetur quam, tempora doloremque sint pariatur? Possimus voluptates autem dignissimos tempore pariatur nam et sed quas accusamus laboriosam mollitia dolorem unde minus id, temporibus ad nostrum numquam dolores. Delectus ducimus officiis magni nobis dolore expedita adipisci autem maiores, atque quos aliquid corporis tempora possimus et voluptatem. Minus odit illo exercitationem quam alias illum, et repellat voluptate itaque tempora quaerat, consectetur quas. Dolore, eius eveniet quam tempore aut pariatur et odio!</p> -->
				</div>
				{/each}

		</div>
		
		<span>
			{contact.tagsProperty?.length ?? 0} Etiqueta{(contact.tagsProperty?.length ?? 0) > 1 ? 's' : ''}: {contact.tagsProperty?.join(', ') ?? ''}
		</span>
		<span>
			{contact.locaProperty?.length ?? 0} Ubicación{(contact.locaProperty?.length ?? 0) > 1 ? 'es' : ''}: {contact.locaProperty?.join(', ') ?? ''}
		</span>
    <!-- otros campos del contacto -->

</ContactPage>

<style lang="scss">

	.parag__binnacle {
		font-weight: 100;
		font-size: 1px;
		margin-bottom: functions.toRem(15);
		
	}

	.parag__binnacle p {
		font-size: functions.toRem(15);
		margin: 0;
		padding: 0;
		line-height: 1.5;
	}

	
	.iconContainer {
		position: relative;
		align-items: center;
		width: functions.toRem(60);
		height: functions.toRem(30);
	}

	.iconos {
		display: flex;
		position: absolute;
		top: -60px;
		right: 0px;
	}

	.binnacle__container {
		// border: 1px solid red;
		padding: functions.toRem(10);
		width: functions.toRem(350);
		height: functions.toRem(450);
		position: absolute;
		top: functions.toRem(-330);
		left: functions.toRem(500);
		overflow-y: auto;
	}

	.binn__header {
		display: flex;
		justify-content: space-evenly;
		background-color: var(--sidebar-color);
		opacity: 0.15;
		border-radius: functions.toRem(8);
	}

	


</style>