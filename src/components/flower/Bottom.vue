<script setup lang="ts">
    import { ref,onMounted } from 'vue';
    let list:any = ref([1,2,3,4,5,6,7,8,9,10,11,12,13])
    let element:any
    
    onMounted(()=>{
        animateScroll();
    })

    const animateScroll = ()=>{
        element = document.getElementById('movebox'); // 假设这是你的滚动容器
        let timer = setInterval(() => {
            let html = `<div class='new-block' style='background-image:url(${getImageUrl('../../assets/models/flower/pic/bottom/'+3+'.jpg')})'>
                
            </div>`
            element.insertAdjacentHTML("afterbegin",html)
            let lastChild = element.children[element.children.length-1]
            lastChild.remove()
        }, 10000);
    }

    const moveBlock = ()=>{
        
    }

    const getImageUrl = (name) => {
        return new URL(name, import.meta.url).href;
    };

    
</script>
<template>
    <div class="bottom">
        <main id="movebox" class="move-box" >
            <div class="new-block" v-for="(item,index) in list"
             :style="`background-image:url(${getImageUrl('../../assets/models/flower/pic/bottom/'+item+'.jpg')})`" :key="index">
            </div>
        </main>
    </div>
</template>
<style scoped lang='scss'>
    .bottom{
        height:120px;
        box-shadow: 0px 3px 3px rgba(0,0,0,0.2);
        background: linear-gradient(180deg,rgba(211, 221, 204,0.7) 0%,rgba(0,0,0,0) 50%,rgba(148, 145, 138,0.7) 100%);
        
        //overflow-x: scroll;
        //overflow-y: hidden;
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
            width:100%;
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            
        }
    }
</style>