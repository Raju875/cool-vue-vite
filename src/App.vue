<template>
  <div>
    <h3 style="margin: 5px">
      {{ msg }}
    </h3>
    <Contact :contact-infos="infos"></Contact>
  </div>
</template>

<script lang="ts">
import ContactDetails from "./ContactDetails.vue";

export default {
  components: {
    Contact: ContactDetails,
  },
  data() {
    return {
      msg: "Hi! I am vue cli.",
      statusUpdateMessage: "Status updated successfully.",
      infos: [
        {
          id: 1,
          name: "Ali Azgar Rana",
          age: 30,
          occupation: "Businessman",
          phone: "017",
          isBlocked: false,
        },
        {
          id: 2,
          name: "Mohammad Al Amin Raju Dottry",
          age: 29,
          occupation: "Software Engineer",
          phone: "016",
          isBlocked: false,
        },
        {
          id: 3,
          name: "Ariful Islam Raj",
          age: 19,
          occupation: "Student",
          phone: "018",
          isBlocked: false,
        },
        {
          id: 4,
          name: "Ali Azgar Rana",
          age: 30,
          occupation: "Businessman",
          phone: "017",
          isBlocked: false,
        },
        {
          id: 5,
          name: "Al Amin Raju",
          age: 29,
          occupation: "Software Engineer",
          phone: "016",
          isBlocked: false,
        },
        {
          id: 6,
          name: "Ariful Islam Raj",
          age: 19,
          occupation: "Student",
          phone: "018",
          isBlocked: false,
        },
        {
          id: 7,
          name: "Ali Azgar Rana",
          age: 30,
          occupation: "Businessman",
          phone: "017",
          isBlocked: false,
        },
        {
          id: 8,
          name: "Al Amin Raju",
          age: 29,
          occupation: "Software Engineer",
          phone: "016",
          isBlocked: false,
        },
        {
          id: 9,
          name: "Ariful Islam Raj",
          age: 19,
          occupation: "Student",
          phone: "018",
          isBlocked: false,
        },
        {
          id: 10,
          name: "Ali Azgar Rana",
          age: 30,
          occupation: "Businessman",
          phone: "017",
          isBlocked: false,
        },
        {
          id: 11,
          name: "Al Amin Raju",
          age: 29,
          occupation: "Software Engineer",
          phone: "016",
          isBlocked: false,
        },
        {
          id: 12,
          name: "Ariful Islam Raj",
          age: 19,
          occupation: "Student",
          phone: "018",
          isBlocked: false,
        },
        {
          id: 13,
          name: "Ali Azgar Rana",
          age: 30,
          occupation: "Businessman",
          phone: "017",
          isBlocked: false,
        },
        {
          id: 14,
          name: "Al Amin Raju",
          age: 29,
          occupation: "Software Engineer",
          phone: "016",
          isBlocked: false,
        },
        {
          id: 15,
          name: "Ariful Islam Raj",
          age: 19,
          occupation: "Student",
          phone: "018",
          isBlocked: false,
        },
        {
          id: 16,
          name: "Ali Azgar Rana",
          age: 30,
          occupation: "Businessman",
          phone: "017",
          isBlocked: false,
        },
        {
          id: 17,
          name: "Al Amin Raju",
          age: 29,
          occupation: "Software Engineer",
          phone: "016",
          isBlocked: false,
        },
        {
          id: 18,
          name: "Ariful Islam Raj",
          age: 19,
          occupation: "Student",
          phone: "018",
          isBlocked: false,
        },
      ],
    };
  },

  provide() {
    return {
      provideMessage: this.statusUpdateMessage
    }
  },
};
</script>
