<script lang="ts">
  import type { Contact } from '$lib/types';
  import { CardContact, Button } from '$components'
  
  export let data;

  $: fbContacts = data.contacts as Contact[];

</script>
  
  <h3>fbContacts</h3>
  <Button 
    element="a"
    variant="outline"
    href="/fbContacts/addFbContact"		
    >
			Agregar Contacto <span class="visually-hidden">Items</span>
	</Button>

  <div class="cards__container">
    {#each fbContacts as contact}
      <div class="card__container" >
			  <a href="/fbContact/{contact.id}">
        <CardContact {contact}/>         
			</a>
      </div>
    {/each}        
  </div> 
  
  <style lang="scss">
    
    .cards__container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 4px;
    }

    // .card__container { 
    //   display: flex; 
    //   flex-direction: column; 
    //   width: 350px;
    //   height: 130px;   
    //   justify-content: center;
    //   align-items: center;  
    //   /* color: grey; */
    //   border: 1px solid grey;
    //   border-radius: 5px;
    //   padding: 8px;
    //   cursor: pointer;
    // }

  </style>
  


