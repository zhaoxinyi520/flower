import * as THREE from 'three'
import { Capsule } from 'three/addons/math/Capsule.js';

import config from './roomConfig'
let roomR = 40 //config.roomR


const vector1 = new THREE.Vector3();
const vector2 = new THREE.Vector3();
const vector3 = new THREE.Vector3();
//let playerOnFloor = true;
/** 创建webgl画布 **/
export const newRenderer  = ()=>{
    const renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.VSMShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    return renderer
}

export const addEventFn = (keyStates:any,container:any,camera:THREE.PerspectiveCamera)=>{
    document.addEventListener( 'keydown', ( event ) => {
      console.log(event.code)
        if(event.code=='Digit1'){
          document.body.requestPointerLock();
        }else if(event.code=='Digit2'){
          document.exitPointerLock();
        }
        keyStates[ event.code ] = true;
    } );
    document.addEventListener( 'keyup', ( event ) => {
        keyStates[ event.code ] = false;
    } );

    container.addEventListener( 'dblclick', () => {
        //document.body.requestPointerLock();
    } );

    document.body.addEventListener( 'mousemove', ( event ) => {
        if ( document.pointerLockElement === document.body ) {
          camera.rotation.y -= event.movementX / 500;
          camera.rotation.x -= event.movementY / 500;
        }
    } );
  
}

export const updatePlayer = ( deltaTime:any,playerVelocity:THREE.Vector3,playerCollider:Capsule,camera: THREE.PerspectiveCamera)=> {
    let damping = Math.exp( - 4 * deltaTime ) - 1;
    playerVelocity.addScaledVector( playerVelocity, damping );
    const deltaPosition = playerVelocity.clone().multiplyScalar( deltaTime );
    playerCollider.translate( deltaPosition );
    camera.position.copy( playerCollider.end );
}

export const controls2 = ( deltaTime:any,playerVelocity:THREE.Vector3 ,playerDirection:THREE.Vector3,camera:THREE.PerspectiveCamera,keyStates:any)=> {
    const  getForwardVector=()=> {
        camera.getWorldDirection( playerDirection );
        playerDirection.y = 0;
        playerDirection.normalize();
        return playerDirection;
    }
    const  getSideVector = ()=> {
        camera.getWorldDirection( playerDirection );
        playerDirection.y = 0;
        playerDirection.normalize();
        playerDirection.cross( camera.up );
        return playerDirection;
    }
    // const speedDelta = deltaTime * ( playerOnFloor ? 25 : 8 );
    const speedDelta = deltaTime * 500;
    if ( keyStates[ 'KeyW' ] ) {
      console.log("ww")
      playerVelocity.add( getForwardVector().multiplyScalar( speedDelta ) );
    }
    if ( keyStates[ 'KeyS' ] ) {
      console.log("ww")
      playerVelocity.add( getForwardVector().multiplyScalar( - speedDelta ) );
    }
    if ( keyStates[ 'KeyA' ] ) {
      playerVelocity.add( getSideVector().multiplyScalar( - speedDelta ) );
    }
    if ( keyStates[ 'KeyD' ] ) {
      playerVelocity.add( getSideVector().multiplyScalar( speedDelta ) );
    }
    // if ( playerOnFloor ) {
    //   if ( keyStates[ 'Space' ] ) {
    //     playerVelocity.y = 15;
    //   }
    // }

  }


  export const updateSpheres = ( deltaTime:any,playerCollider:Capsule,playerVelocity:THREE.Vector3 ,vector1:THREE.Vector3,vector2:THREE.Vector3,vector3:THREE.Vector3,spheres:any )=> {
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


  export const  teleportPlayerIfOob = (playerCollider:Capsule,camera:THREE.PerspectiveCamera)=> {
    const distance = roomR-0.15
    if ( camera.position.z <= - distance||camera.position.z>=distance||camera.position.x <= - distance||camera.position.x>=distance ) {
      playerCollider.start.set( 0, 0.35, 0 );
      playerCollider.end.set( 0, 1, 0 );
      playerCollider.radius = 0.35;
      camera.position.copy( playerCollider.end );
      camera.rotation.set( 0, 0, 0 );
    }
}