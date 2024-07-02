<script setup lang="ts">
import { onMounted  } from 'vue'
import * as THREE from 'three'
import { Capsule } from 'three/addons/math/Capsule.js';
import { newRenderer ,drawGround, drawWall, drawSky,addEventFn ,updatePlayer,controls ,updateSpheres,teleportPlayerIfOob} from '@/utils/home/create'
import {ininScene} from './createScene'
const clock = new THREE.Clock();
const scene = new THREE.Scene();
ininScene(scene)

const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.rotation.order = 'YXZ';


//创建一个三维场景 asd232  sds
let container:any;
const NUM_SPHERES = 100;
const SPHERE_RADIUS = 0.2;
const STEPS_PER_FRAME = 5;
const sphereGeometry = new THREE.IcosahedronGeometry( SPHERE_RADIUS, 5 );
const sphereMaterial = new THREE.MeshLambertMaterial( { color: 0xdede8d } );
const spheres:any = [];
const playerCollider = new Capsule( new THREE.Vector3( 0, 0.35, 0 ), new THREE.Vector3( 0, 1, 0 ), 0.35 );
const playerVelocity = new THREE.Vector3();
const playerDirection = new THREE.Vector3();
const keyStates:any = {};
const vector1 = new THREE.Vector3();
const vector2 = new THREE.Vector3();
const vector3 = new THREE.Vector3();
for ( let i = 0; i < NUM_SPHERES; i ++ ) {
    const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    scene.add( sphere );
    spheres.push( {
      mesh: sphere,
      collider: new THREE.Sphere( new THREE.Vector3( 0, - 100, 0 ), SPHERE_RADIUS ),
      velocity: new THREE.Vector3()
    } );
}

const init = ()=>{
    /**创建画布 */
    container = document.getElementById( 'container' );
    const renderer = newRenderer()
    container.appendChild( renderer.domElement );
    /**画地板 */
    drawGround(scene)
    /** 画墙壁 */
    drawWall(scene)
    /**画天花板 */
    drawSky(scene)
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
            updateSpheres( deltaTime,playerCollider,playerVelocity ,vector1,vector2,vector3,spheres );
            /**穿墙 */
            teleportPlayerIfOob(playerCollider,camera)
        }
        renderer.render( scene, camera );
        requestAnimationFrame( animate );
    }
    animate();
}
//页面初始化
onMounted(()=>{
  init()
})

</script>

<template>
<div class="home-box">
  <div id="container" class="box-3d">

  </div>
</div>
</template>
<style scoped lang="scss">
.home-box{
  width: 100%;
  height: 100%;
  .box-3d{
    width: 100%;
    height: 100%;
  }
}
</style>