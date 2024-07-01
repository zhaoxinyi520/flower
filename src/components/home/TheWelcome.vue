<script setup lang="ts">
import { onMounted  } from 'vue'
import * as THREE from 'three'
import { Capsule } from 'three/addons/math/Capsule.js';
import { newRenderer ,drawGround, drawWall, drawSky,addEventFn ,updatePlayer} from '@/utils/home/create'
const clock = new THREE.Clock();
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x88ccee );
scene.fog = new THREE.Fog( 0x88ccee, 0, 50 );
const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.rotation.order = 'YXZ';

const fillLight1 = new THREE.HemisphereLight( 0x8dc1de, 0x00668d, 1.5 );
fillLight1.position.set( 2, 1, 1 );
scene.add( fillLight1 );
const directionalLight = new THREE.DirectionalLight( 0xffffff, 2.5 );
directionalLight.position.set( - 5, 25, - 1 );
directionalLight.castShadow = true;
directionalLight.shadow.camera.near = 0.01;
directionalLight.shadow.camera.far = 500;
directionalLight.shadow.camera.right = 30;
directionalLight.shadow.camera.left = - 30;
directionalLight.shadow.camera.top	= 30;
directionalLight.shadow.camera.bottom = - 30;
directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;
directionalLight.shadow.radius = 4;
directionalLight.shadow.bias = - 0.00006;
scene.add( directionalLight );


//创建一个三维场景 asd232

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
let playerOnFloor = true;

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



    function playerSphereCollision( sphere:any ) {
      const center = vector1.addVectors( playerCollider.start, playerCollider.end ).multiplyScalar( 0.5 );
      const sphere_center = sphere.collider.center;
      const r = playerCollider.radius + sphere.collider.radius;
      const r2 = r * r;
      for ( const point of [ playerCollider.start, playerCollider.end, center ] ) {
        const d2 = point.distanceToSquared( sphere_center );
        if ( d2 < r2 ) {
          const normal = vector1.subVectors( point, sphere_center ).normalize();
          const v1 = vector2.copy( normal ).multiplyScalar( normal.dot( playerVelocity ) );
          const v2 = vector3.copy( normal ).multiplyScalar( normal.dot( sphere.velocity ) );
          playerVelocity.add( v2 ).sub( v1 );
          sphere.velocity.add( v1 ).sub( v2 );
          const d = ( r - Math.sqrt( d2 ) ) / 2;
          sphere_center.addScaledVector( normal, - d );
        }
      }
    }
    function spheresCollisions() {
      for ( let i = 0, length = spheres.length; i < length; i ++ ) {
        const s1 = spheres[ i ];
        for ( let j = i + 1; j < length; j ++ ) {
          const s2 = spheres[ j ];
          const d2 = s1.collider.center.distanceToSquared( s2.collider.center );
          const r = s1.collider.radius + s2.collider.radius;
          const r2 = r * r;
          if ( d2 < r2 ) {
            const normal = vector1.subVectors( s1.collider.center, s2.collider.center ).normalize();
            const v1 = vector2.copy( normal ).multiplyScalar( normal.dot( s1.velocity ) );
            const v2 = vector3.copy( normal ).multiplyScalar( normal.dot( s2.velocity ) );
            s1.velocity.add( v2 ).sub( v1 );
            s2.velocity.add( v1 ).sub( v2 );
            const d = ( r - Math.sqrt( d2 ) ) / 2;
            s1.collider.center.addScaledVector( normal, d );
            s2.collider.center.addScaledVector( normal, - d );
          }
        }
      }
    }
    function updateSpheres( deltaTime:any ) {
      spheres.forEach( (sphere:any) => {
        sphere.collider.center.addScaledVector( sphere.velocity, deltaTime );
        const damping = Math.exp( - 1.5 * deltaTime ) - 1;
        sphere.velocity.addScaledVector( sphere.velocity, damping );
        playerSphereCollision( sphere );
      } );
      spheresCollisions();
      for ( const sphere of spheres ) {
        sphere.mesh.position.copy( sphere.collider.center );
      }
    }
    function getForwardVector() {
      camera.getWorldDirection( playerDirection );
      playerDirection.y = 0;
      playerDirection.normalize();
      return playerDirection;
    }
    function getSideVector() {
      camera.getWorldDirection( playerDirection );
      playerDirection.y = 0;
      playerDirection.normalize();
      playerDirection.cross( camera.up );
      return playerDirection;
    }
    function controls( deltaTime:any ) {
      const speedDelta = deltaTime * ( playerOnFloor ? 25 : 8 );
      if ( keyStates[ 'KeyW' ] ) {
        playerVelocity.add( getForwardVector().multiplyScalar( speedDelta ) );
      }
      if ( keyStates[ 'KeyS' ] ) {
        playerVelocity.add( getForwardVector().multiplyScalar( - speedDelta ) );
      }
      if ( keyStates[ 'KeyA' ] ) {
        playerVelocity.add( getSideVector().multiplyScalar( - speedDelta ) );
      }
      if ( keyStates[ 'KeyD' ] ) {
        playerVelocity.add( getSideVector().multiplyScalar( speedDelta ) );
      }

      if ( playerOnFloor ) {
        if ( keyStates[ 'Space' ] ) {
          playerVelocity.y = 15;
        }
      }

    }



    // 穿墙
    function teleportPlayerIfOob() {
        if ( camera.position.z <= - 4.9||camera.position.z>=4.9||camera.position.x <= - 4.9||camera.position.x>=4.9 ) {
          playerCollider.start.set( 0, 0.35, 0 );
          playerCollider.end.set( 0, 1, 0 );
          playerCollider.radius = 0.35;
          camera.position.copy( playerCollider.end );
          camera.rotation.set( 0, 0, 0 );
        }
    }

    function animate() {
        const deltaTime = Math.min( 0.05, clock.getDelta() ) / STEPS_PER_FRAME;
        for ( let i = 0; i < STEPS_PER_FRAME; i ++ ) {
            controls( deltaTime );
            updatePlayer( deltaTime,playerVelocity,playerCollider,camera );
            updateSpheres( deltaTime );
            /**穿墙 */
            teleportPlayerIfOob()
        }
        renderer.render( scene, camera );
        requestAnimationFrame( animate );
    }
    animate();
}
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