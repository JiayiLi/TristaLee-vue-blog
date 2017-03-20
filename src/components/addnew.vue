<style scoped>

</style>

<template>

  <div class="addnew m-t-lg">
    <el-row :gutter="20">
        <el-col :span="12" :offset="6">
            <div class="grid-content">
                <el-input v-model="input" placeholder="请输入文章名称"></el-input>
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="20" class="m-t">
        <el-col :span="12" :offset="6">
            <div class="grid-content">
                <!-- <mt-button @click="geteditor()" type="danger">获取</mt-button>
                <script id="editor" type="text/plain" style="width:1024px;height:500px;"></script> -->
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
  created:function(){
    console.log(222);
    // var ue = UE.getEditor('container');

  },
 
}
</script>
