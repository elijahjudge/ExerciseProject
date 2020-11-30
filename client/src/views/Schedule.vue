<template>

  <div class="container">
    SFDTBSDFTG
      <h1>RGDRGDRGDr</h1>
    <div class="columns is-multiline">

      <div class="column" v-for="day in ctx.users.routine" v-bind:key="day" v>
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              {{ day.name }}
            </p>
            <p class="card-header-icon" @click="promptExerciseGroup(day.id)">
              <i class="fas fa-plus-square" aria-hidden="true"></i>
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <Exercise :exercises="day.exercises" :dayId="day.id" />
            </div>
          </div>
        </div>
      </div>

      <container> </container>
    </div>
    saerdgsdrg
  </div>
</template>

<script>
import { modifyexercise } from "@/models/modifyexercise";
import Exercise from "@/components/Exercises";
export default {
  name: "Schedule",
  data() {
    return {
      ctx: modifyexercise.state
    };
  },
  components: {
    Exercise
  },
  methods: {
    promptExerciseGroup(dayId) {
      this.$buefy.dialog.prompt({
        message: "Enter an Exercise group",
        inputAttrs: {
          placeholder: "e.g. Bench Press",
          maxlength: 25
        },
        trapFocus: true,
        onConfirm: value => {
          modifyexercise.addExerciseGroupToDay(dayId, value);
          this.$buefy.toast.open({
            message:
              value + " added to " + modifyexercise.state.user.routine[dayId - 1].name,
            type: "is-success"
          });
        }
      });
    }
  }
};
</script>
<style>
header .card-header-title {
  color: black;
}
.card-header-icon .fa-plus-square {
  color: rgb(30, 107, 180);
}
</style>