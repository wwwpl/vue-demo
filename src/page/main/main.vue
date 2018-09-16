<template>
 <el-container class="main-main"  direction="vertical">
  <el-header height="80px">
		<h2>SSO后台管理</h2>
  </el-header>
  <el-container class="aside-left">
    <el-aside >
    <el-menu  :default-active="defaultActive"  @open="handleOpen" @close="handleClose" router>
   <el-menu-item index="mainFirstPage">
    <span slot="title">首页</span>
  </el-menu-item>
  <el-submenu index="2">
    <template slot="title">
      <span slot="title">数据列表</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="1-1">用户列表</el-menu-item>
      <el-menu-item index="1-2">应用列表</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
  </el-menu>
    </el-aside>
    <el-main>
      <keep-alive>
				    <router-view></router-view>
				</keep-alive>
    </el-main>
  </el-container>
</el-container>
</template>
<script>
export default {
  computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		}
};
</script>
 <style  scoped>
.el-header {
  background-color: #409eff;
  color: white;
  height: 200px;
  align-content: center;
}
.el-header h2 {
  margin-left: 80px;
  width: 30%;
}
.el-aside{
  width:"200px";
}
.el-main {
  background-color:#EAEFF5;
}
.el-dropdown {
  cursor: pointer;
  float: right;
}
.el-dropdown-link {
  float: right;
}
.el-dropdown-link img {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #fff;
}
.header_container {
  background-color: #eff2f7;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}
.aside-left{
  margin-top: 80px;
  height: 100%;
  width: 100%;
  position:fixed;
}
</style>


