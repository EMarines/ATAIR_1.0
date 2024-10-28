<script lang="ts">
	import { Button } from '$components';
	import logo from '$assets/logo_slogan.png';
	import cover from '$assets/cover.png';
	import { goto } from '$app/navigation';
	// import { cookies } from '$app/cookies';
	import { auth } from '$lib/firebase/firebase.js';
  import { GoogleAuthProvider,signInWithPopup, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
  import { redirect } from '@sveltejs/kit';
  // import pkce from 'pkce-gen'

  let email = '';
  let password = '';
  let error = '';
  let isRegistering = false;

  function dataReset () {
    email = "";
    password = "";
  }

	// function setCookie(userName: string, value: string) {
	// 	cookies.set(userName, value, { path: '/' });
	// }
	// dataReset();

  async function handleSubmit() {
    console.log("isRegistering", isRegistering, email, password)
  //   if(isRegistering) {
  //     const auth = getAuth();
  //     createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       dataReset() 
  //       goto("/")
  //       console.log("Usuario creado correctamente")
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //     });
  //   } else {
  //     const auth = getAuth();
  //     signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       dataReset() 
  //       goto("/")
  //       console.log("Usuario logueado correctamente")
  //     })
  //   }
  };

  function toggleMode() {
    isRegistering = !isRegistering;
    console.log("isRegistering2", isRegistering)
    error = '';
  }
</script>

<div class="wrapper">
	<div class="content">
    <div class="header__content">
      <img src={logo} class="logo" alt="Spotify" />
      <div class="header__text">
        <h1>La Manera Facil De Llegar A Casa</h1>
        <p>Seguridad, certeza, comodidad y transparencia es nuestro compromiso</p>
      </div>
    </div>
		<div class="buttons">
			<form on:submit|preventDefault={handleSubmit}>
				<input bind:value={email} type="email" placeholder="Correo electrónico" required>
				<input bind:value={password} type="password" placeholder="Contraseña" required>
				<!-- <button type="submit">{isRegistering ? 'Registrarse' : 'Iniciar sesión'}</button> -->
				<Button element="button" variant=solid on:click={handleSubmit}>{isRegistering ? 'Registrarse' : 'Iniciar sesión'}</Button>
			</form>
			<Button element="button" variant=outline on:click={toggleMode}>{isRegistering ? '¿Ya tienes una cuenta? Inicia sesión' : '¿No tienes una cuenta? Regístrate'}</Button>
			
			<!-- <button on:click={toggleMode}>
				{isRegistering ? '¿Ya tienes una cuenta? Inicia sesión' : '¿No tienes una cuenta? Regístrate'}
			</button> -->
			<!-- <Button
				element="a"
				variant="outline"
				href="https://www.matchhome.net/"
				target="_blank"
				rel="noopener noreferrer">Sign Up</Button
			>
			<Button element="a" href="/api/auth/login">Login</Button> -->
		</div>
	</div>
	<div class="cover">
		<img src={cover} alt="MatchHome. Tu Hogar" />
	</div>
</div>

<style lang="scss">
	:global(body) {
		background-image: linear-gradient(230deg, var(--sidebar-color), var(--bg-color));
		height: 100vh;
	}

	.wrapper {
		display: flex;
		width: 100%;
		max-width: 1200px;
		margin: 80px auto 0;
		align-items: center;
		flex-direction: column;
    padding: 15px;
		@include breakpoint.up('md') {
			flex-direction: row;
		}
	}
	.cover {
		flex: 1;
		margin-top: 40px;
		@include breakpoint.up('md') {
			margin-top: 0;
			margin-left: 20px;
		}
		img {
			max-width: 100%;
		}
	}
	.content {
		flex: 1.8;
		h1 {
			font-size: functions.toRem(40);
		}
		p {
			font-size: functions.toRem(20);
		}
		.buttons {
			margin-top: 40px;
			:global(.button) {
				margin-right: 10px;
				padding: 10px 20px;
				text-transform: uppercase;
			}
		}
		.logo {
			width: 30%;
			max-width: 100%;
			margin-bottom: 30px;
		}
	}
  .header__content{
    display: flex;
    flex-direction: row;
    align-items: center;
    @include breakpoint.down('md') {
			flex-direction: column;
		}
  }
  .header__text {
    display: flex;
    flex-direction: column;
    padding: 0 50px 10px;
  }
</style>