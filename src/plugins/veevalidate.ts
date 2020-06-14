import Vue from "vue";
import VeeValidate from "vee-validate";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules";

// The types of validators used in the project
extend("required", {
  ...required,
  message: "This field is required"
});

extend("email", {
  ...email,
  message: "Valid email is required"
});

extend("min", {
  ...min,
  message: "Minimum 6 characters"
});

// Vue.use(VeeValidate);
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
export default VeeValidate;
