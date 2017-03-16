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
            <span><a href="https://github.com/JiayiLi" target="_blank">TristaLee</a></span>
          </div>


          
          <el-menu theme="dark" class="el-menu-demo pull-right navbar" mode="horizontal"  :default-active="isActive">
            <el-menu-item index="1" justify="end" > 
              <router-link to="/tristalee/tecblog" tag="li" >Tec Blog</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/tristalee/article" tag="li">Just Articles</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="/tristalee" tag="li">Home</router-link>
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

    <div class="container m-t">
      <el-row :gutter="10">
        <el-col :span="18">
          <div class="grid-content">
            <router-view keep-alive></router-view>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            fjdshfjkdhfdjh
            <!-- <router-view name="searchPart"></router-view> -->
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 导航结束 -->
    <!-- <router-view></router-view> -->


    <footer class="footer">
      <h3>Copyright ©2017 TristaLee</h3>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isActive:'',
      currentRoute : window.location.pathname,
      allNav : {
        "/tristalee/tecblog":"1",
        "/tristalee/article":"2",
        "/tristalee":"3",
        "/":"3"
      }
    }
  },
  created: function () {
    this.isActive = this.allNav[this.currentRoute];
  }
}
</script>

