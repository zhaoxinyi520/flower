<script setup lang="ts">
</script>
<template>
    <div class="box">
        <div class="top">
            <h1>花花花花</h1>
        </div>
        <div class="main">
            <div class="left">
                <div class="show-block">
                    <img src="@/assets/models/flower/1.jpg"/>
                </div>
            </div>
            <div class="right">
                <div class="link"></div>
            </div>
        </div>
    </div>
</template>
<style  scoped lang="scss">
.box{
    height:100%;
    background-image: url("@/assets/models/flower/bg.jpg");
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
    }
    .main{
        height: calc(100% - 80px);
        display: flex;
        .left{
            flex:1;
            display: flex;
            justify-content: center;
            align-items: center;
            .show-block{
                width:500px;
                height:500px;
                background: linear-gradient(180deg,rgba(144, 140, 129,0.7) 0%,rgba(0,0,0,0) 50%,rgba(#4ec600,0.7) 100%);
                border-radius:250px;
                overflow: hidden;
                display: flex;
                align-items: center;
                box-shadow: 0px 3px 3px rgba(0,0,0,0.2);
                transition: all .2s linear;
                img{
                    width:500px;

                }
                &:hover {
                    z-index: 2;
                    -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
                    -webkit-transform: translate3d(0, -2px, 0);
                    transform: translate3d(0, -2px, 0);
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
            }
        }
    }
}
</style>