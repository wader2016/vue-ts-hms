<template>
  <div class="login-account">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
export default defineComponent({
  setup() {
    const ruleFormRef = ref<FormInstance>()
    const ruleForm = reactive({
      name: '',
      password: ''
    })

    const rules = {
      name: [{ required: 'true', message: '用户名不能为空', tigger: 'blur' }],
      password: [{ required: 'true', message: '密码不能为空', tigger: 'blur' }]
    }

    const loginAction = () => {
      ruleFormRef.value?.validate((valid) => {
        if (valid) {
          console.log(ruleForm)
        } else {
          return false
        }
      })
    }

    return {
      ruleForm,
      rules,
      ruleFormRef,
      loginAction
    }
  }
})
</script>

<style scoped></style>
