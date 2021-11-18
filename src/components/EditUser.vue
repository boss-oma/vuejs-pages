<template>
<logout/>
<div>

<main class="container-fluid mt-4">
<div class="col-md-12 col-xs-12">
<div class="card">
<div class="card-body">
<h5>EDITAR USUARIO</h5>
<hr>

<div class="row">


<div class="col-md-3 col-sm-4 col-xs-12 mb-3">
<div class="form-group">
<label for="nombre">Nombre</label> 
<input name="firstname" type="text" class="form-control" placeholder="-Nombre-" v-model="user.firstname">
</div>
</div>

<div class="col-md-3 col-sm-4 col-xs-12 mb-3">
<div class="form-group">
<label for="apellido">Apellido</label>
<input name="lastname" type="text" class="form-control" placeholder="-Apellido-" v-model="user.lastname">
</div>
</div>

<div class="col-md-3 col-sm-4 col-xs-12 mb-3">
<div class="form-group">
<label for="username">Nombre Usuario</label>
<input name="username" type="text" class="form-control" placeholder="-Usuario-" v-model="user.username">
</div>
</div>

<div class="col-md-3 col-sm-4 col-xs-12 mb-3">
<div class="form-group">
<label for="password">Password</label>
<input name="password" type="password" class="form-control" placeholder="-Contraseña-" v-model="user.password">
</div>
</div>

<div class="col-md-3 col-sm-4 col-xs-12 mb-3">
<div class="form-group">
<label for="telefono">Telefono</label>
<input name="telephone" type="text" class="form-control"  placeholder="-Telefono-" v-model="user.telephone">
</div>
</div>

<div class="col-md-3 col-sm-4 col-xs-12 mb-3">
<div class="form-group">
<label for="perfil">Perfil</label>
<select class="form-select">               
<option selected></option>
<option value="1">Manager</option>
<option value="2">Seller</option>
</select>
</div>
</div>  

<div class="btn-toolbar text-center well mt-4 mb-3">
<button class="btn btn-primary col-xs-2 margin-right" @click="update()">Actualizar</button>
<button class="btn btn-dark col-xs-2 margin-right" @click="back()">Atras</button>
</div>



</div>


</div>
</div>
</div>
</main>

</div>
</template>

<script>

import logout from '../components/LogOut.vue'

export default {
    name:'Edit',
    components:{
        logout,
    },
    data() {
        
        return {
        
        userId: null,
        user: {
            'firstname':'',
            'lastname':'',
            'username':'',
            'password':'',
            'telephone':'',
            'profile':''        
        }            
      }    
    }, 
    methods:{
        update(){
            fetch('http://localhost:3000/addusers/editusers', this.user, {
               method:'PUT', 
               headers: {
                'Accept': 'application/json',
                'Content-type':'application/json'
            } 
            })
            .then(res => res.json())
            .then(data => {
             console.log(data);             
           })
        },

        back(){
            this.$router.push('/manager/users')
        }
        
    },
    mounted(){
        this.userId = this.$route.params.id;
        fetch('http://localhost:3000/addusers/editusers/' + this.userId)
        .then(res => res.json())
        .then(data => {
         
         this.user.firstname = data.firstname;
         this.user.lastname = data.lastname;
         this.user.username = data.username;
         this.user.password = data.password;
         this.user.telephone = data.telephone;
         this.user.profile = data.profile;

        })    
    },     
  }

</script>

<style scoped>
.margin-right{
    margin-right: 30px;
}
</style>

