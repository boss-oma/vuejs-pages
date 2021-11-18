<template>
<editUser/>

<div class="editUsersById">
    
</div>    
</template>

<!-- Script -->

<script>

 import editUser from '../components/EditUser.vue'
 import {mapState} from 'vuex'

   export default {     
     components:{
       editUser
     },     
     computed: {
         ...mapState(['token'])
     },
     methods: {
       async dateProtected(id){
        try {
          const res = await fetch('http://localhost:3000/addusers/editusers/' + id, {
            headers: {
              'Content-Type':'application/json',
              'x-access-token': this.token 
            }
          }) 
          const queryDB = await res.json()
          console.log('succesfull')
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
