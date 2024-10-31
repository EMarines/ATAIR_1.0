<script lang="ts">
	import Input from '$lib/components/Input.svelte';
</script>
<Input type="text" label="Nombre" id="name" />
<Input type="email" label="Correo electrónico" id="email" />
<Input type="password" label="Contraseña" id="password" />
<Input type="number" label="Edad" id="age" min="0" max="100" />