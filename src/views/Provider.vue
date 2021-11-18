<template>
<logout/>
<provider/>

<div class="provider">
    
    
</div>    
</template>

<!-- Script -->
 
<script>

 import logout from '../components/LogOut.vue'
 import provider from '../components/Proveedor.vue'
 import {mapState} from 'vuex'

   export default {     
     components:{
       logout,
       provider
     },     
     computed: {
         ...mapState(['token'])
     },
     
     methods: {
       async dateProtected(){
        try {
          const res = await fetch('http://localhost:3000/proveedor', {
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
 