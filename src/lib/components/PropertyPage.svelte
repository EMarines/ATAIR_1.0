<script lang="ts">
	import { Home } from 'lucide-svelte';

	export let color: string | null;
	export let image: string | undefined;
	export let title: string;
	export let id: string | undefined;
	export let areas: string | undefined;
	export let features: string | undefined;
	export let prcice: string | undefined;
</script>

<div class="banner">

	<div class="banner-gradient" style:background-image="linear-gradient(0deg, transparent, {color || 'var(--light-gray)'}"
	/>
	<div class="cover">
		{#if image}
			<img src={image} alt={title} />
		{:else}
			<div class="cover-placeholder">
				<Home focusable="false" aria-hidden color="var(--light-gray)"/>
			</div>
		{/if}
	</div>

	<div class="info">
		{id}
		<h1>{title}</h1>
		<p>Precio: {prcice}</p>
		<p>{features}</p>
		<p>{areas}</p>
		<!-- <slot name="meta" /> -->
	</div>

</div>

	<div class="content">
		<slot />
	</div>

<style lang="scss">
	.content {
		position: relative;
		z-index: 10;
		min-height: 300px;
		background-image: linear-gradient(0deg, var(--bg-color), rgba(0, 0, 0, 0.1));
		margin: 0 -30px;
		padding: 30px;
	}
	.banner {
		position: relative;
		display: flex;
		flex-direction: column;
		margin: calc(-1 * (30px + var(--header-height))) -30px 0;
		padding: calc(30px + var(--header-height)) 30px 20px;
		@include breakpoint.up('sm') {
			flex-direction: row;
			align-items: flex-end;
		}
		.banner-gradient {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 150%;
			z-index: 1;
		}
		.info {
			z-index: 10;
			
		}
		.cover {
			margin-right: 40px;
			z-index: 10;
			@include breakpoint.down('sm') {
				margin-right: 0;
				margin-bottom: 30px;
			}
			img,
			.cover-placeholder {
				width: 100%;
				aspect-ratio: 1;
				object-fit: cover;
				box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
				@include breakpoint.up('sm') {
					width: 230px;
				}
				@include breakpoint.up('md') {
					width: 200px;
				}
				@include breakpoint.up('lg') {
					width: 230px;
				}
			}
			.cover-placeholder {
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: var(--medium-gray);
				:global(svg) {
					width: 40%;
					height: 40%;
				}
			}
		}
	}
</style>