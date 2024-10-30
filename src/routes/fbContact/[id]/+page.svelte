<script lang="ts">
	import type { Contact } from '$lib/types';
	import { ContactPage } from '$components';
  export let data;

	$: contact = data.contact as Contact;

	$: contactPageProps = {
		color: null,
		image: undefined,
		title: `${contact.name} ${contact.lastname}`,
		id: undefined,
		areas: undefined,
		features: undefined,
		budget: getBudget()
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
  // const { contact: Contact  } = data;
</script>

{#if contact}
  <div>

		<ContactPage {...contactPageProps} />
    <!-- otros campos del contacto -->
  </div>
{:else}
  <p>Contacto no encontrado</p>
{/if}