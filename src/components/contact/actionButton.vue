<template>
  <div style="text-align: center">
    <button @click="$emit('unblock', info)" v-if="info.isBlocked">
      Unblock
    </button>
    <button @click="provideInjectConsole(info)" v-else>Block</button>
    <button>
      <router-link :to="{ name: 'contact.details', params: {id: info.id, slug: slugUrl} }">Details</router-link>
    </button>
  </div>
</template>

<script>
export default {
  emits: ['unblock', 'block'],
  inject: {
    injectlocalMessage: {
      from: 'provideMessage'
    }
  },
  props: {
    info: {
      type: Object,
    },
  },

  methods: {
    provideInjectConsole(data) {
      this.$emit('block', data);
      console.log(this.injectlocalMessage);
      console.log("(" + data.id + ") " + data.name);
    },
  },

  computed: {
    slugUrl() {
      return this.info.name.toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
    }
  }
};
</script>

<style scoped>
button {
  margin-left: 4px;
  margin-right: 4px;
}
</style>