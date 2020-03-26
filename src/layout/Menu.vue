<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="resume">简历</el-menu-item>
      <el-menu-item index="work">工作经历</el-menu-item>
      <el-menu-item index="project">项目经验</el-menu-item>
      <el-menu-item index="skill">专业技能</el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'layout-menu',
  data() {
    return {
      activeIndex: 'reuseme'
    };
  },
  methods: {
    handleSelect(index) {
      console.log('handleSelect -> index', index);
      this.$router.push({path:index})
    }
  }
};
</script>

<style>

</style>