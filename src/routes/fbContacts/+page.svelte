<script lang="ts">
  import type { Contact } from '$lib/types';
  import { CardContact } from '$components'
  
  export let data;

  $: fbContacts = data.contacts as Contact[];

</script>
  
  <h3>fbContacts</h3>

  <div class="cards__container">
    {#each fbContacts as contact}
      <div class="card__container" >
        <CardContact {contact}/>         
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
  


