<style scoped>

</style>

<template>

  <div class="addnew m-t-lg">
    <el-row :gutter="20">
        <el-col :span="18" :offset="3">
            <el-button v-on:click="getUeditorContent()" type="primary" class="pull-right" size="small">添加<i class="el-icon-plus el-icon--right"></i></el-button>
        </el-col>
    </el-row>
    <el-row :gutter="20" class="m-t">
        <el-col :span="18" :offset="3">
            <div class="grid-content">
                <el-input v-model="input" placeholder="请输入文章名称"></el-input>
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
   
  </div>
</template>


<script>
export default {
  name: 'addnew',
  data () {
    return {
        input: '',
        msg: 'Welcome to Your Vue.js App',
        editor: null,
    }
  },
  mounted() {
    this.editor = UE.getEditor('editor');
  },
  destroyed() {
    this.editor.destroy();
  },
  methods:{
    getUeditorContent:function(){
        
        console.log(this.editor.getContent());
    }
  }
}
</script>
