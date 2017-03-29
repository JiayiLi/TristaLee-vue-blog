<style scoped>

</style>

<template>
  <!-- <el-button :plain="true" @click="open5">消息</el-button> -->

  <div class="addnew m-t-lg">
    <i :plain="true" @click="successInfo"></i>

    <el-row :gutter="20">
        <el-col :span="18" :offset="3">
            <el-button v-on:click="getUeditorContent()" type="primary" class="pull-right" size="small">添加<i class="el-icon-plus el-icon--right"></i></el-button>
        </el-col>
    </el-row>
    <el-row :gutter="20" class="m-t">
        <el-col :span="3" :offset="3">
          <el-radio-group v-model="typeupload">
            <el-radio-button label="tec"></el-radio-button>
            <el-radio-button label="art"></el-radio-button>
          </el-radio-group>
        </el-col>
        <el-col :span="15">
            <div class="grid-content">
                <el-input v-model="title" placeholder="请输入文章名称"></el-input>
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="20" class="m-t">
        <el-col :span="18" :offset="3">
            <div class="grid-content">
                <script id="editor" type="text/plain"></script>
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="20" class="m-t">
      <el-col :span="18" :offset="3">
          <div class="grid-content">
              <el-input v-model="brief" placeholder="请输入文章摘要"></el-input>
          </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import axios from 'axios';
import qs from 'qs';

export default {
  name: 'addnew',
  data () {
    return {
        title: '',
        msg: 'Welcome to Your Vue.js App',
        editor: null,
        typeupload:'tec',
        brief:''
    }
  },
  mounted() {
    this.editor = UE.getEditor('editor');
  },
  destroyed() {
    this.editor.destroy();
  },
  methods:{
    successInfo:function() {
        this.$message({
          showClose: true,
          message: '添加成功',
          type:"success"
        });
    },
    errorInfo :function(){
      this.$message({
          showClose: true,
          message: '添加失败',
          type:"error"
        });
    },
    getUeditorContent:function(){
        var param = {
          title : this.title,
          content: this.editor.getContent(),
          typeupload: this.typeupload,
          brief:this.brief,
          type:"addnew"
        }
        var self = this;
        axios.post('/api/add_new.php',qs.stringify(param))
        .then(function (response) {
          if(response.data.status.code === 1){
            self.successInfo();
          }else {
            self.errorInfo();
          }
        })
        .catch(function (error) {
          self.errorInfo();
          console.log(error);
        });

    }
  }
}
</script>
