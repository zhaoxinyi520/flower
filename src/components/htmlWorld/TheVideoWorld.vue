

<template>
    <div class="test">
      <div  id="container"></div>
      <div style="border: 1px greenyellow solid;" id="blocker"></div>
    </div>
</template>
  <script setup lang="ts">
        import * as THREE from 'three';
        import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
        import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
        import { Capsule } from 'three/addons/math/Capsule.js';
        import { onMounted  } from 'vue'
        import { newRenderer ,addEventFn ,updatePlayer ,updateSpheres,teleportPlayerIfOob,controls2} from './create'
        const clock = new THREE.Clock();
        let camera:any, scene:any, renderer:any;
        let controls:any;
        const keyStates:any = {};
        /**每帧步数 */
        const STEPS_PER_FRAME = 5;
        const playerCollider = new Capsule( new THREE.Vector3( 0, 0.35, 0 ), new THREE.Vector3( 0, 1, 0 ), 0.35 );
        const playerVelocity = new THREE.Vector3();
        const playerDirection = new THREE.Vector3();
        
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
  
        
  
         /**创建画布 */
        let container:any;
        function init() {
            container = document.getElementById( 'container' );
            camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 5000 );
            camera.position.set( 0, 0, 100);
            scene = new THREE.Scene();
            renderer = new CSS3DRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );
            container.appendChild( renderer.domElement );
            const group = new THREE.Group();
            group.add( Element( 'SJOz3qjfQXU', 0, 0, 240, 0 ) );
            group.add( Element( 'Y2-xZ-1HE-Q', 240, 0, 0, Math.PI / 2 ) );
            group.add( Element( 'IrydklNpcFI', 0, 0, - 240, Math.PI ) );
            group.add( Element( '9ubytEsCaS0', - 240, 0, 0, - Math.PI / 2 ) );
            scene.add( group );
            const blocker:any = document.getElementById( 'blocker' );
            blocker.style.display = 'none';
            /**添加鼠标监听事件 */
            addEventFn(keyStates,container,camera)


            function animate() {
                const deltaTime = Math.min( 0.05, clock.getDelta() ) / STEPS_PER_FRAME;
                for ( let i = 0; i < STEPS_PER_FRAME; i ++ ) {
                    /**控制视野 */
                    controls2( deltaTime ,playerVelocity,playerDirection,camera,keyStates);
                    // /**更改坐标 */
                    updatePlayer( deltaTime,playerVelocity,playerCollider,camera );
                    // /** 跟新球体 */
                    // //updateSpheres( deltaTime,playerCollider,playerVelocity ,vector1,vector2,vector3,spheres );
                    // /**穿墙 */
                    // teleportPlayerIfOob(playerCollider,camera)
                    
                }
                renderer.render( scene, camera );
                requestAnimationFrame( animate );
            }
   
            animate();
       }
  
  
       function animate() {
          requestAnimationFrame( animate );
          renderer.render( scene, camera );
       }
  
       onMounted(()=>{
            init();
       })
  
  
  </script>
  <style  scoped lang="scss">
  .test{
    height: 100%;
  
  }
  </style>
  