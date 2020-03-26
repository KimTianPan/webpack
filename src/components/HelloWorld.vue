<template>
  <div>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    {{msg}}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: this.$store.state.test.data[0]
    };
  },
  mounted() {
    console.log(' this.$store.state.test.data[0]', this.$get('/api/get',{}));
    console.log(' this.$store.state.test.data[0]', this.$post('/api/post',{}));
    console.log(' this.$store.state.test.data[0]', this);
    setTimeout(() => {
      // this.$store.dispatch('testFn', ['aaa']);
      this.testFn(['aaa'])
      this.msg = this.$store.state.test.data[0];
      console.log('mounted -> this.testFn()', this.testFn(['aaa']));
    }, 3000);
  },
  computed: {
    // ...mapGetters(['testFn'])
  },
  methods: {
    ...mapActions(['testFn'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
