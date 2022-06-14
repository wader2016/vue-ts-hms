<template>
  <div class="login-phone">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="ruleForm.phone" autocomplete="off" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="ruleForm.code" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const ruleForm = reactive({
      phone: '',
      code: ''
    })

    const rules = {
      phone: [{ required: 'true', message: '手机号不能为空', tigger: 'blur' }],
      code: [{ required: 'true', message: '验证码不能为空', tigger: 'blur' }]
    }
    return {
      ruleForm,
      rules
    }
  }
})
</script>

<style scoped></style>
