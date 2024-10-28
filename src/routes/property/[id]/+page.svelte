<script lang="ts">
	import { PropertyPage, Button } from '$components';
	import type { PageData } from './$types';
	import { Search, Send } from 'lucide-svelte';
	import  { filtPropContInte }  from '$lib/functions/filContacts';
	import { CardContact } from '$components';
	import { sendWA } from '$lib/functions/sendWatsApp';
	import type { Contact, Binnacles } from '$lib/types'; 

	export let data: PageData;

	let isLoading = false;
	let publicUrl = "";
	let contCheck: Contact[] = [];
	let showBtn = true;
	let contInterested = "";
	let msgToShow = "Contactos Les Puede Interesar Esta Propiedad";
	let contInterest: Contact[] = [];
	let toShow = false;
	let show__contacts = false;
	let mensaje = "";
	let sig = 0;
	let poroShowTo =["Por_Enviar", "Ya_Se_Envió", "Posobles_Interesados" ];
	let contToRender: Contact[] = [];
	let conInt: Contact[] = [];
	// let contInitial: Contact[] = [];

	$: currBinnList = data.currBinnList as Binnacles[];
	$: contFalt = contIntToSend - sig;
	$: contIntToSend = contCheck.length;
	$: property = data.property;
	$: color = data.color;
	$: contactsFiltered = contToRender as Contact[];
	$: fbContacts = data.fbContacts as Contact[];

	type ContactOption = "Posobles_Interesados" | "Por_Enviar" | "Ya_Se_Envió";

	function urtPublic () {
		publicUrl = (data.property.public_url).replace('easybroker.com/mx/listings', 'matchhome.net/property')
	}
	urtPublic();

		function listToRender() {				// Opción propuesta por Cursor	
    contCheck = [];
    showBtn = true;
    contInterest = filtPropContInte(property, fbContacts);

    const options: Record<ContactOption, () => Contact[]> = {
        "Posobles_Interesados": () => {
            msgToShow = "Contactos Les Puede Interesar Esta Propiedad";
            return contInterest;
        },
        "Por_Enviar": () => {
            msgToShow = "Pendiente Para Enviar Esta Propiedad";
            const sentTelephones = new Set(currBinnList
                .filter(item => item.comment === property.nameProperty)
                .map(item => item.to));
            return contInterest.filter(doc => !sentTelephones.has(doc.telephon));
        },
        "Ya_Se_Envió": () => {
					if (contInterest.length === 0) {
            msgToShow = "Ya se les envió esta propiedad";
					} else {
            msgToShow = "ya se les envió esta propiedad";
					}
            const sentTelephones = new Set(currBinnList
                .filter(item => item.comment === property.nameProperty)
                .map(item => item.to));
            return fbContacts.filter(cont => sentTelephones.has(cont.telephon));
        }
    };
    contToRender = options[contInterested as ContactOption]();
};

		function sendProperty(){
			console.log("enviaste esta propiedad por WhatsApp");
			// sendWA()
		}
	
	function sendWhatsApp(){
		// console.log("enviaste esta propiedad por WhatsApp");
		sendWA()
	}

	function handleFindContacts() {
		conInt = findContacts();
		show__contacts = true;
		contInterested = "Por_Enviar"
	}

	function findContacts(){
		contToRender = filtPropContInte(property, fbContacts);
		return contToRender; // Devuelve el valor de contToRender
	}

	function selectAll(e: Event) {
		const target = e.target as HTMLInputElement;
		if (target.checked) {
			contCheck = [...contactsFiltered];
		} else {
			contCheck = [];
		}
	};
		
</script>

		<PropertyPage
			 	title = {property.title}
				{color}
				image = {property.property_images.length > 0 ? property.property_images[0].url : undefined}
				id = {property.public_id}
				areas = {
				property.construction_size ? `Construcción ${property.construction_size} m²
				 · Terreno ${property.lot_size} m²` : `Terreno: ${property.lot_size} m²`
				}

				features = {
				property.property_type !== "Terreno" ? 
				`${property.bedrooms} habitaciones · ${property.bathrooms} baños · ${property.parking_spaces} estacionamientos` : ""}

				prcice = {property.operations[0].formatted_amount
				}
				>
				
				<p class="meta" slot="meta">
					<span class="date">Alta el : {new Date(property.created_at).toLocaleDateString('en', {dateStyle: 'medium'})}
				</p>

			{#if !show__contacts}

				<a href={publicUrl} target="_blank">Ver en MatchHome.net</a>
						
					<div class="credits">
						<p class="date">
							{new Date(property.created_at).toLocaleDateString('en', {
								dateStyle: 'medium'
							})}
						</p>
						<span class="artists">
							{property.tags.length} Etiqueta{property.tags.length > 1 ? 's' : ''}: {property.tags.join(', ')}
						</span>
						<p>{property.description}</p>

						<div class="button_select">
							<Button
								element="button"
								variant="outline"
								disabled={isLoading}
								on:click={handleFindContacts}>
								Buscar Interesados <Search color=var(--accent-color) size="18"/>
							</Button>
						
							<Button
								element="button"
								variant="outline"
								disabled={isLoading}
								on:click={sendWhatsApp}>
								Enviar WhatsApp <Send color=var(--accent-color) size="18"/>
							</Button>
						</div>
					</div>

			{/if}

			<!-- Muestra el formulario para enviar el mensaje -->
			{#if show__contacts}
				<div class="send__container">

					<div class="mainContainer send__container">
						
						
						<div class="sect__Title">					
							{#if contactsFiltered.length === 0 && !show__contacts}
								<h4>No hay contactos para enviar</h4>
							{:else }
								<h4>{contactsFiltered.length === 0 ? "Ya se le envió a todos los que le pueda interesar esta propiedad" : `A ${contactsFiltered.length} ${msgToShow}`}</h4>
							{/if}					

							<div class="opti__cont">
								{#each poroShowTo as list}
										<label>
											<input
											type="radio"
												bind:group={contInterested}
												value={list}
												on:change={listToRender}>
											{list.replaceAll("_", "  ")}
										</label>
								{/each}
							</div>
						</div>
					</div>

					<div class="sel__msg">
						<textarea class="textarea__msg" bind:value={mensaje} placeholder="Escribe el mensaje a enviar"/>
				</div>
				
					<!-- Muestra los contactos a los que le puede interesar la propiedad -->
					<div class="btn__send">
						{#if showBtn}
							{#if contCheck.length ===0}
								<label>
									<input 
										type="checkbox" 
										on:change={selectAll}
										checked={contCheck.length === contactsFiltered.length}
									/> 
									Seleccionar todos
								</label>
							{:else}
								<Button
									element="button"
								variant="solid"
								on:click={sendProperty}>{`Total para enviar ${contIntToSend}, faltan ${contFalt}`}</Button>
							{/if}
						{/if}
					</div>

					<div class="cards__container">
						{#each contactsFiltered as contact (contact.telephon)}
							<div class="card__container">
								<input
									class="input__container"
									type="checkbox"
									checked={contCheck.some(c => c.telephon === contact.telephon)}
									on:change={(e) => {
										if (e.currentTarget.checked) {
											contCheck = [...contCheck, contact];
										} else {
											contCheck = contCheck.filter(c => c.telephon !== contact.telephon);
										}
									}}
								/>
								<CardContact {contact} />
							</div>
						{/each}       
					</div>  

				</div>
			{/if}
				
		</PropertyPage>	
		
	<style lang="scss">
		// @use 'sass:math';
		// @function toRem($value) {
		// @return math.div($value, 16) * 1rem;
		// }

		// Advertencia: Selector CSS no utilizado ".meta span.tracks-count"
		.meta {
			font-size: toRem(13);
			font-weight: 600;
			// span {
			// 	margin-right: 5px;
			// 	&.tracks-count {
			// 		font-weight: 400;
			// 		margin: 0 0 0 5px;
			// 		color: var(--light-gray);
			// 	}
			// }
		}

		.credits {
			margin-top: 40px;
			p {
				color: var(--light-gray);
				margin: 0;
				font-size: toRem(11);
				&.date {
					font-size: toRem(13);
				}
			}
		}

		.button_select {
			padding: 12px;
		}

		.cards__container {
			display: flex;
			flex-direction: row;
			justify-content: center;
			flex-wrap: wrap;
			padding: 20px;
			gap: 6px;
		}

		.card__container { 
      display: flex; 
      flex-direction: column; 
      justify-content: center;
      align-items: center;  
      padding: 0px;
			position: relative;
    }
	

		.input__container {
			position: absolute;
			top: 8px;
			left: 8px;
		}
		
		.send__container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 20px;
		}

		.opti__cont {
			display: flex;
			flex-direction: row;
			justify-content: center;
			gap: 25px;
		}

		.sel__msg {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		textarea {
			width: 60%;
			height: 60px;
			color: var(--text-color);
			border-radius: 5px;
			border: 1px solid var(--medium-gray);
			background-color: var(--dark-gray);
			padding: 10px;
			font-size: toRem(13);
		}

		textarea::placeholder {
			color: var(--medium-gray);
		}
		textarea:focus {
			outline: none;
			background-color: var(--medium-gray);

		}
		textarea:hover {
			background-color: var(--medium-gray);
		}

		.textarea__msg::-webkit-scrollbar {
			width: 6px;
			border: none;
		}

		.textarea__msg::-webkit-scrollbar-button:start:decrement,
		.textarea__msg::-webkit-scrollbar-button:end:increment {
			height: 10px;
		}
		.textarea__msg::-webkit-scrollbar-track{background: var(--dark-gray);}
		.textarea__msg::-webkit-scrollbar-thumb{background: var(--accent-color);}

		.btn__send {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			padding: 10px;
			border-radius: 5px;
			gap: 50px;
		}

	</style>
 

