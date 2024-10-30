<script lang="ts">
  import { User } from 'lucide-svelte'
	import { capitalize } from "$lib/functions/capitalize"
  export let contact;

  const formatName = (text?: string) => {
    return text ? capitalize(text) : '';
  }

  // console.log(contact, "desde cardcontact");
</script>

<div class="card">
 
  <h4 class="truncate-1" title={`${formatName(contact?.name)} ${formatName(contact?.lastname)}`}>
    {formatName(contact?.name)} {formatName(contact?.lastname)}
  </h4>
  <p>{contact.telephon}</p>
	{#if contact.budget}
		<p>{contact.budget}</p>
	{:else if contact.rangeProp}
		<p >{contact.rangeProp}</p>
	{:else}
		<p>Sin Presupuesto</p>
	{/if}
	<p >{contact.createdAt}</p>
</div>


<style lang="scss">
	.card {
    width: 350px;
		background-color: var(--dark-gray);
		padding: 25px 10px 10px 25px;
		box-shadow: 0 0 40px rgba(0, 0, 0, 0.4);
		border-radius: 4px;
		transition: background 0.3s;
		&:hover {
			background-color: var(--medium-gray);
			// .cover-placeholder {
			// 	background-color: var(--dark-gray);
			// }
		}
    h4 {
			margin: 0 0 10px;
			font-size: functions.toRem(16);
			font-weight: 600;
			line-height: 1;
			// a {
			// 	text-decoration: none;
			// 	color: var(--text-color);
			// 	&:focus-visible {
			// 		outline: none;
			// 		&:after {
			// 			outline: 2px solid var(--accent-color);
			// 		}
			// 	}
			// 	&:after {
			// 		content: '';
			// 		position: absolute;
			// 		top: 0;
			// 		left: 0;
			// 		right: 0;
			// 		bottom: 0;
			// 		border-radius: 4px;
			// 	}
			// }
		}
		p {
			position: relative;
			margin: 0;
			color: var(--light-gray);
			font-size: functions.toRem(14);
		}
		// img {
		// 	width: 100%;
		// 	aspect-ratio: 1;
		// 	object-fit: cover;
		// 	margin: 0 0 20px;
		// }
		// .cover-placeholder {
		// 	width: 100%;
		// 	aspect-ratio: 1;
		// 	display: flex;
		// 	align-items: center;
		// 	justify-content: center;
		// 	background-color: var(--medium-gray);
		// 	margin: 0 0 20px;
		// 	transition: background 0.3s;
		// 	:global(svg) {
		// 		width: 40%;
		// 		height: 40%;
		// 	}
		// }
	}
</style>