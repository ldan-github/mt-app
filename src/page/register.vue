<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a href="" class="site-logo"></a>
        <div class="login">
          <span class="bold">已有美团账号</span>
          <router-link :to="{ name: 'login' }">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="registerForm"
        status-icon
        :rules="rules"
        ref="registerForm"
        label-width="100px"
        class="demo-registerForm"
      >
        <el-form-item label="手机号" prop="userName">
          <el-input
            type="text"
            v-model.number="registerForm.userName"
          ></el-input>
        </el-form-item>
        <el-form-item :show-message="false" label="密码" prop="password">
          <el-input
            type="password"
            v-model="registerForm.password"
            autocomplete="off"
            @input="input"
          ></el-input>
          <div class="pw-strength" v-show="registerForm.password">
            <div :class="['bar', strength]"></div>
            <div class="letter">
              <span>弱</span>
              <span>一般</span>
              <span>强</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input
            type="password"
            v-model="registerForm.rePassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('registerForm')"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <footer class="footer">
      <p>
        ©2020 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    var validateUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号'))
      } else {
        if (
          this.registerForm.userName !== '' &&
          !/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(this.registerForm.userName)
        ) {
          callback(new Error('请输入正确格式手机号'))
        }
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      registerForm: {
        userName: '',
        password: '',
        rePassword: ''
      },
      strength: '',
      rules: {
        password: [{ validator: validatePass, trigger: 'blur' }],
        rePassword: [{ validator: validatePass2, trigger: 'blur' }],
        userName: [{ validator: validateUserName, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http('/api/meituan/register', {
            params: this.registerForm
          }).then((res) => {
            if (res.status === 'success') {
              alert(res.msg)
              this.$router.push({ name: 'login' })
            } else {
              alert(res.msg)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    input () {
      if (
        this.registerForm.password !== '' &&
        /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*?\. ])\S*$/.test(
          this.registerForm.password
        )
      ) {
        this.strength = 'strong'
      } else if (
        this.registerForm.password !== '' &&
        /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[a-z|A-Z])\S*$/.test(
          this.registerForm.password
        )
      ) {
        this.strength = 'normal'
      } else {
        this.strength = 'week'
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/register/index.scss';
</style>
