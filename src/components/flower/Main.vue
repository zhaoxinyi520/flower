<script setup lang="ts">
    import { defineExpose,ref } from 'vue';

    let images:any = ref(new URL("@/assets/models/flower/pic/bottom/1.jpg", import.meta.url).href)

    const changeImgFn = (val:any)=>{
        console.log("~~~~~~~~~~~~~~")
        console.log(val)
    }

    const changeCenterImgFn = (val:any)=>{
        console.log("~~~~~~~~~~111~~~~",val)
        images.value = `http://47.98.168.146:8080/images/flower/bottom/${val}.jpg`
    }

    defineExpose({
        changeImgFn,
        changeCenterImgFn
    });
</script>
<template>
    <div class="main">
        <div class="left">
            <div class="show-block">
                <img :src="images"/>
            </div>
        </div>
        <div class="right">
            <div class="link">
                <img src="@/assets/models/flower/pic/addfriend.jpg"/>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .main{
        height: calc(100% - 210px);
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
                    cursor: pointer;
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
</style>
