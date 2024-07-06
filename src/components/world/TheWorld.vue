<script setup lang="ts">
import { onMounted  } from 'vue'
import * as THREE from 'three'
import { Capsule } from 'three/addons/math/Capsule.js';
import { newRenderer ,addEventFn ,updatePlayer,controls ,updateSpheres,teleportPlayerIfOob} from './create'
import { ininScene , createScene} from './createScene'
import { getSpheres } from './createSpheres'
import { createCamera } from './createCamera'
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
const clock = new THREE.Clock();
//创建场景
const scene = new THREE.Scene();
/**创建光源 */
ininScene(scene)
//const spheres = getSpheres(scene)
/**创建相机 */
const camera = createCamera()
/**创建画布 */
let container:any;
/**每帧步数 */
const STEPS_PER_FRAME = 5;
const playerCollider = new Capsule( new THREE.Vector3( 0, 0.35, 0 ), new THREE.Vector3( 0, 1, 0 ), 0.35 );
const playerVelocity = new THREE.Vector3();
const playerDirection = new THREE.Vector3();
const keyStates:any = {};

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


      function Element( id:string, x:number, y:number, z:number, ry:any ) {
          const div = document.createElement( 'div' );
          div.style.width = '480px';
          div.style.height = '360px';
          div.style.backgroundColor = '#000';
          const iframe = document.createElement( 'iframe' );
          iframe.style.width = '480px';
          iframe.style.height = '360px';
          iframe.style.border = '0px';
          iframe.src = [ 'https://www.youtube.com/embed/', id, '?rel=0' ].join( '' );
          div.appendChild( iframe );
          const object = new CSS3DObject( div );
          object.position.set( x, y, z );
          object.rotation.y = ry;
          return object;
			}

      function init2() {
          const container = document.getElementById( 'container' );
          let renderer = new CSS3DRenderer();
          renderer.setSize( window.innerWidth/4, window.innerHeight/4 );
          container?.appendChild( renderer.domElement );
          const group = new THREE.Group();
          group.add( Element( 'SJOz3qjfQXU', 0, 0, 24, 0 ) );
          group.add( Element( 'Y2-xZ-1HE-Q', 24, 0, 0, Math.PI / 2 ) );
          group.add( Element( 'IrydklNpcFI', 0, 0, - 24, Math.PI ) );
          group.add( Element( '9ubytEsCaS0', - 24, 0, 0, - Math.PI / 2 ) );
          scene.add( group );
          const blocker:any = document.getElementById( 'blocker' );
          console.log(blocker)
          blocker.style.display = 'none';
          renderer.render( scene, camera );
			}

			
//页面初始化
onMounted(()=>{
  init()
  init2()
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