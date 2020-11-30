<template>
  

  <div class="homecontainer">



      <div class ="colums">


          <div class = "column">

        <router-link to="/login" class="button is-primary">
            <strong> Login </strong>   
        </router-link>

        </div>

          <div class = "column">

        <router-link to="/register" class="button is-primary">
            <strong> Register </strong>   
        </router-link>
          </div>

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.homecontainer{
  display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;

      background-image: url("../assets/exercisepic.jpg");

  
}


</style>