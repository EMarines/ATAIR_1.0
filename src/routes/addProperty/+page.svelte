<script lang="ts">
	type Contact = {
		email: string;
		password: number;
	}
	let contact: Contact;
</script>

<form method="POST">
	<label>
		Nombre
		<input name="email" type="text">
	</label>
	<label>
		Apellido
		<input name="apellido" type="text">
	</label>

	<button>Log in</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}
</style>