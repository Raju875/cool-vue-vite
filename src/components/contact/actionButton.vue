<template>
  <div style="text-align: center">
    <button @click="getUpdateStatus(info)" v-if="info.isBlocked">
      Unblock
    </button>
    <button @click="getUpdateStatus(info)" v-else>Block</button>
      <!-- <router-link :to="{ name: 'contact.details', params: {id: info.id, slug: slugUrl} }"> -->
      <router-link :to="{ name: 'contact.cardDetails', params: {id: info.id} }">
      <button>Details</button>
    </router-link>
  </div>
</template>

<script>
export default {
  inject: {
    getUpdateAction: {
      from: 'getUpdateAction'
    }
  },
  props: {
    info: {
      type: Object,
    },
  },

  data() {
    return {
      updateInfoByStatus : 'one',
    }
  },

  methods: {
    getUpdateStatus(data) {
      data.isBlocked = !data.isBlocked;
      this.updateInfoByStatus = data;
      this.getUpdateAction(data);
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