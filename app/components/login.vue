<style lang="scss" scoped>
.login{
    position: absolute;
    top: 50%;
    margin-top: -300px;
    left: 0;
    right: 0;
    padding: 0 20px;
    .mint-button{
        margin-top: 40px;
    }
    .mint-field{
        margin-bottom: 40px;
    }
}
</style>
<template>
    <div class="login">
        <form ref="loginForm" :model="form" :rules="rules">
            <mt-field label="用户名"  placeholder="请输入用户名" type="text" v-model="form.username"></mt-field>
            <mt-field label="密码"  placeholder="请输入密码" type="password" v-model="form.password"></mt-field>
            <mt-button type="primary" size="large" @click="handleSubmit">提交</mt-button>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                form:{
                    username:'xiaobog',
                    password:''
                }
            }
        },
        methods: {
            handleSubmit(){
                this.$router.push({
                    name:'Home'
                });
            }
        }
    }
</script>



