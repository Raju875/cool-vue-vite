<template>
 <div class="row">
      <div class="card col" v-if="detailInfo">
        <div class="card-title">
          <h3 class="title">{{ detailInfo.name }}</h3>
        </div>
        <div class="card-body">
          <li>Age: {{ detailInfo.age }}</li>
          <li>Occupation: {{ detailInfo.occupation }}</li>
          <li>Phone: {{ detailInfo.phone }}</li>
          <li>Blocked: {{ detailInfo.isBlocked ? 'Yes' : 'No'}}</li>
          <li>
            <div style="text-align: center">
                <router-link target="_blank" :to="{ name: 'contact.details', params: {id: detailInfo.id, slug: slugUrl} }">
                    <button>Details</button>
                </router-link>
                <GoBack/>
                <router-link :to="{ name: 'contact.list' }">
                    <button>Close</button>
                </router-link>
            </div>
        </li>
        </div>
      </div>
    </div>
</template>

<script>
import dataSource from '../../data.json';
import GoBack from '../GoBack.vue';

export default {
  name: 'ContactCardDetails',
  components: {
    GoBack
  },
    props: {
    id: {
      type: Number,
      }
  },
  data() {
    return {
      detailInfo: '',
    };
    },

    methods: {
        getCardDetails() {
            this.detailInfo = dataSource.infos.find(info => info.id === this.id);
            if (!this.detailInfo) {
            console.log('not found');
            this.$router.push({ name: 'notFound' });
            }
        }
    },

    computed: {
        slugUrl() {
            return this.detailInfo.name.toLowerCase()
                .replace(/[^\w ]+/g, "")
                .replace(/ +/g, "-");
        },
    },
    
    watch: {
        id() {
            this.getCardDetails();
        },
    },

    created() {
        this.getCardDetails();
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
  overflow-x: hidden;
}
.card-body {
  background: #eac4f1;
  text-align: left;
  padding: 2px 10px;
  list-style: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
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
</style>
