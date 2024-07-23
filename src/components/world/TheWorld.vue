<script setup lang="ts">
import { onMounted  } from 'vue'
import * as THREE from 'three'
import { Capsule } from 'three/addons/math/Capsule.js';
import { newRenderer ,addEventFn ,updatePlayer,controls ,updateSpheres,teleportPlayerIfOob} from './create'
import { ininScene , createScene} from './createScene'
import { getSpheres } from './createSpheres'
import { createCamera } from './createCamera'
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
const clock = new THREE.Clock();
//创建场景
const scene = new THREE.Scene();
/**创建光源 */
 ininScene(scene)
// //const spheres = getSpheres(scene)
// /**创建相机 */
const camera = createCamera()
/**创建画布 */
let container:any;
/**每帧步数 */
const STEPS_PER_FRAME = 5;
const playerCollider = new Capsule( new THREE.Vector3( 0, 0.35, 0 ), new THREE.Vector3( 0, 1, 0 ), 0.35 );
const playerVelocity = new THREE.Vector3();
const playerDirection = new THREE.Vector3();
const keyStates:any = {};

let renderer:any;
let controls2:any;
const init = ()=>{
    /**创建画布 */
    container = document.getElementById( 'container' );
    const renderer = newRenderer()
    container.appendChild( renderer.domElement );
    /**创建墙壁 */
    createScene(scene)
    /**添加鼠标监听事件 */
    addEventFn(keyStates,container,camera)
    function animate() {
        const deltaTime = Math.min( 0.05, clock.getDelta() ) / STEPS_PER_FRAME;
        for ( let i = 0; i < STEPS_PER_FRAME; i ++ ) {
            /**控制视野 */
            controls( deltaTime ,playerVelocity,playerDirection,camera,keyStates);
            /**更改坐标 */
            updatePlayer( deltaTime,playerVelocity,playerCollider,camera );
            /** 跟新球体 */
            //updateSpheres( deltaTime,playerCollider,playerVelocity ,vector1,vector2,vector3,spheres );
            /**穿墙 */
            teleportPlayerIfOob(playerCollider,camera)
            
        }
        renderer.render( scene, camera );
        requestAnimationFrame( animate );
    }
    animate();
}



function animate() {
  requestAnimationFrame( animate );
  controls2.update();
  renderer.render( scene, camera );
}

			
//页面初始化
onMounted(()=>{
  init()
  //init2()
  animate()
})
</script>
<template>
<div class="home-box">
  <div id="container" class="box-3d"></div>
  <div style="border: 1px greenyellow solid;" id="blocker"></div>
</div>
</template>
<style scoped lang="scss">
.home-box{
  width: 100%;
  height: 100%;
  .box-3d{
    width: 100%;
    height: 100%;
    border: 1px red solid;
  }
}
</style>