<template>
  <div>
    <el-row type="flex" justify="center" >
      <el-col :span=5 >
        <el-card class="login-card">
          <div slot="header" class="clearfix">
            <span class="sso-title">SSO统一登录平台</span>
          </div>
          <el-form ref="loginForm" :model="loginForm" :rules="loginFormRules">
            <el-form-item prop="email">
              <el-input v-model="loginForm.email" placeholder="请输入邮箱">
              </el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-input v-model="loginForm.code" type="password" placeholder="请输入密码">
                </el-input>
            </el-form-item>
            <el-form-item>
               <el-button type="primary"
               @click="toLogin('loginForm')">登录</el-button>
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
    let checkphone = (rule, value, callback) => {
      if (!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ .test(value)) {
        return callback(new Error("请输入正确邮箱账号"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        email: "", // 电话号码
        code: "" // 验证码
      },
      loginFormRules: {
        email: [
          { required: true, message: "请输入邮箱账号", trigger: "blur" },
          { validator: checkphone, trigger: "blur" }
        ],
        code: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods:{
      toLogin (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login(this.loginForm)
        } else {
          return false
        }
      })
    }
  }
};
</script>

<style scoped>
.login-card {
  width: 400px;
  height: 300px;
  margin-top: 50px;
}
.sso-title {
  font-family: Helvetica;
  font-weight: bold;
}
.register-button {
  margin-left: 80px;
}
</style>

