
<script setup lang="ts">
import Header from '@/components/flower/Header.vue'
import Main from '@/components/flower/Main.vue'
import Bottom from '@/components/flower/Bottom.vue'
import { ref, onMounted  } from 'vue'

const headerRef:any = ref(null);
const mainRef:any = ref(null)

onMounted(()=>{
    //init();
})

const playMusic = ()=>{
    if (headerRef.value) {
        headerRef?.value?.playMethod();
    }
}

const changeImg = (val:any)=>{
    if(mainRef.value){
        mainRef.value.changeImgFn(val)
    }
}

</script>
<template>
    <div class="box" @click="playMusic">
        <Header ref="headerRef" />
        <Main ref="mainRef" />
        <Bottom @change-img = "changeImg" />
    </div>
</template>
<style  scoped lang="scss">
.box{
    height:100%;
    background-image: url("@/assets/models/flower/pic/bg.jpg");
    background-size:cover;
    background-position: center;
}
</style>