import * as THREE from 'three'
import { Capsule } from 'three/addons/math/Capsule.js';


let roomR = 3


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

export const drawGround = (scene:THREE.Scene)=>{
    const ground = new THREE.Mesh( new THREE.PlaneGeometry( 2*roomR, 2*roomR ), new THREE.MeshPhongMaterial( { color: 0xbbbbbb, depthWrite: false } ) );
    ground.rotation.x = - Math.PI / 2;
    ground.receiveShadow = true;
    scene.add( ground );
    const grid = new THREE.GridHelper( 2*roomR, 4*roomR, 0x000000, 0x000000 );
    grid.material.opacity = 1;
    grid.material.transparent = true;
    scene.add( grid );
}

export const drawWall = (scene:THREE.Scene)=>{
    const background = new THREE.Mesh( new THREE.PlaneGeometry( 2*roomR, 2*roomR ), new THREE.MeshPhongMaterial( { color: 'red', depthWrite: false } ) );
    background.rotation.y =  0
    background.position.set( 0, roomR, -roomR );
    background.receiveShadow = true;
    scene.add( background );
    const grid_back = new THREE.GridHelper( 2*roomR, 4*roomR, 0x000000, 0x000000 );
    grid_back.material.opacity = 1;
    grid_back.rotateX(Math.PI / 2)
    grid_back.position.set(0, roomR, -roomR )
    grid_back.material.transparent = true;
    scene.add( grid_back );

    const leftground = new THREE.Mesh( new THREE.PlaneGeometry( 2*roomR, 2*roomR ), new THREE.MeshPhongMaterial( { color: 'green', depthWrite: false } ) );
    leftground.rotation.y = Math.PI / 2
    leftground.position.set( -roomR, roomR, 0 );
    leftground.receiveShadow = true;
    scene.add( leftground );
    const grid_left = new THREE.GridHelper( 2*roomR, 4*roomR, 0x000000, 0x000000 );
    grid_left.material.opacity = 1;
    grid_left.rotateZ(Math.PI / 2)
    grid_left.position.set(-roomR, roomR, 0 )
    grid_left.material.transparent = true;
    scene.add( grid_left );

    const rightground = new THREE.Mesh( new THREE.PlaneGeometry( 2*roomR, 2*roomR ), new THREE.MeshPhongMaterial( { color: 'yellow', depthWrite: false } ) );
    rightground.rotation.y = -Math.PI/2
    rightground.position.set( roomR, roomR, 0 );
    rightground.receiveShadow = true;
    scene.add( rightground );
    const grid_right = new THREE.GridHelper( 2*roomR, 4*roomR, 0x000000, 0x000000 );
    grid_right.material.opacity = 1;
    grid_right.rotateZ(Math.PI / 2)
    grid_right.position.set(roomR, roomR, 0 )
    grid_right.material.transparent = true;
    scene.add( grid_right );

    const frontground = new THREE.Mesh( new THREE.PlaneGeometry( 2*roomR, 2*roomR ), new THREE.MeshPhongMaterial( { color: 'blue', depthWrite: false } ) );
    frontground.rotation.y =  Math.PI
    frontground.position.set( 0, roomR, roomR );
    frontground.receiveShadow = true;
    scene.add( frontground );
    const grid_front = new THREE.GridHelper( 2*roomR, 4*roomR, 0x000000, 0x000000 );
    grid_front.material.opacity = 1;
    grid_front.rotateX(Math.PI / 2)
    grid_front.position.set(0, roomR, roomR )
    grid_front.material.transparent = true;
    scene.add( grid_front );
}

export const drawSky = (scene:THREE.Scene)=>{
    const topground = new THREE.Mesh( new THREE.PlaneGeometry( 2*roomR, 2*roomR ), new THREE.MeshPhongMaterial( { color: 'red', depthWrite: false } ) );
    topground.rotation.x = Math.PI / 2;
    topground.position.set( 0, 2*roomR, 0 );
    topground.receiveShadow = true;
    scene.add( topground );
    const grid_top = new THREE.GridHelper( 2*roomR, 4*roomR, 0x000000, 0x000000 );
    grid_top.material.opacity = 1;
    grid_top.position.set( 0, 2*roomR, 0 );
    grid_top.material.transparent = true;
    scene.add( grid_top );
}

export const addEventFn = (keyStates:any,container:any,camera:THREE.PerspectiveCamera)=>{
    document.addEventListener( 'keydown', ( event ) => {
        keyStates[ event.code ] = true;
    } );
    document.addEventListener( 'keyup', ( event ) => {
        keyStates[ event.code ] = false;
    } );

    container.addEventListener( 'mousedown', () => {
        document.body.requestPointerLock();
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

export const controls = ( deltaTime:any,playerVelocity:THREE.Vector3 ,playerDirection:THREE.Vector3,camera:THREE.PerspectiveCamera,keyStates:any)=> {
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
    const speedDelta = deltaTime * 25;
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