<template>
<el-container>
    <el-header class="head" height="80px">
      <h2>SSO统一登录平台</h2>
    </el-header>
    <el-main>
      <el-row type="flex" justify="center" >
      <el-col :span=6 >
        <el-card class="login-card">
          <div slot="header" class="clearfix" align="center">
            <span class="sso-title">SSO统一登录平台</span>
          </div>
          <el-form ref="loginForm" :model="loginForm" :rules="loginFormRules">
            <el-form-item prop="email">
              <el-input v-model="loginForm.email" placeholder="请输入邮箱">
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="loginForm.password" type="password" placeholder="请输入密码">
                </el-input>
            </el-form-item>
            <el-form-item align="center">
               <el-button type="primary"
               class="login-button"
               @click="sendRequest('loginForm')">登录</el-button>
               <el-button class="register-button">注册</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </el-main>
  </el-container>
</template>

<script>
import { login } from "@/api/user";
export default {
  name: "login",
  data() {
    //表单验证
    let checkphone = (rule, value, callback) => {
      if (!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(value)) {
        return callback(new Error("请输入正确邮箱账号"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        email: "673391104@qq.com", // 邮箱账号
        password: "123" // 密码
      },
      loginFormRules: {
        email: [
          { required: true, message: "请输入邮箱账号", trigger: "blur" },
          { validator: checkphone, trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    async sendRequest() {
      let res = await login(this.loginForm);
      if (res) {
        this.$message({
          message: res,
          type: "success"
        });
        this.$router.push({path: '/main'});
      }
    }
  }
};
</script>

<style scoped>
.el-card__header {
  align-content: center;
}
.login-card {
  width: 400px;
  height: 300px;
  margin-top: 50px;
}
.sso-title {
  font-family: Helvetica;
  font-weight: bold;
}
.login-button {
  margin-right: 20px;
}
.el-header h2 {
  margin-left: 100px;
}
.head {
  background-color: #409eff;
  color: white;
  height: 200px;
}
</style>

