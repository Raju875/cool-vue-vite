<template>
  <div style="text-align: center">
    <button @click="getUpdateStatus(info)" v-if="info.isBlocked">
      Unblock
    </button>
    <button @click="getUpdateStatus(info)" v-else>Block</button>
      <router-link :to="{ name: 'contact.details', params: {id: info.id, slug: slugUrl} }">
      <button>Details</button>
    </router-link>
  </div>
</template>

<script>
export default {
  emits: ['updateStatusAction'],
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
    getUpdateStatus(data) {
      data.isBlocked = !data.isBlocked;
      this.$emit('updateStatusAction', data);
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