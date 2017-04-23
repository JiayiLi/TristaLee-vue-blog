<style scoped>


</style>

<template>
  <div class="user">
    <i :plain="true" @click="successInfo"></i>
    <el-tabs v-model="activeName">
      <el-tab-pane label="登陆" name="first">
        <el-row :gutter="20" class="m-t">
          <el-col :span="18" :offset="3">
            <el-form :model="loginForm" :rules="loginFormRule" ref="loginForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="用户名">
                <el-input v-model="loginForm.name"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
                <el-button @click="resetForm('loginForm')">重置11</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="注册" name="second">
        <el-row :gutter="20" class="m-t">
          <el-col :span="18" :offset="3">
            <el-form :model="signupForm" :rules="signupFormRule" ref="signupForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="用户名">
                <el-input v-model="signupForm.name"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="signupForm.pass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="signupForm.checkPass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('signupForm')">提交</el-button>
                <el-button @click="resetForm('signupForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-tab-pane>
      
    </el-tabs>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import sha1 from 'sha1';

export default {
    name:'user',
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.signupForm.checkPass !== '') {
            this.$refs.signupForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.signupForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        signupForm: {
          pass: '',
          checkPass: '',
          name:''
        },
        loginForm:{
          pass: '',
          name:''
        },
        activeName: 'first',
        signupFormRule: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        },
        loginFormRule:{
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      successInfo:function(mes) {
        this.$message({
          showClose: true,
          message: mes,
          type:"success"
        });
      },
      errorInfo :function(mes){
        this.$message({
            showClose: true,
            message: mes,
            type:"error"
          });
      },
      submitForm:function(formName){
        var self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {

            var passHash = sha1(sha1(self[formName].pass));
            var param = {
              name:self[formName].name,
              pass:passHash,
              type:formName,
              operate:'user',
            }
            axios.post('/api/tec.php',qs.stringify(param))
            .then(function (response) {
              if(response.data.status.code === 1){
                // console.log(response.data);
                self.successInfo("操作成功");
                var expireDays = 1000 * 60 * 60 * 24 * 15;

                var sessionContext = response.data.data.us_name+','+response.data.data.id;
                self.setCookie('session', sessionContext, expireDays);
                self.$router.push('/tristalee/tecblog');

              }else {
                self.errorInfo(response.data.status.message);
              }
            })
            .catch(function (error) {
              self.errorInfo("咦，为什么会出错？");
            });
           
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm:function(formName){
        this.$refs[formName].resetFields();
      }
    }
}



</script>
