<template>
    <div class="contact">
        <Summary 
          :contactSummary="contactSummary" 
          :updateAction="updateAction"
        ></Summary>
        <router-view></router-view>
        <ContactList
          @getContactInfos="getContactSummary"
          @getUpdateAction="getUpdateAction"
        ></ContactList>
    </div>
</template>

<script lang="ts">

import ContactList from '../components/contact/List.vue';
import Summary from '../components/contact/Summary.vue'

// import CounterrMixin from "../mixins/counter.js";

export default {
  components: {
    ContactList,
    Summary, 
  },
  // mixins: [CounterrMixin],

  data() {
    return {
      msg: "Hi! I am vue cli.",
      statusUpdateMessage: "Status updated successfully.",
      contactSummary: {
        totalUsers: 0,
        blockUsers: 0,
        unblockUsers: 0
      },
      updateAction: {
        actionId: '',
        isBlocked: '',
        clickCounter: 0,
      },
    };
  },

  methods: {
    getContactSummary(data) {
      let blockCout = 0
      let unblockCount = 0;
      data.forEach(function (info, index) {
        info.isBlocked ? blockCout+=1 : unblockCount+=1
      });
      this.contactSummary.blockUsers = blockCout;
      this.contactSummary.unblockUsers = unblockCount;
      this.contactSummary.totalUsers = data.length;
    },

    getUpdateAction(data) {
      this.updateAction.actionId = data.id; 
      this.updateAction.isBlocked = data.isBlocked; 
      this.updateAction.clickCounter+=1; 
    },
  },

  provide() {
    return {
      provideMessage: this.statusUpdateMessage
    }
  },
};
</script>