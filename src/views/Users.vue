<template>
<logout/>
<user/>

<div class="users">
    
    
</div>    
</template>

<!-- Script -->

<script>

 import logout from '../components/LogOut.vue'
 import user from '../components/UserAdd.vue'
 import {mapState} from 'vuex'

   export default {     
     components:{
       logout,
       user
     },     
     computed: {
         ...mapState(['token'])
     },
     methods: {
       async dateProtected(){
        try {
          const res = await fetch('http://localhost:3000/addusers', {
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
