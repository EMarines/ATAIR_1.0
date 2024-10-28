<script lang="ts">
  export let mensaje: string;
  export let placeholder: string;
  
</script>

<textarea
  class="textarea__msg"
  {placeholder}
  bind:value={mensaje}
  />

<style>
  
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
		.textarea__msg::-webkit-scrollbar-track{background: var(--medium-gray);}
		.textarea__msg::-webkit-scrollbar-thumb{background: var(--accent-color);}
</style>
