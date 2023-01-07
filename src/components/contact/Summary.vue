<template>
    <div class="card">
      <div class="card-title">
        <h3 class="title">Summary</h3>
      </div>
      <div class="card-body">
        <li>Total: {{ contactSummary.totalUsers }}</li>
        <li>Block: {{ contactSummary.blockUsers }}</li>
        <li>Unblock: {{ contactSummary.unblockUsers }}</li>
        <li>Click Counter: {{ counter }}</li>
      </div>
    </div>
</template>

<script>

export default {
  props: {
    contactSummary: {
      type: Object,
      required: true,
    },
    updateAction: {
      type: Object,
      required: true,
    },
  },

  computed: {
    counter() {
      return this.updateAction.clickCounter;
    }
  },
  watch: {
    counter() {
      if (this.updateAction.isBlocked) {
        this.contactSummary.blockUsers += 1;
        this.contactSummary.unblockUsers -= 1;
      }
      else {
        this.contactSummary.blockUsers -= 1;
        this.contactSummary.unblockUsers += 1;      
      }
    }
  },
}
</script>

<style scoped>.card {
  display: inline-block;
  border-radius: 8px;
  margin: 5px;
}
.title {
  margin: 0px;
  padding: 5px;
}
.card-title {
  /* display: inline-block; */
  background: #c10fed;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  max-width: 222px;
  max-height: 32px;
  overflow-x: hidden;
}
.card-body {
  background: #eac4f1;
  text-align: left;
  padding: 2px 10px;
  list-style: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  max-width: 202px;
  max-height: 110px;
  /* overflow: auto; */
  overflow-y: hidden;
}
</style>