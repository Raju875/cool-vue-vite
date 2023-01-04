<template>
    <div class="contact">
        <ContactList :contact-infos="infos"></ContactList>
    </div>
</template>

<script lang="ts">
import dataSource from '../data.json';
import ContactList from '../components/contact/List.vue';

export default {
  components: {
    ContactList: ContactList,
  },
  data() {
    return {
      msg: "Hi! I am vue cli.",
      statusUpdateMessage: "Status updated successfully.",
      infos: dataSource.infos,
    };
  },

  provide() {
    return {
      provideMessage: this.statusUpdateMessage
    }
  },
};
</script>