<template>
  
  
  <div class ="level-item">

 <div class ="page"> 

<h2 class="title is-2 level-item" > My Exercises </h2>
    <div class="columns">
        
        <div class="column">
            
            <br>
        <div class="card">
  <header class="card-header">

            <router-link to="/about" class="navbar-item">
                  <i class="fas fa-plus-circle"></i>

            </router-link>


        <p class="card-header-title">


         Add Exercise 
            
        </p>
        </header>
        </div>
  <br>
            <ExerciseCard /> <br> <ExerciseCard />  <br> <ExerciseCard />


        </div>
        
    
</div>

</div>

  </div>
</template>

<script>
import ExerciseCard from "@/components/ExerciseCard";

export default {



components:{
    ExerciseCard
}

}
</script>

<style>
.card{
    width: 350px;
}
</style>