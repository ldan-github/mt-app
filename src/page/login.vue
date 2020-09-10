<template>
  <div class="page-login">
    <div class="login-header">
      <a class="logo" href="http://www.meituan.com"></a>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        />
      </div>
      <div :class="['form', userName || passWord ? '' : 'error']">
        <div class="tips" v-if="error">
          {{ error }}
        </div>
        <p>
          <span>账号登陆</span>
          <!-- <span>手机登录</span> -->
        </p>
        <el-input
          @blur="blur(1)"
          placeholder="手机号"
          prefix-icon="profile"
          v-model="userName"
        >
        </el-input>
        <el-input
          @blur="blur(2)"
          type="password"
          placeholder="请输入密码"
          prefix-icon="el-icon-unlock"
          v-model="passWord"
          show-password
          :disabled="result"
        >
        </el-input>
        <div class="foot">
          <a>忘记密码?</a>
        </div>
        <el-button class="btn-login" @click="submit">登录</el-button>
        <p class="reg">
          <span>还没有账号?</span>
          <router-link :to="{ name: 'register' }">立即注册</router-link>
        </p>
        <p class="self" style="">
          提示：未注册美团账号的手机号，登录时将自动注册美团账号，且代表您已同意<a
            href="https://rules-center.meituan.com/rules-detail/4"
            class="j-terms"
            target="_blank"
            >《美团点评用户服务协议》</a
          ><a
            href="https://rules-center.meituan.com/rules-detail/2"
            class="j-terms"
            target="_blank"
            >《美团点评隐私政策》</a
          >
        </p>
        <div class="oauth-wrapper J-oauth-wrapper">
          <h3 class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </h3>
          <div class="oauth cf">
            <span
              class="oauth__link oauth__link--qq third-login-btn"
              data-href="/account/connect/tencent"
              target="_blank"
              id="J-third-tencent"
            ></span>
            <span
              class="oauth__link oauth__link--weibo third-login-btn"
              data-href="/account/connect/sina"
              target="_blank"
              id="J-third-sina"
            ></span>
          </div>
        </div>
      </div>
    </div>
    <footer class="login-footer">
      <ul>
        <li><a href="#">关于美团</a></li>
        <li><a href="#">加入我们</a></li>
        <li><a href="#">商家入驻</a></li>
        <li><a href="#">帮助中心</a></li>
        <li><a href="#">美团手机版</a></li>
      </ul>
      <p>
        ©2020 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: '',
      passWord: '',
      error: '',
      result: true
    }
  },
  methods: {
    submit () {
      if (this.userName && this.passWord && !this.error) {
        this.$http('/api/meituan/login', {
          params: {
            userName: this.userName,
            password: this.passWord
          }
        }).then((res) => {
          if (res.status == 'success') {
            this.$router.push({ name: 'index' })
            console.log(res)
            this.$store.dispatch('setUserName', res.data)
          } else {
            this.error = res.msg
          }
        })
      }
    },
    blur (val) {
      if (!/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(this.userName) && val == 1) {
        this.error = '请输入正确账号'
        this.result = false
        return
      } else {
        this.error = ''
      }

      if (!this.passWord && val == 2) {
        this.error = '请输入密码'
        // this.result = true;
      } else {
        this.error = ''
      }
      //   this.result = false;
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/login/index.scss';
</style>
