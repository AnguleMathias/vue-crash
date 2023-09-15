<template>
  <form
    @submit.prevent="submit"
    :ref="name"
    :event="event"
    autocomplete="off"
    :method="method"
    :action="action"
    class="needs-validation"
    novalidate
  >
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "FormTag",
  props: ["name", "event", "method", "action"],
  methods: {
    submit() {
      let myForm = this.$refs[this.$props.name];

      if (myForm.checkValidity()) {
        console.log("my event name", this.$props["event"]);
        console.log("Name", this.$props.name);
        this.$emit(this.$props["event"]);
      }
      myForm.classList.add("was-validated");
    },
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
</script>