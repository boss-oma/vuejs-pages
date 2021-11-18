<template>
<logout/>
<office/>

<div class="Oficinas">
    
    
</div>    
</template>

<!-- Script -->
 
<script>

 import logout from '../components/LogOut.vue'
 import office from '../components/Oficinas.vue'
 import {mapState} from 'vuex'

   export default {     
     components:{
       logout,
       office
     },     
     computed: {
         ...mapState(['token'])
     },
     
     methods: {
       async dateProtected(){
        try {
          const res = await fetch('http://localhost:3000/oficinas', {
            headers: {
              'Content-Type':'application/json',
              'x-access-token': this.token 
            }
          }) 
          const queryDB = await res.json()
          console.log(queryDB)
        } catch(error) {
          console.log(error)
        }
       }
     },
     
     created(){
       this.dateProtected()
     }
     
   }
</script>
 