<template>
  <div>
    <Slot>
      <template #[slotName.slot1]="slotProps">
        {{ slotProps.textFromChildSlot }}
        <br />
        Name: {{ company.name }}
      </template>
      <br />
      URL: <a target="blank" :href="company.url">{{ company.url }}</a>
      <br />
      <template #[slotName.slot3]>Location: {{ company.location }}</template>
    </Slot>

    <div class="row">
      <div style="margin: 5px;">
        <h3>{{ contactMessage }}</h3>
        <h4>Total: {{ contactInfos.length }}</h4>
        <h4>Block: {{ blockUsers.length }}</h4>
        <h4>Unblock: {{ unblockUsers.length }}</h4>
        <h4>Click Counter: {{ clickCounter }}</h4>
      </div>
      <div class="card col-2" v-for="info in contactInfos" :key="info.id">
        <div class="card-title">
          <h3 class="title">{{ info.name }}</h3>
        </div>
        <div class="card-body">
          <li>{{ info.age }}</li>
          <li>{{ info.occupation }}</li>
          <li>{{ info.phone }}</li>

          <Emit :info="info" @block="block" @unblock="unblock"></Emit>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slot from "./Slot.vue";
import Emit from "./Button.vue";
import CounterrMixin from "../../mixins/counter.js"

export default {
  components: {
    Slot: Slot,
    Emit: Emit,
  },

  mixins: [CounterrMixin],

  props: {
    contactInfos: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      blockUsers: [],
      unblockUsers: [],
      contactMessage: "All contact details",
      slotName: {
        slot1: "company",
        slot2: "default",
        slot3: "company-location",
      },
      company: {
        name: "CrowdBotics",
        url: "https://www.crowdbotics.com/",
        location: "USA",
      },
    };
  },

  methods: {
    block(data) {
      data.isBlocked = true; // update status
      let unblock_index = this.unblockUsers.indexOf(data.id);
      this.unblockUsers.splice(unblock_index, 1); // remove one item
      this.blockUsers.push(data.id); // add one item
      this.clickCounterMethod(); // status change count
    },
    unblock(data) {
      data.isBlocked = false; // update status
      let block_index = this.blockUsers.indexOf(data.id);
      this.blockUsers.splice(block_index, 1); // remove one item
      this.unblockUsers.push(data.id); // add one item
      this.clickCounterMethod(); // status change count
    },
  },

  mounted() {
    let block = [];
    let unblock = [];
    this.contactInfos.forEach(function (info, index) {
      if (info.isBlocked) {
        block.push(info.id);
      } else if (!info.isBlocked) {
        unblock.push(info.id);
      }
    });
    this.blockUsers = block;
    this.unblockUsers = unblock;
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
  max-height: 75px;
  /* overflow: auto; */
  overflow-y: hidden;
}

/* grid system start */
.row::after {
  content: "";
  clear: both;
  display: table;
}

[class*="col-"] {
  float: left;
  padding: 15px;
  border: 1px solid red;
}

.col-1 {
  width: 8.33%;
}
.col-2 {
  width: 16.66%;
}
.col-3 {
  width: 25%;
}
.col-4 {
  width: 33.33%;
}
.col-5 {
  width: 41.66%;
}
.col-6 {
  width: 50%;
}
.col-7 {
  width: 58.33%;
}
.col-8 {
  width: 66.66%;
}
.col-9 {
  width: 75%;
}
.col-10 {
  width: 83.33%;
}
.col-11 {
  width: 91.66%;
}
.col-12 {
  width: 100%;
}
/* grid system end */
</style>
