<style scoped>
  .tec_list{
    border-left: 3px solid #C6CA53;
  }
  .tec_name,.creat_time {
    font-size: 20px;
    color: #CC6699;
    margin-left:0px;
    transition:all .2s ease-in 0s;
  }
  .tec_name:active,.tec_name:hover{
    color: #669966;
  }
  .tec_name:hover{
    margin-left: 30px;
    transition:all .2s ease-in 0s;
  }
  .tecblog_header{
    font-size: 20px;
    font-weight: 400;
    width: 100%;
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-bottom: 3px dotted #72CBCA;
  }
  .operate a{
      color: #a3a3a3;
  }
</style>

<template>
  <div class="tecblog">
    <i :plain="true" @click="successInfo"></i>
    <div class="tecblog_header m-b">
      <h2>技术博客列表</h2>
    </div>
    <ul>
      <li v-for="tec in pagination(tecdata)" class="m-b-lg tec_list padder" ref="teclist" v-bind:id="tec.id">
        <el-row :gutter="10" class="m-b-sm">
          <el-col :sm="18">
            <a v-bind:href="'/tristalee/detail?type=tec&id='+tec.id" target="_blank" class="tec_name">{{tec.title}}</a>
          </el-col>
          <el-col :sm="6">
            <a v-bind:href="'/tristalee/detail?type=tec&id='+tec.id" target="_blank" class="creat_time">{{tec.creat_time.split(" ")[0]}}</a>
          </el-col>
        </el-row>
        <el-row >
          <span class="briefly">摘要：{{tec.brief}}</span>
        </el-row>
        <el-row :gutter="10" v-if="userLi">
            <el-col :sm="6" :offset="18" class="operate">
                <a href="javascript:void(0)" @click="deleteItem(tec.id, $event)">删除</a>
                <a v-bind:href="'/tristalee/add/new?type=tec&id='+tec.id" target="_blank">编辑</a>
            </el-col>
        </el-row>
      </li>
    </ul>
    <el-pagination
      layout="total,prev, pager, next"
      :total="tecdata.length" :size="10"  @current-change="handleCurrentChange" class="m-b-lg pull-right">
    </el-pagination>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

export default {
  name: 'tecblog',
  data () {
    return {
      msg: 'Welcome to Your tecblog',
      tecdata_show:1,
      tecdata:[],
    }
  },
  created:function(){
    this.getTecBlog();
  },
  props: ['userLi'],  
  methods:{
    successInfo:function() {
      this.$message({
        showClose: true,
        message: '操作成功',
        type:"success"
      });
    },
    errorInfo :function(){
        this.$message({
            showClose: true,
            message: '操作失败',
            type:"error"
        });
    },
    handleCurrentChange:function(val){
      this.tecdata_show = val;
      window.scrollTo(0, 0);
    },
    pagination:function(tecdata){
      var currPage = this.tecdata_show;
      var currPageTec = [];
      currPageTec = tecdata.slice(10*currPage-10,10*currPage);
      return currPageTec;
    },
    getTecBlog:function(){
      var self = this;
      axios.post('/api/tec.php',qs.stringify({
        type:'tec',
        operate:"getlist",
      }))
      .then(function (response) {
        if(response.data.status.code === 1){
          self.tecdata = response.data.data;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    deleteItem:function(id,e){
        var self = this;
        axios.post('/api/tec.php',qs.stringify({
          type:'tec',
          id : id,
          operate:"deleteItem",
        }))
        .then(function (response) {
            if(response.data.status.code === 1){
                self.successInfo();
                for(var i =0;i<self.$refs.teclist.length;i++){
                    self.$refs.teclist[i].id === id?self.$refs.teclist[i].remove():console.log(id);
                }
            }else {
                self.errorInfo();
            }
        })
        .catch(function (error) {
            console.log(error)
            self.errorInfo();
        });
    }
  }
}



</script>
