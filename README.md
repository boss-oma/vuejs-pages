# front-api

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#### <td>
<div class="action-btns text-right">
<a href="/addusers/editusers/{{_id}}" title="Modificar Usuario" class="btn btn-warning">Modificar</a>
</div>
</td>
        
<td>
<form action="/addusers/delete/{{_id}}?_method=DELETE" method="POST">
<input type="hidden" name = "_method " value="DELETE ">
<button class="btn btn-danger btn-block text-right" type="submit">Eliminar</button>
</td>
####

#####
<main class="container-fluid mt-4 mb-4">
<div class="col-md-10 col-xs-6">
<div class="card-body">
<div class="col-md-6">
<table class="table table-striped table-condensed table-hover">
<thead>
<tr>
<th>Nombre</th>
<th>Apellido</th>
<th>Nombre Usuario</th>
<th>Telefono</th>
<th>Perfil</th>
<th>Creado</th>

</tr>
</thead>
<tbody>
<tr v-for="user of user">

<td>{{user.firstname}}</td>
<td>{{user.lastname}}</td>
<td>{{user.username}}</td>
<td>{{user.telephone}}</td>
<td>{{user.profile}}</td>
</tr>
</tbody>
</table>
</div>

</div>

</div>

</main>
######
