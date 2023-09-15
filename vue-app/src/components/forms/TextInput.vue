<template>
  <div class="mb-3">
    <label :for="name" class="form-label">{{ label }}</label>
    <input
      :name="name"
      :type="type"
      :class="['form-control']"
      :placeholder="placeholder"
      :required="required"
      :min="min"
      :max="max"
      :value="value"
      :autocomplete="name + '-new'"
    />
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    name: String,
    type: String,
    label: String,
    placeholder: String,
    required: String,
    min: String,
    max: String,
    value: String,
  },
};
</script>