<template>
  <el-row class="header">
    <el-col :span="16">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
    </el-col>
    <el-col :span="8">
      <!--<div class="grid-content bg-purple-light">-->
        <!--<img src="../../build/logo.png" height="55px"></img>-->
      <!--</div>-->
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><img src="../../build/logo.png" height="55px"></img></el-menu-item>
        <el-menu-item index="2" @click="login">登录</el-menu-item>
        <el-menu-item index="3">注册</el-menu-item>
        <el-menu-item index="4">注销</el-menu-item>
      </el-menu>
    </el-col>

    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>
  </el-row>

</template>
 <script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      dialogTableVisible: false,
      gridData: []
    };
  },
  computed: {
    slideIndex() {
      return this.$store.state.slideIndex;
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    login() {
      console.log("登录了");
      this.dialogTableVisible = true;
      console.log(this.$store.state.slideIndex);
    }
  }
};
</script>
<style scoped>
.el-menu.el-menu--horizontal {
  border-bottom: 0;
}
.header {
  border-bottom: 1px solid #e6e6e6;
}
</style>
