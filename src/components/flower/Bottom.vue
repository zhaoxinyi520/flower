<script setup lang="ts">
    import { ref,onMounted } from 'vue';
    let list:any = ref([1,2,3,4,5,6,7,8,9,10,11,12])
    onMounted(()=>{
        //let list:any = ref([1,2,3,4,5,6,7,8,9,10,11,12])
    })
</script>
<template>
    <div class="bottom">
        <div class="move-box">
            <div class="block" v-for="(item,index) in list" :key="index">
                {{index}}
            
            </div>
        </div>
    </div>
</template>
<style scoped lang='scss'>
    .bottom{
        height:120px;
        box-shadow: 0px 3px 3px rgba(0,0,0,0.2);
        background: linear-gradient(180deg,rgba(211, 221, 204,0.7) 0%,rgba(0,0,0,0) 50%,rgba(148, 145, 138,0.7) 100%);
        overflow-x: scroll;
        overflow-y: hidden;
        &::-webkit-scrollbar {
            /*纵向滚动条*/
            width: 4px;
            /*横向滚动条*/
            height: 4px;
        }
        &::-webkit-scrollbar-thumb {
            /*滚动条滑块颜色*/
            background-color: #3b4d70;
            border-radius: 2px;
        }
        &::-webkit-scrollbar-track {
            /*滚动条背景色*/
            background-color: rgba(0,0,0,0.1);
            border-radius: 2px;
        }
        &::-webkit-scrollbar-corner {
            /*表格滚动条角落*/
            //background-color: $em--color2;
            background-color: transparent;
        }
        .move-box{
            height:120px;
            display: inline-flex;
            .block{
                width:120px;
                height:120px;
                border-radius: 60px;
                border:1px red solid;
                margin: 0px 5px;
            }
        }
    }
</style>