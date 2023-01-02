<template>
  <div style="text-align: center">
    <button @click="$emit('unblock', info)" v-if="info.isBlocked">
      Unblock
    </button>
    <button @click="$emit('block', info)" v-else>Block</button>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 4px;
  margin-right: 4px;
}
</style>