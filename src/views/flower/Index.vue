
<script setup lang="ts">
import Header from '@/components/flower/Header.vue'
import Main from '@/components/flower/Main.vue'
import Bottom from '@/components/flower/Bottom.vue'
import { ref, onMounted  } from 'vue'

const headerRef:any = ref(null);

onMounted(()=>{
    //init();
})

const playMusic = ()=>{
    if (headerRef.value) {
        headerRef?.value?.playMethod();
    }
}

</script>
<template>
    <div class="box" @click="playMusic">
        <Header ref="headerRef" />
        <Main/>
        <Bottom/>
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