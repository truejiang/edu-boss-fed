<template>
  <div class="login">
    <div class="login-form">
      <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-width="80px"
      label-position="top">
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button :loading="loading" class="submit-btn" type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import request from '@/utils/request'
import qs from 'qs'

export default Vue.extend({
  name: 'Login',
  data () {
    return {
      loading: false,
      form: {
        phone: 18201288771,
        password: 111111
      },
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1\d{10}$/, message: '请输入正常的手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '请输入正常的手机号', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async onSubmit () {
      this.loading = true
      const { data } = await request({
        method: 'POST',
        url: '/front/user/login',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(this.form)
      })

      this.loading = false
      if (data.state !== 1) {
        return this.$message({
          message: data.message,
          type: 'warning'
        })
      }

      this.$router.push({
        name: 'home'
      })

      this.$message({
        message: '登录成功',
        type: 'success'
      })
    }
  }
})
</script>
<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    width: 300px;
    background-color: #fff;
    padding: 20px;
    .submit-btn {
      width: 100%;
      background-color: $primary-color;
      border-color: $primary-color;
    }
  }
}
</style>
