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

</style>

<template>
  <div class="article">
    <div class="article_header m-b">
      <h2>杂文随笔列表</h2>
    </div>
    <ul>
      <li v-for="art in pagination(artdata)" class="m-b-lg art_list padder">
        <el-row :gutter="10" class="m-b-sm">
          <el-col :sm="18">
            <a v-bind:href="'/tristalee/art/detail/'+art.id" target="_blank" class="art_name">{{art.art_name}}</a>
          </el-col>
          <el-col :sm="6">
            <a v-bind:href="'/tristalee/art/detail/'+art.id" target="_blank" class="creat_time">{{art.creat_time}}</a>
          </el-col>
        </el-row>  
        <el-row >
          <span class="briefly">摘要：{{art.briefly}}</span>
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

export default {
  name: 'article',
  data () {
    return {
      msg: 'Welcome to Your article',
      artdata_show:1,
      artdata:[
          {  
            id:1,
            art_name:"文章一",
            creat_time:"2017-01-01",
            briefly : "哈哈哈哈"
          },
          { 
            id:2,
            art_name:"文章二 回家大煞风景",
            creat_time:"2017-01-03",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
          { 
            id:3,
            art_name:"文章三 翻江倒海风景",
            creat_time:"2017-05-01",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
          { 
            id:4,
            art_name:"文章四 肯定就是看风景",
            creat_time:"2017-09-01",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
          { 
            id:5,
            art_name:"文章五 风刀霜剑回家地方",
            creat_time:"2016-04-01",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
          { 
            id:6,
            art_name:"文章六 繁华的咖啡机蝴蝶结",
            creat_time:"2017-07-01",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
          { 
            id:7,
            art_name:"文章七 发动机伤口恢复绝代风华",
            creat_time:"2012-01-01",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
          { 
            id:8,
            art_name:"文章八 黄金时代恢复健康的",
            creat_time:"2018-08-01",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
          { 
            id:9,
            art_name:"文章九 复活节岛上飞机的",
            creat_time:"2018-11-01",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
          { 
            id:10,
            art_name:"文章十 份好的客户风景",
            creat_time:"2016-01-31",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
          { 
            id:11,
            art_name:"文章十一 可入俄反恐大会",
            creat_time:"2017-01-01",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
          { 
            id:12,
            art_name:"文章十二 南北方的暴发户",
            creat_time:"2017-01-01",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
          { 
            id:13,
            art_name:"文章十三 尽快发货的肌肤",
            creat_time:"2017-01-01",
            briefly : "哈哈哈哈  嘿嘿嘿 系休息下飞机可撒红腹锦鸡等繁花似锦的回复解放军队风景"
          },
        ],
    }
  },
  methods:{
    handleCurrentChange:function(val){
      this.artdata_show = val;
      window.scrollTo(0, 0);
    },
    pagination:function(artdata){
      var currPage = this.artdata_show;
      var currPageArt = [];
      currPageArt = artdata.slice(10*currPage-10,10*currPage);
      return currPageArt;
    }
  }
}

</script>
