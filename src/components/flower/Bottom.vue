<script setup lang="ts">
    import { ref, onMounted, defineEmits} from 'vue';
    import { nextTick } from 'vue';
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13]
    let list:any = ref(arr)
    let element:any
    const emit = defineEmits()
    
    onMounted(()=>{
        animateScroll();
    })

    //随机不重复数据
    const getRandomNumber =()=> {
        let rd = Math.floor(Math.random() * 30) + 1
        while (arr.includes(rd)) {
            rd = Math.floor(Math.random() * 30) + 1
        }
        // list.value.unshift(rd)
        // list.value.pop()
        arr.unshift(rd)
        arr.pop()
        return rd
    }
 
    //定时任务
    const animateScroll = ()=>{
        element = document.getElementById('movebox'); // 假设这是你的滚动容器
        let timer = setInterval(() => {
            let num = getRandomNumber()

            console.log(num,arr)
            let html = `<div id=${num}  class='new-block' style='background-image:url(${getImageUrl('http://47.98.168.146:8080/images/flower/bottom/'+num+'.jpg')})'>
                
            </div>`
            
            
            
            element.insertAdjacentHTML("afterbegin",html)
            let lastChild = element.children[element.children.length-1]
            lastChild.remove()
            nextTick(()=>{
                let dom = document.getElementById(num)
                dom.addEventListener('mouseover', function(event) {
                    handleMouseOver(num)
                });
            });
            
        }, 10000);
    }

    const getImageUrl = (name:any) => {
        return new URL(name, import.meta.url).href;
    };

    const changeImg = (val:any)=>{
        emit('change-img',val)
    }

    const handleMouseOver = (val:any)=>{
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~val:",val)
        emit('change-center-img',val)
    }
    
</script>
<template>
    <div class="bottom">
        <main id="movebox" class="move-box" >
            <div class="new-block" v-for="(item,index) in list"
            @mouseover="handleMouseOver(item)" 
            :style="`background-image:url(${getImageUrl('http://47.98.168.146:8080/images/flower/bottom/'+item+'.jpg')})`" :key="index">
            </div>
        </main>
    </div>
</template>
<style scoped lang='scss'>
    .bottom{
        height:130px;
        box-shadow: 0px 3px 3px rgba(0,0,0,0.2);
        background: linear-gradient(180deg,rgba(211, 221, 204,0.7) 0%,rgba(0,0,0,0) 50%,rgba(148, 145, 138,0.7) 100%);
        .move-box{
            height:130px;
            padding: 5px 0px;
            width:100%;
            white-space: nowrap;
            overflow: hidden;
        }
    }
</style>