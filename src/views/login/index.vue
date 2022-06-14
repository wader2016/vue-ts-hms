<template>
  <div class="login-wrapper">
    <h1 class="title">后台管理系统</h1>
    <div class="inner">
      <el-tabs type="border-card" class="login-tabs" stretch>
        <el-tab-pane label="账号登录">
          <login-account ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane label="手机登录">
          <login-phone />
        </el-tab-pane>
      </el-tabs>
      <el-button class="login-btn" type="primary" @click="login"
        >登录</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './LoginAccount.vue'
import LoginPhone from './LoginPhone.vue'
export default defineComponent({
  name: 'loginView',
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const accountRef = ref()
    const login = () => {
      accountRef.value.loginAction()
    }
    return {
      login,
      accountRef
    }
  }
})
</script>

<style scoped lang="less">
.login-wrapper {
  background: #303133;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    color: #fff;
  }
  .inner {
    background: white;
    width: 600px;
    .login-btn {
      width: calc(100% - 30px);
      margin: 15px;
    }
  }
}
</style>
