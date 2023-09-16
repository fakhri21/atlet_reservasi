// Text input field component
const textInput = {
  props: {
    field: { required: true },
    data: { required: true }
  },
    
  template: `
  <div class="form-group">
    <label>{{ field.label }}</label>
    <b-form-input v-model="data.value"
                type="text"
                :placeholder="field.placeholder"
                required
    >
    </b-form-input>
  </div>
  `
};

// Text input field component
const textAreainput = {
  props: {
    field: { required: true },
    data: { required: true }
  },
    
  template: `
  <div class="form-group">
    <label>{{ field.label }}</label>
      <b-form-textarea
      v-model="data.value"
      :placeholder="field.placeholder"
      rows="3"
      max-rows="6">
      </b-form-textarea>
  </div>
  `
};

// Email input field component
const emailInput = {
  props: {
    field: { required: true },
    data: { required: true }
  },
    
  template: `
  <div class="form-group">
    <label>{{ field.label }}</label>
    <b-form-input v-model="data.value"
                type="email"
                :placeholder="field.placeholder"
    >
    </b-form-input>
  </div>
  `
};

// Password input field component
const passwordInput = {
  props: {
    field: { required: true },
    data: { required: true }
  },
    
  template: `
  <div class="form-group">
    <label>{{ field.label }}</label>
    <b-form-input v-model="data.value"
                type="passsword"
                :placeholder="field.placeholder"
    >
    </b-form-input>
  </div>
  `
};

// Checkbox input field component
const checkboxInput = {
  props: {
    field: { required: true },
    data: { required: true }
  },
  
  template: `
  <div class="form-group">
    <label>{{ field.label }}</label>
    <label class="form-control">
      <b-form-checkbox v-model="data.value">
      {{ field.placeholder }}
      </b-form-checkbox>
    </label>
  </div>
  `
};


// select input field component
const selectInput = {
  props: {
    field: { required: true },
    data: { required: true }
  },
  
  template: `
  <div class="form-group">
    <label>{{ field.label }}</label>
      <b-form-select v-model="data.value" :options="field.options">
      {{ field.placeholder }}
      </b-form-select>
  </div>
  `
};

// Dynamic form component
const vForm = {
  template: `
  <div class="VueForm">
    <template v-for="field in schema.fields">
      <component :is="field.type" :field="field" :data.sync="data[field.name]"></component>
    </template>
  </div>
  `,
  
  components: {
    textInput: textInput,
    emailInput: emailInput,
    checkboxInput: checkboxInput,
    selectInput: selectInput,
    textAreainput: textAreainput
  },
  
  props: {
    schema: { required: true },
    data: { required: true }
  }
};

Vue.component('v-form', vForm);

