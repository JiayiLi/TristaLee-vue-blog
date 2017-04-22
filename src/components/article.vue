<style scoped>
  .art_list{
    border-left: 3px solid #C6CA53;
  }
  .art_name,.creat_time {
    font-size: 20px;
    color: #CC6699;
    margin-left:0px;
    transition:all .2s ease-in 0s;
  }
  .art_name:active,.art_name:hover{
    color: #669966;
  }
  .art_name:hover{
    margin-left: 30px;
    transition:all .2s ease-in 0s;
  }
  .article_header{
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
  <div class="article">
    <div class="article_header m-b">
      <h2>杂文随笔列表</h2>
    </div>
    <ul>
      <li v-for="art in pagination(artdata)" class="m-b-lg art_list padder"  ref="artlist" v-bind:id="art.id">
        <el-row :gutter="10" class="m-b-sm">
          <el-col :sm="18">
            <a v-bind:href="'/tristalee/detail?type=art&id='+art.id" target="_blank" class="art_name">{{art.title}}</a>
          </el-col>
          <el-col :sm="6">
            <a v-bind:href="'/tristalee/detail?type=art&id='+art.id" target="_blank" class="creat_time">{{art.creat_time.split(" ")[0]}}</a>
          </el-col>
        </el-row>  
        <el-row >
          <span class="briefly">摘要：{{art.brief}}</span>
        </el-row>
        <el-row :gutter="10">
            <el-col :sm="6" :offset="18" class="operate">
                <a href="javascript:void(0)" @click="deleteItem(art.id, $event)">删除</a>
                <a v-bind:href="'/tristalee/add/new?type=art&id='+art.id" target="_blank">编辑</a>
            </el-col>
        </el-row>
      </li>
    </ul> 
    <el-pagination
      layout="total,prev, pager, next"
      :total="artdata.length" :size="10"  @current-change="handleCurrentChange" class="m-b-lg pull-right">
    </el-pagination>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

export default {
  name: 'article',
  data () {
    return {
      msg: 'Welcome to Your article',
      artdata_show:1,
      artdata:[],
    }
  },
  created:function(){
    this.getArtBlog();
  },
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
      this.artdata_show = val;
      window.scrollTo(0, 0);
    },
    pagination:function(artdata){
      var currPage = this.artdata_show;
      var currPageArt = [];
      currPageArt = artdata.slice(10*currPage-10,10*currPage);
      return currPageArt;
    },
    getArtBlog:function(){
      var self = this;
      axios.post('/api/tec.php',qs.stringify({
        type:'art',
        operate:"getlist",
      }))
      .then(function (response) {
        if(response.data.status.code === 1){
          self.artdata = response.data.data;
          console.log(response.data.data);
          console.log(this);
        }
       
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    deleteItem:function(id,e){
        var self = this;
        axios.post('/api/tec.php',qs.stringify({
          type:'art',
          id : id,
          operate:"deleteItem",
        }))
        .then(function (response) {
            if(response.data.status.code === 1){
                self.successInfo();
                for(var i =0;i<self.$refs.artlist.length;i++){
                    self.$refs.artlist[i].id === id?self.$refs.artlist[i].remove():console.log(id);
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
