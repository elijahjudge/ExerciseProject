<template>
  
  <div class="page">
      <h2 class="title is-2 level-item">Social</h2>

    <div class="columns">

        <div class="column is-two-thirds">
          
            <ExerciseCard /> <br>
            <ExerciseCard /> <br>
            <ExerciseCard /> <br>
            <ExerciseCard /> <br>
        </div>

        <div class="column is-one-third" >
            <Sidebar />

        </div>

    </div>
  </div>

</template>

<script>
import Sidebar from "@/components/Sidebar";
import ExerciseCard from "@/components/ExerciseCard";


export default {
  name: 'Home',
  components: {
    Sidebar, ExerciseCard

  }
}
</script>

