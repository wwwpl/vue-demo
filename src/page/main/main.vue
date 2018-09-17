<template>
 <el-container class="main-main"  direction="vertical">
  <el-header height="80px">
    <div class="news_title">
        SSO后台管理
      </div>
    <el-dropdown trigger="click">
  <span class="el-dropdown-link">
    <span class="user-name">admin<i class="el-icon-arrow-down el-icon--right"></i></span>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>个人信息</el-dropdown-item>
    <el-dropdown-item>退出</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
  </el-header>
  <el-container class="aside-left">
    <el-aside >
    <el-menu  :default-active="defaultActive" router>
   <el-menu-item index="mainFirstPage">
    <span slot="title">首页</span>
  </el-menu-item>
  <el-submenu index="2" >
    <template slot="title">
      <span slot="title">数据列表</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="mainUserPage">用户列表</el-menu-item>
      <el-menu-item index="mainApplyPage">应用列表</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
  </el-menu>
    </el-aside>
    <el-main>
      <div class="main-header">
        <el-breadcrumb class="main-header-bread" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-for="(item)  in levelList" :key="item.path" v-if="item.meta.title">
            <router-link :to="item.redirect||item.path">{{item.meta.title}}</router-link>
          </el-breadcrumb-item>
       </el-breadcrumb>
      </div>
			<router-view/>
    </el-main>
  </el-container>
</el-container>
</template>
<script>
export default {
  created(){
    this.getBreadcrumb()
  },
  data() {
    return {
      levelList:null
    };
  },
  computed: {
    defaultActive: function() {
      return this.$route.path.replace("/", "");
    }
  },

  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name)
      this.levelList = matched;
    }
  },
  mounted() {
    this.getBreadcrumb();
  },
  watch: {
    $route(){
      this.getBreadcrumb()
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
.el-aside {
  width: "200px";
  border-right:solid 1px #e6e6e6;
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
.aside-left {
  margin-top: 80px;
  height: 100%;
  width: 100%;
  position: fixed;
}
.main-header {
  background-color: white;
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #e6e6e6;
}
.el-main {
  padding: 0;
  margin: 0;
}
.main-header-bread {
  margin-left: 10px;
}
.news_title {
  background: #409eff;
  height: 100%;
  line-height: 75px;
  font-size: 25px;
  color: #fff;
  text-align: center;
  width: 200px;
  border-right: solid 1px white;
  float:left;
}
.user-name{
  color: #fff;
  font-size: 18px;
  height: 100%;
  line-height: 75px;
  margin-right: 20px;
}
</style>


