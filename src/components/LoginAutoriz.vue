<template>
  <div>
    <div class="header-login">Please Login</div>
    <BForm class="form-login">
      <BFormGroup
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <BFormInput
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
          :[atrState]="getEmailStatus"
        ></BFormInput>
      </BFormGroup>

      <BFormGroup id="input-group-2" label="Password:" label-for="input-2">
        <BFormInput
          id="input-2"
          v-model="form.password"
          placeholder="Enter password"
          required
          validated="true"
          novalidate="true"
          :[atrState]="getPasswordStatus"
        ></BFormInput>
      </BFormGroup>
    </BForm>
    <BButton
      class="button-submit"
      variant="outline-primary"
      @click="eventSubmitForm"
    >
      Submit
    </BButton>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "LoginAtoriz",
  data: () => ({
    form: {
      email: "",
      password: "",
    },
    validatePassword: false,
    atrState: "noState",
  }),
  methods: {
    ...mapActions("authentificationStore", ["validateForm"]),
    eventSubmitForm() {
      // console.log(this.form.password.length);
      // this.atrState = "state";
      // if (this.form.password.length > 5) {
      //   this.validatePassword = true;
      //   return;
      // }
      // this.validatePassword = false;
      this.atrState = "state";
      this.validateForm(this.form);
    },
  },
  computed: {
    ...mapGetters("authentificationStore", [
      "getEmailStatus",
      "getPasswordStatus",
    ]),
    // validatePassword() {
    //   console.log("computed", this.validation);
    //   return this.validation;
    // },
  },
};
</script>

<style scoped>
.header-login {
  color: grey;
  font-size: 24px;
}

.form-login {
  margin: 20px 0;
}

.button-submit {
  color: rgb(0, 0, 0);
  border-color: rgb(0, 0, 0);
}

.button-submit:hover {
  background-color: #940294;
  border-color: #940294;
  color: #fff;
}

.button-submit:active {
  background-color: #940294 !important;
  border-color: #940294 !important;
}
</style>
