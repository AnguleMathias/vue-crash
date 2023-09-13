const RegistrationForm = {
  data() {
    return {
      addressSameChecked: true,
    };
  },
  props: ["items"],
  template: `
    <h3>Registration</h3>
    <hr>
    <form autocomplete="off" class="needs-validation" novalidate>
      <text-input required="true" label="First Name" type="text" name="first-name"></text-input>
      <text-input required="true" label="Last Name" type="text" name="last-name"></text-input>
      <text-input required="true" label="Email" type="email" name="email"></text-input>
      <text-input required="true" label="Password" type="password" name="password"></text-input>
      <select-input label="Favourite Colour" name="name" :items="items"></select-input>

      <text-input required="true" label="Address" type="text" name="address"></text-input>
      <text-input required="true" label="City/Town" type="text" name="city"></text-input>
      <text-input required="true" label="State/Province" type="text" name="province"></text-input>
      <text-input required="true" label="Zip/Postal" type="text" name="zip"></text-input>

      <check-input @click="addressSame" label="Mailing Address Same" :checked="true" v-model='addressSameChecked'></check-input>

      <div v-if="addressSameChecked === false">
        <div class="mt-3">
          <text-input label="Mailing Address" type="text" name="address2"></text-input>
          <text-input label="Mailing City/Town" type="text" name="city2"></text-input>
          <text-input label="Mailing State/Province" type="text" name="province2"></text-input>
          <text-input label="Mailing Zip/Postal" type="text" name="zip2"></text-input>
        </div>
      </div>
      
      <check-input label="I agree to the terms and conditions" name="terms" required="true"></check-input>
      <hr />
      <input class="btn btn-primary" type="submit" value="Register">
    </form>
  `,
  methods: {
    addressSame() {
      console.log("addressSame clicked");
      if (this.addressSameChecked === true) {
        console.log("addressSameChecked is true");
        this.addressSameChecked = false;
      } else {
        console.log("was not ckecked on click");
        this.addressSameChecked = true;
      }
    },
  },
  components: {
    "text-input": TextInput,
    "select-input": SelectInput,
    "check-input": CheckInput,
  },
  mounted() {
    (() => {
      "use strict";

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll(".needs-validation");

      // Loop over them and prevent submission
      Array.from(forms).forEach((form) => {
        form.addEventListener(
          "submit",
          (event) => {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add("was-validated");
          },
          false
        );
      });
    })();
  },
};
