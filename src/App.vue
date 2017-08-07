<style src="./assets/css/index.css"></style>
<style src="./assets/css/common.css"></style>

<template>
  <div id="app">
    <!-- 导航开始 -->
    <header class="header no-padder">
      <div class="container clearfix">
        <!-- <el-row type="flex"> -->
          <div class="header-logo pull-left">
            <img src="./assets/img/header-logo.jpeg" alt="TristaLee" style="width:50px;">
          </div>

          <div class="header-name pull-left">
            <span><a href="https://github.com/JiayiLi" target="_blank" >TristaLee</a></span>
          </div>



          <el-menu theme="dark" class="el-menu-demo pull-right navbar" mode="horizontal"  :default-active="isActive">
            <el-menu-item index="1" justify="end" >
              <router-link to="/tristalee/tecblog" tag="li" >Tec Blog</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/tristalee/article" tag="li">Just Articles</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="/tristalee" tag="li">About ME</router-link>
            </el-menu-item>
            <el-menu-item index="4" v-if="username==='lijiayi'">
              <router-link to="/tristalee/add/new" tag="li" >AddNew</router-link>
            </el-menu-item>
            <el-menu-item index="5">
              <router-link to="/tristalee/user" tag="li" v-if="!isLogin">login/signup</router-link>
              <li v-if="isLogin">
                <el-dropdown @command="handleCommand">
                    <span class="username"><i class="el-icon-star-off"></i>  {{username}}</span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
              </li>
            </el-menu-item>
           <!--  <el-submenu index="3">
              <template slot="title">我的工作台</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-submenu> -->
          </el-menu>
          <div class="header_search inline pull-right m-r">
            <input type="text" placeholder="搜索从这里开始...">
            <button type="submit"><i class="el-icon-search"></i></button>
          </div>
        <!-- </el-row> -->
      </div>
    </header>
    <div class="container m-t m-b-lg">
      <el-row :gutter="10">
        <el-col :span="hidesidebar?18:24">
          <div class="grid-content">
            <router-view keep-alive :user-li="userLi"></router-view>
          </div>
        </el-col>
        <el-col :span="6"  v-if="hidesidebar">
          <div class="grid-content">
            <right-contain></right-contain>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 导航结束 -->
    <!-- <router-view></router-view> -->


   <!--  <footer class="footer">
      <h3>Copyright ©2017 TristaLee</h3>
    </footer> -->
  </div>
</template>

<script>
import rightContain from './components/right-contain'

export default {
  name: 'app',
  components:{
    rightContain
  },
  data () {
    return {
      isActive:'',
      currentRoute : window.location.pathname,
      allNav : {
        "/tristalee/tecblog":"1",
        "/tristalee/article":"2",
        "/tristalee":"3",
        "/":"3",
        "/tristalee/add/new":"4",
        "/tristalee/user" :'5'
      },
      username:null,
      isLogin:false,
      userLi:false
    }
  },
  watch:{
    '$route' (to , from){
      this.currentRoute = to.path;
      this.isActive = this.allNav[this.currentRoute];
      // console.log(111);
      this.checkLogin();
    }
  },
  created: function () {
    this.checkLogin();
  },
  computed:{
    hidesidebar:function(){
      return (this.currentRoute !== "/tristalee" && this.currentRoute !=="/" && this.currentRoute !=="/tristalee/add/new" && this.currentRoute!== "/tristalee/user");
    }
  },
  methods:{
    checkLogin:function(){
      if(!this.getCookie('session')){
        // this.$router.push('/tristalee/user');
        this.isLogin = false;
        this.username = null;
        this.userLi = false;
      }else {
        var sessionContent = unescape(this.getCookie('session'));
        var currName = sessionContent.split(',')[0];
        var currId = sessionContent.split(',')[1];
        this.username = currName;
        this.isLogin = true;
        if(currName === "lijiayi"){
          this.userLi = true;
        }
      }
    },
    handleCommand:function(command) {
      if(command === "logout"){
        this.logout();
      }
    },
    logout:function(){
      this.isLogin = false;
      this.username = null;
      this.delCookie('session');
      if(this.$route.path === '/tristalee/add/new'){
          this.$router.push('/tristalee/tecblog');
      }
    }
  }
}
</script>
