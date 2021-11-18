<template>

<div class="navegation-color">
<nav class="navbar navbar-toogleable-md navbar-light flex-md-row-reverse" style="background: linear-gradient(to right, #f46b45, #eea849);">
<div class="card-header">
<a v-on:click = "logout" href="#">Cerrar Sesion</a>
</div>
</nav>
</div>

</template>

<script>
export default {

    name:'LogOut',
    
    methods:{

        logout() {

            localStorage.clear();
            this.$router.push({name:'Home'})

        }

    }
    
}
</script> 