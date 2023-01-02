<template>
  <div>
    <h3>
      {{ msg }}
    </h3>
    <Contact :one="'one'" :two="'two'" :contact-infos="infos"></Contact>
  </div>
</template>

<script>
import ContactDetails from "./ContactDetails.vue";

export default {
  components: {
    Contact: ContactDetails,
  },

  data() {
    return {
      msg: "Hi! I am vue cli.",
      infos: [
        {
          name: "Ali Azgar Rana",
          age: 30,
          occupation: "Businessman",
          phone: "017",
        },
        {
          name: "Mohammad Al Amin Raju Dottry",
          age: 29,
          occupation: "Software Engineer",
          phone: "016",
        },
        {
          name: "Ariful Islam Raj",
          age: 19,
          occupation: "Student",
          phone: "018",
        },
        {
          name: "Ali Azgar Rana",
          age: 30,
          occupation: "Businessman",
          phone: "017",
        },
        {
          name: "Al Amin Raju",
          age: 29,
          occupation: "Software Engineer",
          phone: "016",
        },
        {
          name: "Ariful Islam Raj",
          age: 19,
          occupation: "Student",
          phone: "018",
        },
        {
          name: "Ali Azgar Rana",
          age: 30,
          occupation: "Businessman",
          phone: "017",
        },
        {
          name: "Al Amin Raju",
          age: 29,
          occupation: "Software Engineer",
          phone: "016",
        },
        {
          name: "Ariful Islam Raj",
          age: 19,
          occupation: "Student",
          phone: "018",
        },
        {
          name: "Ali Azgar Rana",
          age: 30,
          occupation: "Businessman",
          phone: "017",
        },
        {
          name: "Al Amin Raju",
          age: 29,
          occupation: "Software Engineer",
          phone: "016",
        },
        {
          name: "Ariful Islam Raj",
          age: 19,
          occupation: "Student",
          phone: "018",
        },
        {
          name: "Ali Azgar Rana",
          age: 30,
          occupation: "Businessman",
          phone: "017",
        },
        {
          name: "Al Amin Raju",
          age: 29,
          occupation: "Software Engineer",
          phone: "016",
        },
        {
          name: "Ariful Islam Raj",
          age: 19,
          occupation: "Student",
          phone: "018",
        },
        {
          name: "Ali Azgar Rana",
          age: 30,
          occupation: "Businessman",
          phone: "017",
        },
        {
          name: "Al Amin Raju",
          age: 29,
          occupation: "Software Engineer",
          phone: "016",
        },
        {
          name: "Ariful Islam Raj",
          age: 19,
          occupation: "Student",
          phone: "018",
        },
      ],
    };
  },
};
</script>
