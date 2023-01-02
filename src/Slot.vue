<template>
  <div class="card">
    <div class="card-title">
      <h3 class="title">Slot Example</h3>
    </div>
    <div class="card-body">
      <slot name="company" :textFromChildSlot="'I\'m text from child component via slot!'"></slot>
      <slot></slot>
      <slot name="company-location"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    //   textFromChildSlot: "I'm text from child component via slot!",
    };
  },
};
</script>

<style scoped>
.card {
  border: 1px solid black;
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