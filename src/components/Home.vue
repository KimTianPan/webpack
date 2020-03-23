<template>
  <div>home
    <div>{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      msg:this.$store.state.test.data[0]
    }
  }
};
</script>

<style>
</style>