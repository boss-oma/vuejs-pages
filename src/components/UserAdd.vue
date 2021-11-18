<template>
    <div>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav">
    <a class="nav-link active" aria-current="page" role="button" href="http://localhost:8080/manager">Regresar</a>
    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="configuracionDropdown" role="button"  aria-expanded="false">Configuracion</a>
    <ul class="dropdown-menu" aria-labelledby="configuracionDropdown">
    <li><a class="dropdown-item" href="#">Usuarios</a></li>
    <li><a class="dropdown-item" href="#">Acerca de</a></li>
    </ul>
    </li>
    </ul>
    </div>
    </div>
    </nav>

    <!-- Create users roles -->



<div class="container-fluid">
<div class="col-md-12 col-sm-12 mt-4 mb-4">
<div id="search-reservation" class="card" data-select2-id="search-reservation">
<div class="card-status-top bg-green">
<div class="card-body">
<h5>CREAR USUARIO</h5>
<hr>
<form @submit.prevent="AddUser">
<div class="row">
    <div class="col-md-4 col-sm-8 col-xs-4 mb-6">
<div class="form-group">
<label for="nombre">Nombre</label>
<input name="firstname" type="text" v-model="user.firstname" class="form-control" placeholder="-Nombre-" autofocus>
</div>
</div>
      
<div class="col-md-4 col-sm-8 col-xs-12 mb-3">
<div class="form-group">
<label for="apellido">Apellido</label>
<input name="lastname" type="text" v-model="user.lastname" class="form-control" placeholder="-Apellido-">
</div>
</div>

<div class="col-md-4 col-sm-4 col-xs-12 mb-3">
<div class="form-group">
<label for="username">Usuario</label>
<input name="username" type="text" v-model="user.username" class="form-control" placeholder="-Usuario-">
</div>
</div>
          
<div class="col-md-4 col-sm-4 col-xs-12 mb-3">
<div class="form-group">
<label for="password">Password</label>
<input name="password" type="password" v-model="user.password" class="form-control" placeholder="-Contraseña-">
</div>
</div>
          
<div class="col-md-4 col-sm-4 col-xs-12 mb-3">
<div class="form-group">
<label for="telephone">Telefono</label>
<input name="telephone" type="text" v-model="user.telephone" class="form-control"  placeholder="-Telefono-">
</div>
</div>

<div class="col-md-4 col-sm-4 col-xs-12 mb-3">
<div class="form-group">
<label for="perfil">Perfil</label>
<select class="form-select" v-model="user.profile">               
<option selected></option>
<option value="1">Manager</option>
<option value="2">Seller</option>
</select>
</div>
</div>       
<div class="content mt-4" align="left">
<button class="btn btn-primary">Crear Usuario</button>
</div>

</div>

</form> 
</div>
</div>
</div>
</div>
</div>


<div class="container-fluid">
<div class="row">
<div class="col-sm-12 mt-4">
<div id="search-reservation" class="card" data-select2-id="search-reservation">
<div class="card-block">
<div class="card-body">
<h5>LISTADO USUARIOS</h5>
<hr>
<div class="table-responsive">
<table class="table table-striped table-condensed table-hover">
<thead>
<tr>
<th>Nombre</th>
<th>Apellido</th>
<th>Nombre Usuario</th>
<th>Telefono</th>
<th>Perfil</th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr v-for="user of userList" v-bind:key="user._id">
<td>{{user.firstname}}</td>
<td>{{user.lastname}}</td>
<td>{{user.username}}</td>
<td>{{user.telephone}}</td>
<td>{{user.profile}}</td>
<td>
<button @click="editUser(user._id)" class="btn btn-warning">Modificar</button>
</td>
<td>
<button @click="deleteUser(user._id)" class="btn btn-danger">Eliminar</button>
</td>
</tr>
</tbody>
</table>

</div>



</div>
</div>
</div>
</div>
</div>

</div>







 

</div>
</template>

<script>


export default {
    
    name: 'AddUser',

    data() {
        return {
            user: {

                firstname:'',
                lastname:'',
                username:'',
                password:'',
                telephone:'',
                profile:''
            },
            userList: []
        }
    },
    
       
    created(){
        this.getUser();

    },
    methods: {
        AddUser(){
            fetch('http://localhost:3000/addusers', {
                method: 'POST',
                body: JSON.stringify(this.user),
                headers: {
                    'Accept': 'application/json',
                    'Content-type':'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {            
             this.getUser();
            })            
            this.user.firstname='',
            this.user.lastname='',
            this.user.username=''
            this.user.password='',
            this.user.telephone='',
            this.user.profile=''
       },

       getUser() {
           
           fetch('http://localhost:3000/addusers')
           .then(res => res.json())
           .then(data => {
            this.userList = data;
           })
           
       },
       deleteUser(id) {
               fetch('http://localhost:3000/addusers/' + id, {
               method:'DELETE', 
               headers: {
                    'Accept': 'application/json',
                    'Content-type':'application/json',
                    'x-access-token': this.token
                } 
           })
            .then(data => {
             this.getUser(data);
           });
       },
       editUser(id) {  
           this.$router.push('/manager/edit/' + id);     
           console.log('succesfull')
       }
    }
}
</script>

