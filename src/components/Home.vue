<style scoped>
/*   .Home{
    height: 800px;
  } */
/*   .home-title{
    background-image: url("/static/img/home-bg.493fcdd.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
    height: 400px;
    background-size: cover;
    background-position: 60% 50%;
    -webkit-background-size: cover; 
    -moz-background-size: cover;   
    -o-background-size: cover;
  } */

  .home-title h1{
    color: #000;
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    margin: 0 auto;
  }
  .about-me ul{
    text-align: center;
  }
  .about-me ul li{
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    text-align: center;
  } 
  .about-me ul li a{
    color: #6699CC;
  }
  .about-me ul li a:active,.about-me ul li a:hover{
    color: #666699;
  } 
  .email-contact i{
    animation-name: shake;
    animation-duration: 100ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
  .email-contact:hover i{
    animation-play-state: paused;
  }
  @keyframes shake{
    2% {
        transform: translate(0.5px, -1.5px) rotate(-0.5deg);
    }
    demo.css:548
    4% {
        transform: translate(0.5px, 1.5px) rotate(1.5deg);
    }
    demo.css:550
    6% {
        transform: translate(1.5px, 1.5px) rotate(1.5deg);
    }
    demo.css:552
    8% {
        transform: translate(2.5px, 1.5px) rotate(0.5deg);
    }
    demo.css:554
    10% {
        transform: translate(0.5px, 2.5px) rotate(0.5deg);
    }
    demo.css:556
    12% {
        transform: translate(1.5px, 1.5px) rotate(0.5deg);
    }
    demo.css:558
    14% {
        transform: translate(0.5px, 0.5px) rotate(0.5deg);
    }
    demo.css:560
    16% {
        transform: translate(-1.5px, -0.5px) rotate(1.5deg);
    }
    demo.css:562
    18% {
        transform: translate(0.5px, 0.5px) rotate(1.5deg);
    }
    demo.css:564
    20% {
        transform: translate(2.5px, 2.5px) rotate(1.5deg);
    }
    demo.css:566
    22% {
        transform: translate(0.5px, -1.5px) rotate(1.5deg);
    }
    demo.css:568
    24% {
        transform: translate(-1.5px, 1.5px) rotate(-0.5deg);
    }
    demo.css:570
    26% {
        transform: translate(1.5px, 0.5px) rotate(1.5deg);
    }
    demo.css:572
    28% {
        transform: translate(-0.5px, -0.5px) rotate(-0.5deg);
    }
    demo.css:574
    30% {
        transform: translate(1.5px, -0.5px) rotate(-0.5deg);
    }
    demo.css:576
    32% {
        transform: translate(2.5px, -1.5px) rotate(1.5deg);
    }
    demo.css:578
    34% {
        transform: translate(2.5px, 2.5px) rotate(-0.5deg);
    }
    demo.css:580
    36% {
        transform: translate(0.5px, -1.5px) rotate(0.5deg);
    }
    demo.css:582
    38% {
        transform: translate(2.5px, -0.5px) rotate(-0.5deg);
    }
    demo.css:584
    40% {
        transform: translate(-0.5px, 2.5px) rotate(0.5deg);
    }
    demo.css:586
    42% {
        transform: translate(-1.5px, 2.5px) rotate(0.5deg);
    }
    demo.css:588
    44% {
        transform: translate(-1.5px, 1.5px) rotate(0.5deg);
    }
    demo.css:590
    46% {
        transform: translate(1.5px, -0.5px) rotate(-0.5deg);
    }
    demo.css:592
    48% {
        transform: translate(2.5px, -0.5px) rotate(0.5deg);
    }
    demo.css:594
    50% {
        transform: translate(-1.5px, 1.5px) rotate(0.5deg);
    }
    demo.css:596
    52% {
        transform: translate(-0.5px, 1.5px) rotate(0.5deg);
    }
    demo.css:598
    54% {
        transform: translate(-1.5px, 1.5px) rotate(0.5deg);
    }
    demo.css:600
    56% {
        transform: translate(0.5px, 2.5px) rotate(1.5deg);
    }
    demo.css:602
    58% {
        transform: translate(2.5px, 2.5px) rotate(0.5deg);
    }
    demo.css:604
    60% {
        transform: translate(2.5px, -1.5px) rotate(1.5deg);
    }
    demo.css:606
    62% {
        transform: translate(-1.5px, 0.5px) rotate(1.5deg);
    }
    demo.css:608
    64% {
        transform: translate(-1.5px, 1.5px) rotate(1.5deg);
    }
    demo.css:610
    66% {
        transform: translate(0.5px, 2.5px) rotate(1.5deg);
    }
    demo.css:612
    68% {
        transform: translate(2.5px, -1.5px) rotate(1.5deg);
    }
    demo.css:614
    70% {
        transform: translate(2.5px, 2.5px) rotate(0.5deg);
    }
    demo.css:616
    72% {
        transform: translate(-0.5px, -1.5px) rotate(1.5deg);
    }
    demo.css:618
    74% {
        transform: translate(-1.5px, 2.5px) rotate(1.5deg);
    }
    demo.css:620
    76% {
        transform: translate(-1.5px, 2.5px) rotate(1.5deg);
    }
    demo.css:622
    78% {
        transform: translate(-1.5px, 2.5px) rotate(0.5deg);
    }
    demo.css:624
    80% {
        transform: translate(-1.5px, 0.5px) rotate(-0.5deg);
    }
    demo.css:626
    82% {
        transform: translate(-1.5px, 0.5px) rotate(-0.5deg);
    }
    demo.css:628
    84% {
        transform: translate(-0.5px, 0.5px) rotate(1.5deg);
    }
    demo.css:630
    86% {
        transform: translate(2.5px, 1.5px) rotate(0.5deg);
    }
    demo.css:632
    88% {
        transform: translate(-1.5px, 0.5px) rotate(1.5deg);
    }
    demo.css:634
    90% {
        transform: translate(-1.5px, -0.5px) rotate(-0.5deg);
    }
    demo.css:636
    92% {
        transform: translate(-1.5px, -1.5px) rotate(1.5deg);
    }
    demo.css:638
    94% {
        transform: translate(0.5px, 0.5px) rotate(-0.5deg);
    }
    demo.css:640
    96% {
        transform: translate(2.5px, -0.5px) rotate(-0.5deg);
    }
    demo.css:642
    98% {
        transform: translate(-1.5px, -1.5px) rotate(-0.5deg);
    }
    demo.css:644
    0%, 100% {
        transform: translate(0, 0) rotate(0);
    }
  }
</style>

<template>
  <div class="Home">
    <div class="home-title m-t">
      <h1>Wow,a whole page just about me!</h1>
    </div>
    <div class="m-t-lg">
      <el-row :gutter="10">
        <el-col :span="24">
          <div class="grid-content about-me">
            <ul>
              <li>I am A Front-end Dev Engineer</li>
              <li>A fan of Google</li>
              <li>Like taking photos</li>
              <li>( wanna see my pics,visit my <a href="https://www.instagram.com/dumplings0526/" target="_blank">ins:dumplings0526
</a> )</li>
              <li>And telling stories</li>
            </ul>
            <ul class="m-t-lg">
              <li>If you have something to tell me ,contact me:</li>
              <li><a href="mailto:jiayi_li@163.com" class="email-contact"><i class="el-icon-message"> me</i></a></li>
            </ul>
          </div>
        </el-col>
        <!-- <el-col :span="9">
          <div class="grid-content">
            <ul>
              <li></li>
            </ul>
          </div>
        </el-col> -->
        
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
