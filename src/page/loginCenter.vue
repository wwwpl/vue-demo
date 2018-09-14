<template>
  <div>
    <el-row type="flex" justify="center" >
      <el-col :span=5 >
        <el-card class="login-card">
          <div slot="header" class="clearfix">
            <span class="sso-title">SSO统一登录平台</span>
          </div>
          <el-form>
            <el-form-item>
              <el-input v-model="account" placeholder="请输入邮箱">
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="password" type="password" placeholder="请输入密码">
                </el-input>
            </el-form-item>
            <el-form-item>
               <el-button type="primary">登录</el-button>
               <el-button class="register-button">注册</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    account: "";
    password: "";
  }
};
</script>

<style scoped>
.login-card {
  width: 400px;
  height: 300px;
  margin-top: 50px;
}
.sso-title{
  font-family: Helvetica;
  font-weight:bold;
}
.register-button{
  margin-left: 80px;
}
</style>

