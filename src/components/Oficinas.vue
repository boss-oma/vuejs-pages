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
<h5>CREAR OFICINA</h5>
<hr>
<form @submit.prevent ="AddOffice">
<div class="row">
<div class="col-md-4 col-sm-8 col-xs-4 mb-6">
<div class="form-group">
<label for="locacion">Provincia</label>
<input name="location" type="text" v-model="provider.location" class="form-control" placeholder="-Provincia-" autofocus>
</div>
</div>
<div class="col-md-4 col-sm-8 col-xs-4 mb-6">
<div class="form-group">
<label for="Descripcion">Descripcion</label>
<input name="description" type="text" v-model="provider.description" class="form-control" placeholder="-Descripcion-" autofocus>
</div>
</div>
      
<div class="col-md-4 col-sm-8 col-xs-12 mb-3">
<div class="form-group">
<label for="nomenclador">Nomenclador</label>
<input name="Nomenclador" type="text" v-model="provider.nomenclador" class="form-control" placeholder="-Nomenclador-">
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
<h5>LISTADO DE OFICINAS</h5>
<hr>
<div class="table-responsive">
<table class="table table-striped table-condensed table-hover">
<thead>
<tr>
<th>Provincia</th>
<th>Descripcion</th>
<th>Nomenclador</th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr v-for="office of officeList" v-bind:key="office._id">
<td>{{office.location}}</td>
<td>{{office.description}}</td>
<td>{{office.nomenclador}}</td>
<td>
<button @click="editOffice(office._id)" class="btn btn-warning">Editar</button>
</td>
<td>
<button @click="deleteOffice(office._id)" class="btn btn-danger">Eliminar</button>
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
    
name: 'AddOffice',

    data() {
        return {
         office: {
           location:'',
           description:'',
           nomenclador:''
        },
         officeList: []
        }
    },
    
    created(){
     this.getOffice();    
    },

    methods: {
        AddOffice() {
            fetch('http://localhost:3000/oficinas', {
                method: 'POST',
                body: JSON.stringify(this.provider),
                headers: {
                'Accept': 'application/json',
                'Content-type':'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {            
             this.getOffice();             
            })            
            this.office.location='',
            this.office.description='',
            this.office.nomenclador=''            
       },

       deleteOffice(id) {
               fetch('http://localhost:3000/oficinas/' + id, {
               method:'DELETE', 
               headers: {
                    'Accept': 'application/json',
                    'Content-type':'application/json',
                    'x-access-token': this.token
                } 
           })
            .then(data => {
             this.getOffice(data);
           });
       },
       getOffice() {           
           fetch('http://localhost:3000/oficinas/',)
           .then(res => res.json())
           .then(data => {
            this.officeList = data;
           })
       },

       
       
       
    }
}
</script>