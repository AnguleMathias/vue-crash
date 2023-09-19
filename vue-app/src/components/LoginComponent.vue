<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="mt-5">Login</h1>
        <hr />
        <form-tag @myevent="submitHandler" name="myform" event="myevent">
          <text-input
            v-model="email"
            label="Email"
            type="email"
            name="email"
            required="true"
          ></text-input>
          <text-input
            v-model="password"
            label="Password"
            type="password"
            name="password"
            required="true"
          ></text-input>

          <hr />
          <input type="submit" class="btn btn-primary" value="Login" />
        </form-tag>
      </div>
    </div>
  </div>
</template>

<script>
import FormTag from "./forms/FormTag.vue";
import TextInput from "./forms/TextInput.vue";

export default {
  name: "loginComponent",
  components: {
    FormTag,
    TextInput,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submitHandler() {
      console.log("Email", this.email, "Password", this.password);

      const payload = {
        email: this.email,
        password: this.password,
      };

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      };

      fetch("http://localhost:8081/users/login", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            console.log("error", data.message);
          } else {
            console.log("data", data);
          }
        })
        .catch((error) => {
          console.log("catched error", error);
        });
    },
  },
};
</script>