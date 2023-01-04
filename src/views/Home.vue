<template>
    <div class="home">
            <h3 style="margin: 5px">
      {{ msg }}
    </h3>
    </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hi! I am vue cli.",
    };
  }
};
</script>