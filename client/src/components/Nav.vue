<template>

  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src= "../assets/logo.png" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">       

     <router-link to="/" class="navbar-item">Social</router-link>
      <router-link to="/myexercises" class="navbar-item">My Progress</router-link>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
           <router-link to="/signup" class="button is-primary">
           <strong> Sign Up </strong>   
           </router-link>

            <router-link to="/login" class="button is-light">
            Log in                
           </router-link>

        </div>
      </div>
    </div>
  </div>
</nav>

</template>

<script>
export default {

}
</script>

<style>

</style>