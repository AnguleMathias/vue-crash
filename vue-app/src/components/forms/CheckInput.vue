<template>
  <div class="mb-3 form-check">
    <input
      :id="name"
      :name="name"
      :checked="checked"
      type="checkbox"
      class="form-check-input"
      :required="required"
      :value="value"
    />
    <label :for="name" class="form-check-label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "CheckInput",
  props: ["name", "label", "required", "value", "checked"],
};
</script>