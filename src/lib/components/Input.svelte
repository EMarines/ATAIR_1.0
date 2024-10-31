<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	type InputType = 'text' | 'password' | 'email' | 'number';

	interface InputComponentElements {
		input: HTMLInputAttributes;
	}

	type $$Props = InputComponentElements['input'] & {
		type: InputType;
		label: string;
		className?: string;
		autocomplete?: string;
	};

	export let type: InputType = 'text';
	export let label: string;
	export let className: string = '';
	export let autocomplete: string = 'off';
  
</script>

<div class="input-group">
	<label for={$$restProps.id}>
		{label}
	</label>
	<input
		{type}
		{autocomplete}
		class="input {className}"
		{...$$restProps}
	/>
</div>

<style>
	.input-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	label {
		font-size: 0.875rem;
		font-weight: 500;
	}

  	/* Quita las flechas en Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Quita las flechas en Firefox */
	input[type="number"] {
		-moz-appearance: textfield;
		appearance: textfield;
	}
</style>