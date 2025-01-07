<script setup lang="ts">
    const init = ()=>{
        var video:any = document.getElementById("myVideo");
        console.log("video",video)
        if(video){
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
        
    }
</script>
<template>
    <div class="top">
        <h1>花花花花</h1>
        <div  class="tools">
            <video class="video" id="myVideo" width="80" height="80" controls autoplay loop>
                <source src="@/assets/models/flower/mp4/1.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</template>
<style scoped lang="scss">
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
            .video{
                margin-top:-20px;
            }
        }
        
    }
</style>