<template>
  <GoBack/>
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
        </div>
      </div>
    </div>
</template>

<script>
import dataSource from '../../data.json';
import GoBack from '../GoBack.vue';

export default {
  name: 'ContactDetails',
  components: {
    GoBack
  },
    props: {
    id: {
      type: Number,
      },
    slug: {
      type: String,
    },
  },
  data() {
    return {
      detailInfo: '',
    };
  },
  created() {
    console.log(this.slug)
    this.detailInfo = dataSource.infos.find(info => info.id === this.id);
    if (!this.detailInfo) {
      console.log('not found');
      this.$router.push({ name: 'notFound' });
    }
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
