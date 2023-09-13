const TextInput = {
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
  template: `
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
  `,
};

const SelectInput = {
  props: ["items", "name", "label", "required"],
  template: `
    <div class="mb-3">
      <label :for="name" class="form-label">{{ label }}</label>
      <select :id="name" class="form-select" :name="name" :required="required">
        <option v-for="option in items" :value="option.value">{{ option.text }}</option>
      </select>
    </div>
  `,
};

const CheckInput = {
  props: ["name", "label", "required", "value"],
  template: `
    <div class="mb-3 form-check">
      <input :id="name" :name="name" type="checkbox" class="form-check-input" :required="required" :value="value">
      <label :for="name" class="form-check-label">{{ label }}</label>
    </div>
  `,
}
