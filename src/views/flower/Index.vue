<script setup lang="ts">
import Header from '@/components/flower/Header.vue'
import Main from '@/components/flower/Main.vue'
import Bottom from '@/components/flower/Bottom.vue'
import { onMounted  } from 'vue'



onMounted(()=>{
    //init();
})

</script>
<template>
    <div class="box" @click="init">
        <Header/>
        <Main/>
        <Bottom/>
        
    </div>
</template>
<style  scoped lang="scss">
.box{
    height:100%;
    background-image: url("@/assets/models/flower/pic/bg.jpg");
    background-size:cover;
    
    
    
}
</style>