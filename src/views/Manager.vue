<template>
<logout/>
<div class="manager">

<!-- barra navegacion principal -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">

  <!-- Usuarios con permisos administrativos unicos en tener acceso a todos los dropdown: Los sellers solo podran ver en su sesion
       los dropdown RESERVAS y REPORTES -->
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav me-auto mb-2 mb-lg-2">
  <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" id="entidadDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Entidad</a>
  <ul class="dropdown-menu" aria-labelledby="entidadDropdown">
  <li><a class="dropdown-item" href="/manager/provider">Proveedor</a></li>
  <li><a class="dropdown-item" href="/manager/office">Oficinas</a></li>
  <li><a class="dropdown-item" href="#">Clientes</a></li>
  </ul>
  </li>
  <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contratos</a>
  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
  <li><a class="dropdown-item" href="#">Disponibilidad</a></li>
  <li><a class="dropdown-item" href="#">Cupos</a></li>
  <li><a class="dropdown-item" href="#">Riesgo</a></li>
  </ul>
  </li>
  <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tarifas</a>
  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
  <li><a class="dropdown-item" href="#">Basicas</a></li>
  <li><a class="dropdown-item" href="#">Cupos</a></li>
  <li><a class="dropdown-item" href="#">Riesgo</a></li>
  </ul>
  </li>
  <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Reservas</a>
  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
  <li><a class="dropdown-item" href="#">Crear Reserva</a></li>
  </ul>
  </li>
  <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Reportes</a>
  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
  <li><a class="dropdown-item" href="#">Disponibilidad</a></li>
  <li><a class="dropdown-item" href="#">Cupos</a></li>
  <li><a class="dropdown-item" href="#">Riesgo</a></li>
  </ul>
  </li>
  <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sucursales</a>
  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
  <li><a class="dropdown-item" href="#">Crear Sucursal</a></li>
  </ul>
  </li>
   <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contratos</a>
  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
  <li><a class="dropdown-item" href="#">Disponibilidad</a></li>
  <li><a class="dropdown-item" href="#">Cupos</a></li>
  <li><a class="dropdown-item" href="#">Riesgo</a></li>
  </ul>
  </li>
   <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" id="configuracionDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Configuracion</a>
  <ul class="dropdown-menu" aria-labelledby="configuracionDropdown">
  <li><a class="dropdown-item" href="http://localhost:8080/manager/users">Usuarios</a></li>
  <li><a class="dropdown-item" href="#">Acerca de</a></li>
  </ul>
  </li>
  </ul>
  </div>
</div>
</nav>

<main class="container-fluid mt-4 mb-4">
<div class="col-md-12 col-xs-12">
<div id="search-reservation" class="card" data-select2-id="search-reservation">
<div class="card-status-top bg-green">
<div class="card-body">
  <h5>BUSCAR RESERVA</h5>
  <hr>
<div class="row">
      <div class="col-md-3 col-sm-4 col-xs-12 mb-3">
      <div class="form-group">
      <label for="Codigo">Codigo</label>
      <input name="codigo" type="text" class="form-control" id="codigoReserva" placeholder="-Codigo-">
      </div>
      </div>
          <div class="col-md-3 col-sm-4 col-xs-12 mb-3">
          <div class="form-group">
               <label for="categoria">Categoria</label>
               <select class="form-select">               
               <option selected>-Categoria Auto-</option>
               <option value="1">Economico Mecánico</option>
               <option value="2">Economico Automático</option>
               <option value="3">Medio Mecánico</option>
               <option value="4">Medio Automático</option>
               <option value="5">Medio Alto</option>
               <option value="6">Premium</option>
               <option value="7">Premium Plus</option>
               <option value="8">Lujo Plus</option>
               </select>
          </div>
          </div>
          <div class="col-md-3 col-sm-4 col-xs-12 mb-3">
          <div class="form-group">
              <label for="categoria">Estado</label>
              <select class="form-select">               
               <option selected>-Estado Reserva-</option>
               <option value="1">Confirmada</option>
               <option value="2">Cancelada</option>
               <option value="3">En Espera</option>
               </select>
          </div>
          </div>
          <div class="col-md-3 col-sm-4 col-xs-12 mb-3">
          <div class="form-group">
              <label for="categoria">Prestatario</label>
              <select class="form-select">               
               <option selected>-Prestatario-</option>
               <option value="1">Travel Agency</option>
               <option value="2">Agencia Travel</option>
               <option value="3">Mi agencia Travel</option>
               </select>
          </div>
          </div>
      <div class="col-md-3 col-sm-4 col-xs-12 mb-3">
      <div class="form-group">
          <label for="categoria">Nombre Cliente</label>
          <input name="nombre" type="text" class="form-control" id="nombreCliente" placeholder="-Nombre Cliente-">
      </div>
      </div>
      <div class="col-md-3 col-sm-4 col-xs-12 mb-3">
      <div class="form-group">
          <label for="categoria">Apellido Cliente</label>
          <input name="apellido" type="text" class="form-control" id="apellidoCliente" placeholder="-Apellido-">
      </div>
      </div>
      <div class="col-md-3 col-sm-4 col-xs-12 mb-3">
          <div class="form-group">
              <label for="categoria">Sucursal</label>
              <select class="form-select">               
               <option selected>-Sucursal-</option>
               <option value="1">Cubacar</option>
               <option value="2">REX</option>
               </select>
          </div>
          </div>
      <div class="col-md-3 col-sm-4 col-xs-12 mb-3">
          <div class="form-group">
              <label for="categoria">Contrato</label>
              <select class="form-select">               
               <option selected>-Contrato-</option>
               <option value="1">Columbia-CD</option>
               <option value="2">Havanatur-Celimar-CR</option>
               <option value="3">Cubacar-CD</option>
               </select>
          </div>
          </div> 
      <div class="col-md-3 col-sm-4 col-xs-12 mb-4">
        <div class="form-group" id="fechaInicio">
          <label for="categoria">Desde</label>
          <input name="nombre" type="text" class="form-control" placeholder="-Desde-">
          <span class="input-group-addon">
            <span class="glyphicon glyphicon-calendar"></span>
          </span>
        </div>
      </div>
      <div class="col-md-3 col-sm-4 col-xs-12 mb-4">
        <div class="form-group">
          <label for="fechaFinal">Hasta</label>
          <input name="nombre" type="text" class="form-control" id="fechaFinal" placeholder="-Hasta-">
          <span class="glyphicon glyphicon-calendar"></span>
        </div>
      </div>
      
</div>
</div>
</div>
</div>
</div>
</main>

<!-- RESUME RESERVATION DAY:::TABLES -->

<main class="container-fluid">
<div id="reservation-list-day"></div>
<div class="row">
<div class="col-md-12 col-xs-12">
<div class="card width" >
<div class="card-body">
  <h5>RESERVAS DEL DIA</h5>
  <hr>
  <table class="table table-striped table-hover ">
  <thead>
  <tr>
    <th></th>
    <th>#Reserva</th>
    <th>Cliente</th>
    <th>Inicia</th>
    <th>Termina</th>
    <th>Dias</th>
    <th>Categoria</th>
    <th>Sucursal</th>
    <th>Oficina</th>
    <th></th>
  </tr>
  </thead>
  <tbody>
  <tr>
      <td>1</td>
      <td># Reserva</td>
      <td>Nombre</td>
      <td>Fecha Inicio</td>
      <td>Fecha Final</td>
      <td>Cant. Dias</td>
      <td>Economico Mecanico</td>
      <td>Cubacar Plaza</td>
      <td>3era y Paseo</td>
      <td>
        <div class="action-btns text-right">
          <a title="Ver Reserva" class="btn btn-primary">Detalles</a>
        </div>
      </td>
      <td>
        <div class="action-btns text-right">
          <a title="Ver Voucher" class="btn btn-secondary">Voucher</a>
        </div>
      </td>
      <td>
        <div class="action-btns text-right">
          <a title="Ver Modificaciones" class="btn btn-light">Modificaciones</a>
        </div>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td># Reserva</td>
      <td>Nombre</td>
      <td>Fecha Inicio</td>
      <td>Fecha Final</td>
      <td>Cant. Dias</td>
      <td>Economico Mecanico</td>
      <td>Cubacar Plaza</td>
      <td>3era y Paseo</td>
      <td>
        <div class="action-btns text-right">
          <a title="Ver Detalles" class="btn btn-primary">Detalles</a>
        </div>
      </td>
      <td>
        <div class="action-btns text-right">
          <a title="Ver Voucher" class="btn btn-secondary">Voucher</a>
        </div>
      </td>
      <td>
        <div class="action-btns text-right">
          <a title="Ver Modificaciones" class="btn btn-light">Modificaciones</a>
        </div>
      </td>
    </tr>
    <tr class="info">
      <td>3</td>
      <td># Reserva</td>
      <td>Nombre</td>
      <td>Fecha Inicio</td>
      <td>Fecha Final</td>
      <td>Cant. Dias</td>
      <td>Economico Mecanico</td>
      <td>Cubacar Plaza</td>
      <td>3era y Paseo</td>
      <td>
        <div class="action-btns text-right">
          <a title="Ver Detalles" class="btn btn-primary">Detalles</a>
        </div>
      </td>
      <td>
        <div class="action-btns text-right">
          <a title="Ver Voucher" class="btn btn-secondary">Voucher</a>
        </div>
      </td>
      <td>
        <div class="action-btns text-right">
          <a title="Ver Modificaciones" class="btn btn-light">Modificaciones</a>
        </div>
      </td>
    </tr>
    <tr class="success">
      <td>4</td>
      <td># Reserva</td>
      <td>Nombre</td>
      <td>Fecha Inicio</td>
      <td>Fecha Final</td>
      <td>Cant. Dias</td>
      <td>Economico Mecanico</td>
      <td>Cubacar Plaza</td>
      <td>3era y Paseo</td>
      <td>
        <div class="action-btns text-right">
          <a title="Ver Detalles" class="btn btn-primary">Detalles</a>
        </div>
      </td>
      <td>
        <div class="action-btns text-right">
          <a title="Ver Voucher" class="btn btn-secondary">Voucher</a>
        </div>
      </td>
      <td>
        <div class="action-btns text-right">
          <a title="Ver Modificaciones" class="btn btn-light">Modificaciones</a>
        </div>
      </td>
    </tr>
    <tr class="danger">
      <td>5</td>
      <td># Reserva</td>
      <td>Nombre</td>
      <td>Fecha Inicio</td>
      <td>Fecha Final</td>
      <td>Cant. Dias</td>
      <td>Economico Mecanico</td>
      <td>Cubacar Plaza</td>
      <td>3era y Paseo</td>
      <td>
        <div class="action-btns text-right">
          <a title="Ver Detalles" class="btn btn-primary">Detalles</a>
        </div>
      </td>
      <td>
        <div class="action-btns text-right">
          <a title="Ver Voucher" class="btn btn-secondary">Voucher</a>
        </div>
      </td>
      <td>
        <div class="action-btns text-right">
          <a title="Ver Modificaciones" class="btn btn-light">Modificaciones</a>
        </div>
      </td>
    </tr>
    <tr class="active">
      <td>7</td>
      <td># Reserva</td>
      <td>Nombre</td>
      <td>Fecha Inicio</td>
      <td>Fecha Final</td>
      <td>Cant. Dias</td>
      <td>Economico Mecanico</td>
      <td>Cubacar Plaza</td>
      <td>3era y Paseo</td>
      <td>
        <div class="action-btns text-right">
          <a title="Ver Detalles" class="btn btn-primary">Detalles</a>
        </div>
      </td>
      <td>
        <div class="action-btns text-right">
          <a title="Ver Voucher" class="btn btn-secondary">Voucher</a>
        </div>
      </td>
      <td>
        <div class="action-btns text-right">
          <a title="Ver Modificaciones" class="btn btn-light">Modificaciones</a>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>
</div>
</main>

</div>
</template>

<script>

import logout from '../components/LogOut.vue'
import {mapState} from 'vuex'

export default {
     
     components:{
        logout
     },
     computed: {
         ...mapState(['token'])
     },
     methods: {
       async dateProtected(){
        try {
          const res = await fetch('http://localhost:3000/dashboard', {
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
     },
             
   }

</script>
