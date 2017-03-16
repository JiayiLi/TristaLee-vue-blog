<style scoped>
  .motto-wrap{
    margin:24px 0; 
    padding: 20px;
    background-color:#CCCC99;
    opacity: 0.8;
    border-radius: 2px;
    /* transform: rotate(10deg); */
    /* margin-left: 20px; */
  }
  .motto {
    font-size: 18px;
    font-weight: 400;
    font-family: Comic Sans;
  }
  .promote{
    width: 100%;
    padding: 20px;
    background-color: #FFCCCC;
    border-radius: 2px;
    font-weight: 400;

    /* transform: rotate(-12deg); */
  }
  .promote span{
    height: 26px;
    line-height: 26px;
    font-size: 14px;
    display: inline-block;
    border-bottom: 3px solid #66CC99;
  }

  .promote ul li{
    height: 24px;
    font-size: 14px;
  }
  .promote ul li a{
    height: 24px;
    font-size: 16px;
    color: #6699CC;
    text-align: right;
  }
  .promote ul li a:active,.promote ul li a:hover{
    color: #666699;
  }
</style>

<template>
  <div class="right-contain">
    <div class="motto-wrap">
      <h1 title="座右铭" class="motto">{{ motto }}</h1>
    </div>
    <div class="promote m-t-lg">
      <span>(；￣ェ￣) 来抓我呀～</span>

      <ul class="m-t">
        <li>知乎: <a href="https://www.zhihu.com/people/jiayi-0526/activities" target="_blank">TristaLee</a></li>
        <li>知乎专栏: <a href="https://zhuanlan.zhihu.com/front-end-web" target="_blank">TristaLee的纸糊</a></li>
        <li>博客园: <a href="http://www.cnblogs.com/lijiayi/" target="_blank">TristaLee</a></li>
        <li>Github: <a href="https://github.com/JiayiLi" target="_blank">jiayi Li</a></li>
      </ul>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'rightContain',
  data (){
    return {
      motto:"Don't ever let someone tell you that you can't do something."
    }
  }
  
}
</script>
