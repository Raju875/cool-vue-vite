export default {
  data() {
    return {
      clickCounter: 0,
    };
  },

  methods: {
    clickCounterMethod() {
      this.clickCounter += 1;
    },
  },
};
