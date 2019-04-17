<template>
    <div class="login-wrap">
    	<div class="login-wrap2"></div>
        <div class="ms-login">
            <div class="ms-title"><i class="el-icon-lx-global"></i> 后台管理系统 <small>Beta</small></div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content" size="medium">
                <el-form-item prop="username" label="">
                    <el-input v-model="ruleForm.username" placeholder="请输入用户名">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password" label="">
                    <el-input type="password" placeholder="请输入密码"  v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')">
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="code">
                	<el-col :span="16">
	                    <el-input type="text" placeholder="请输入验证码" v-model="ruleForm.code" >
	                    </el-input>
                   	</el-col>
                   	<el-col :span="7" class="code">
                    	<img :src="codeUrl" @click.prevent="codeRefresh()" />
                    </el-col>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: 'admin',
                    password: '123123',
                    code:'',
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    code: [
                        { required: true, message: '请输入验证码', trigger: 'blur' }
                    ]
                },
                codeUrl:''
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        localStorage.setItem('ms_username',this.ruleForm.username);
                        this.$router.push('/');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            codeRefresh() {
//          	this.codeUrl = "http://39.98.209.34/shihe-bank/app/captcha?"+Math.random();
            	this.codeUrl = "";
            }
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
        background-image: url(../../assets/img/login-bg3.jpg);
        background-size: 100%;
    }
    .login-wrap2{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width:100%;
        height:100%;
        background-image: url(../../assets/img/login-bg2.jpg);
        background-size: 100%;
        opacity: 0.2;
    }
    .ms-title{
        width:100%;
        line-height: 80px;
        text-align: center;
        font-size:28px;
    	color: #f7fafd;
        border-bottom: 1px solid #ddd;
        text-shadow: -2px 2px 3px #3b7abb;;
	    font-weight: bold;
	    /* letter-spacing: 1px; */
	    font-family: KaiTi;
    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:430px;
        margin:-215px 0 0 -215px;
        border-radius: 5px;
        background: rgba(255,255,255, 0.9);
        overflow: hidden;
    }
    .ms-content{
        padding: 40px 50px;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
        margin-bottom: 10px;
    }
    .login-tips{
        font-size:12px;
        line-height:30px;
        color:#fff;
    }
    .code{
    	text-align: center;
    	background: #fff;
    	vertical-align: middle;
    	border-radius: 4px;
    	border: 1px solid #dcdfe6;
    	line-height: 31px;
    	float: right;
    }
    .code img{
    	width: 100%;
    	vertical-align: middle;
    }
</style>