<template>
  <form>
    <div id="app">
      <div class="section">
        <div class="container">
          <div class="media is-pulled-right">
            <div class="media-content">
              <div class="field is-grouped">
                <div class="control">
                  <div class="g-signin2"></div>
                </div>
                
              </div>
            </div>
          </div>
          <div class="title" >Sign Up</div>

          <form id="register-form">
            <div class="field">
              <label class="label" for="username">Username</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  type="text"
                  placeholder="Username"
                  name="username"
                  v-model="username"
                /><span class="icon is-left"><i class="fa">user</i></span>
              </div>
              <label class="label" for="email">Email</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  type="email"
                  placeholder="Email"
                  name="email"
                  v-model="email"
                /><span class="icon is-left"
                  ><i class="fa">envelope-square</i></span
                >
              </div>
              <div class="columns row-one">
                <div class="column">
                  <label class="label" for="firstName">First Name</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      v-model="first_name"
                    />
                  </div>
                </div>
                <div class="column">
                  <label class="label" for="lastName">Last Name</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      v-model="last_name"
                    />
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <label class="label" for="password">Password</label>
                  <div class="control has-icons-left">
                    <input
                      class="input"
                      type="password"
                      placeholder="Password"
                      name="password"
                      v-model="password"
                    /><span class="icon is-left"><i class="fa">key</i></span>
                  </div>
                </div>
                <div class="column">
                  <label class="label" for="retypePassword"
                    >ConfirmPassword</label>
                  
                  <div class="control has-icons-left">
                    <input
                      class="input"
                      type="password"
                      placeholder="Confirm Password"
                      name="retypePassword"
                      v-model="cpassword"
                    /><span class="icon is-left"><i class="fa">lock</i></span>
                  </div>
                </div>
              </div>
              <div class="field is-grouped">
                <div class="control">
                  <router-link to="/dashboard" class="button is-light is-medium is-rounded"
                    >Cancel</router-link
                  >
                </div>
                <div class="control">
                  <button @click="registerAccount" class="button is-primary is-medium is-rounded">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
             xdxdg {{chicken}}

      </div>
    </div>
  </form>
</template>

<script>
import { users} from "@/models/Users";

export default {
  name: "Register",
  
    data()  {
        return {
        chicken: "sdfsdf",

        baby: 'sefsdd',

        username: "",
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        cpassword: ""

        }
    },
    methods: {


    registerAccount()
    {

    chicken = "moo"
    console.log("ADRGADRG");

         

        
    }

    }
};
</script>

<style>

</style>