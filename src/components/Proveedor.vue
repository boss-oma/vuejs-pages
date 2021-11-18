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

<!-- Create providers from API rest using fetch GET, POST, PUT, and DELETE -->



<div class="container-fluid">
<div class="col-md-12 col-sm-12 mt-4 mb-4">
<div id="search-reservation" class="card" data-select2-id="search-reservation">
<div class="card-status-top bg-green">
<div class="card-body">
<h5>CREAR PROVEEDOR</h5>
<hr>
<form @submit.prevent ="AddProvider">
<div class="row">
<div class="col-md-4 col-sm-8 col-xs-4 mb-6">
<div class="form-group">
<label for="nombre">Nombre</label>
<input name="fullname" type="text" v-model="provider.fullname" class="form-control" placeholder="-Nombre-" autofocus>
</div>
</div>
<div class="col-md-4 col-sm-8 col-xs-4 mb-6">
<div class="form-group">
<label for="alias">Alias</label>
<input name="nickname" type="text" v-model="provider.nickname" class="form-control" placeholder="-Alias-" autofocus>
</div>
</div>
      
<div class="col-md-4 col-sm-8 col-xs-12 mb-3">
<div class="form-group">
<label for="direccion">Direccion</label>
<input name="address" type="text" v-model="provider.address" class="form-control" placeholder="-Direccion-">
</div>
</div>

<div class="col-md-4 col-sm-4 col-xs-12 mb-3">
<div class="form-group">
<label for="email">Correo</label>
<input name="email" type="email" v-model="provider.email" class="form-control" placeholder="-Correo-">
</div>
</div>
          
<div class="col-md-4 col-sm-4 col-xs-12 mb-3">
<div class="form-group">
<label for="contact">Contacto</label>
<input name="contact" type="text" v-model="provider.contact" class="form-control" placeholder="-Contacto-">
</div>
</div>
               
<div class="content mt-4" align="left">
<button class="btn btn-primary">Guardar</button>
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
<h5>LISTADO PROVEEDORES</h5>
<hr>
<div class="table-responsive">
<table class="table table-striped table-condensed table-hover">
<thead>
<tr>
<th>Nombre</th>
<th>Alias</th>
<th>Direccion</th>
<th>Correo</th>
<th>Contacto</th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr v-for="provider of providerList" v-bind:key="provider._id">
<td>{{provider.fullname}}</td>
<td>{{provider.nickname}}</td>
<td>{{provider.address}}</td>
<td>{{provider.email}}</td>
<td>{{provider.contact}}</td>
<td>
<button @click="editProvider(provider._id)" class="btn btn-warning">Editar</button>
</td>
<td>
<button @click="deleteProvider(provider._id)" class="btn btn-danger">Eliminar</button>
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
    
name: 'AddProvider',

    data() {
        return {
         provider: {
           fullname:'',
           nickname:'',
           address:'',
           email:'',
           contact:''
        },
         providerList: []
        }
    },
    
    created(){
     this.getProvider();    
    },

    methods: {
        AddProvider(){
            fetch('http://localhost:3000/proveedor', {
                method: 'POST',
                body: JSON.stringify(this.provider),
                headers: {
                'Accept': 'application/json',
                'Content-type':'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {            
             this.getProvider();             
            })            
            this.provider.fullname='',
            this.provider.nickname='',
            this.provider.address='',
            this.provider.email='',
            this.provider.contact=''
       },
       deleteProvider(id) {
               fetch('http://localhost:3000/proveedor/' + id, {
               method:'DELETE', 
               headers: {
                    'Accept': 'application/json',
                    'Content-type':'application/json',
                    'x-access-token': this.token
                } 
           })
            .then(data => {
             this.getProvider(data);
           });
       },
       getProvider() {           
           fetch('http://localhost:3000/proveedor/',)
           .then(res => res.json())
           .then(data => {
            this.providerList = data;
           })
       },

       
       
       
    }
}
</script>
