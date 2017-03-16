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
  .tecblog{
    min-height: 800px;
  }
</style>

<template>
  <div class="tecblog">
    <div class="tecblog_header m-b">
      <h2>技术博客列表</h2>
    </div>
    <ul>
      <li v-for="tec in pagination(tecdata)" class="m-b-lg tec_list padder">
        <el-row :gutter="10" class="m-b-sm">
          <el-col :sm="18">
            <a v-bind:href="'/tec/detail/'+tec.id" class="tec_name">{{tec.tec_name}}</a>
          </el-col>
          <el-col :sm="6">
            <a v-bind:href="'/tec/detail/'+tec.id" class="creat_time">{{tec.creat_time}}</a>
          </el-col>
        </el-row>  
        <el-row >
          <span class="briefly">摘要：{{tec.briefly}}</span>
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

export default {
  name: 'tecblog',
  data () {
    return {
      msg: 'Welcome to Your tecblog',
      tecdata_show:1,
      tecdata:[
          {  
            id:1,
            tec_name:"文章一 就会发觉很多风景",
            creat_time:"2017-01-01",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
          { 
            id:2,
            tec_name:"文章二 回家大煞风景",
            creat_time:"2017-01-03",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
          { 
            id:3,
            tec_name:"文章三 翻江倒海风景",
            creat_time:"2017-05-01",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
          { 
            id:4,
            tec_name:"文章四 肯定就是看风景",
            creat_time:"2017-09-01",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
          { 
            id:5,
            tec_name:"文章五 风刀霜剑回家地方",
            creat_time:"2016-04-01",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
          { 
            id:6,
            tec_name:"文章六 繁华的咖啡机蝴蝶结",
            creat_time:"2017-07-01",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
          { 
            id:7,
            tec_name:"文章七 发动机伤口恢复绝代风华",
            creat_time:"2012-01-01",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
          { 
            id:8,
            tec_name:"文章八 黄金时代恢复健康的",
            creat_time:"2018-08-01",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
          { 
            id:9,
            tec_name:"文章九 复活节岛上飞机的",
            creat_time:"2018-11-01",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
          { 
            id:10,
            tec_name:"文章十 份好的客户风景",
            creat_time:"2016-01-31",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
          { 
            id:11,
            tec_name:"文章十一 可入俄反恐大会",
            creat_time:"2017-01-01",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
          { 
            id:12,
            tec_name:"文章十二 南北方的暴发户",
            creat_time:"2017-01-01",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
          { 
            id:13,
            tec_name:"文章十三 尽快发货的肌肤",
            creat_time:"2017-01-01",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
        ],
    }
  },
  methods:{
    handleCurrentChange:function(val){
      this.tecdata_show = val;
      window.scrollTo(0, 0);
    },
    pagination:function(tecdata){
      var currPage = this.tecdata_show;
      var currPageTec = [];
      currPageTec = tecdata.slice(10*currPage-10,10*currPage);
      return currPageTec;
    }
  }
}

</script>
