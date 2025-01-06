<script setup lang="ts">
import { onMounted  } from 'vue'

const init = ()=>{
    var video:any = document.getElementById("myVideo");
    console.log("video",video)
    if (video?.paused) {
        video?.play();
    } else {
        video?.pause();
    }
}

onMounted(()=>{
    //init();
})

</script>
<template>
    <div class="box" @click="init">
        <div class="top">
            <h1>花花花花</h1>
            <div  class="tools">
                <video id="myVideo" width="80" height="80" controls autoplay loop>
                    <source src="@/assets/models/flower/mp4/1.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        <div class="main">
            <div class="left">
                <div class="show-block">
                    <img src="@/assets/models/flower/pic/1.jpg"/>
                </div>
            </div>
            <div class="right">
                <div class="link">
                    <img src="@/assets/models/flower/pic/addfriend.jpg"/>
                </div>
            </div>
        </div>
        <div class="bottom">

        </div>
        
    </div>
</template>
<style  scoped lang="scss">
.box{
    height:100%;
    background-image: url("@/assets/models/flower/pic/bg.jpg");
    background-size:cover;
    .top{
        height: 80px;
        background: linear-gradient(90deg,rgba(145, 127, 43,0.3) 0%,rgba(200, 154, 143,0.8) 50%,rgba(245, 140, 45,0.4) 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ff8b26;
        font-size: 20px;
        box-shadow: 0px 3px 3px rgba(0,0,0,0.2);
        position: relative;
        .tools{
            display:none;
            position: absolute; 
            border:1px red solid;
            height: 80px;
            width: 80px;
            border-radius: 80px;
            right: 0px;
            video{
                //magrin-top:-20px;
            }
        }
        
    }
    .main{
        height: calc(100% - 200px);
        display: flex;
        .left{
            flex:1;
            display: flex;
            justify-content: center;
            align-items: center;
            .show-block{
                width:500px;
                height:500px;
                background: linear-gradient(180deg,rgba(211, 221, 204,0.7) 0%,rgba(0,0,0,0) 50%,rgba(148, 145, 138,0.7) 100%);
                border-radius:250px;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0px 3px 3px rgba(0,0,0,0.2);
                transition: all .5s linear;
                img{
                    width:500px;
                }
                &:hover {
                    z-index: 2;
                    -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
                    -webkit-transform: translate3d(0, -2px, 0);
                    transform: translate3d(0, -2px, 0);
                    
                    img{
                        width:510px;
                        width:510px;
                    }
                }
            }
        }
        .right{
            flex:1;
            display: flex;
            justify-content: center;
            align-items: center;
            .link{
                width:500px;
                height:500px;
                background: linear-gradient(180deg,rgba(211, 221, 204,0.7) 0%,rgba(0,0,0,0) 50%,rgba(148, 145, 138,0.7) 100%);
                border-radius:20px;
                box-shadow: 0px 3px 3px rgba(0,0,0,0.2);
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                    width:400px;
                    border-radius: 10px;
                }
            }
        }
    }
    .bottom{
        height:120px;
        box-shadow: 0px 3px 3px rgba(0,0,0,0.2);
        background: linear-gradient(180deg,rgba(211, 221, 204,0.7) 0%,rgba(0,0,0,0) 50%,rgba(148, 145, 138,0.7) 100%);
    }
}
</style>