<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <div class="container-fluid">
    <div class="row">
    <div class="col-md-4 offset-md-4">
    <div class="login-form bg-light mt-4 p-4">
    
    <form v-on:submit.prevent="login(usuario)" class="row g-3">
    <div class="col-12">
    <input type="username" name="username" class="form-control" placeholder="Username" v-model="usuario.username" autofocus >
    </div>
                        
    <div class="col-12">
    <input type="password" name="password" class="form-control" placeholder="Password" v-model="usuario.password">
    </div>
                        
    <div class="col-12">
    <div class="form-check">
    <input class="form-check-input" type="checkbox" id="rememberMe">
    <label class="form-check-label" for="rememberMe"> Remember me</label>
    </div>
    </div>
    
    <div class="d-grid gap-2">
    <button class="btn btn-primary" type="submit">Login</button>
    </div>
    </form>
    
    <hr class="mt-4">
    <div class="col-12">
    <p class="text-center mb-0">Artemisa Travel | ©2021</p>
    </div>
    </div>
    </div>
    </div>
    </div>

  </div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
  data() {
    
  return {
      usuario: {
        username:'',
        password:''
      }
    } 
  },
  methods: {
    ...mapActions(['login'])
  }  
}

</script>
