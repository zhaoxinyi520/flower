<template>
    <div class="box" @click="playMusic">
        <Header ref="header"/>
        <Main/>
        <Bottom/>
    </div>
</template>
<script setup lang="ts">
import Header from '@/components/flower/Header.vue'
import Main from '@/components/flower/Main.vue'
import Bottom from '@/components/flower/Bottom.vue'
import { ref, onMounted  } from 'vue'

const header = ref(null);

onMounted(()=>{
    //init();
})

const playMusic = ()=>{
    if (header.value) {
        //header?.value?.playMethod();
    }
}

</script>

<style  scoped lang="scss">
.box{
    height:100%;
    background-image: url("@/assets/models/flower/pic/bg.jpg");
    background-size:cover;
    background-position: center;
}
</style>