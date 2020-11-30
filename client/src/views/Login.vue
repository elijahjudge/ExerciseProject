<template>
  
  <div class = "fields">
  <div class="field">
            <h1 class = "title is-2 field-item"> Log In </h1>

  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
<br>
  <button class="button is-primary " type="submit">
                    Submit
                  </button>
</div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.field{
    
    margin-left: 300px;
    margin-right: 300px;

}

.fields{
    margin-top: 100px;
}
</style>