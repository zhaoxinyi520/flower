import * as THREE from 'three'
import { Capsule } from 'three/addons/math/Capsule.js';
/** 创建webgl画布 **/
export const newRenderer  = ()=>{
    console.log("!!!")
    const renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.VSMShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    return renderer
}

export const drawGround = (scene:THREE.Scene)=>{
    const ground = new THREE.Mesh( new THREE.PlaneGeometry( 10, 10 ), new THREE.MeshPhongMaterial( { color: 0xbbbbbb, depthWrite: false } ) );
    ground.rotation.x = - Math.PI / 2;
    ground.receiveShadow = true;
    scene.add( ground );
    const grid = new THREE.GridHelper( 10, 20, 0x000000, 0x000000 );
    grid.material.opacity = 1;
    grid.material.transparent = true;
    scene.add( grid );
}

export const drawWall = (scene:THREE.Scene)=>{
    const background = new THREE.Mesh( new THREE.PlaneGeometry( 10, 10 ), new THREE.MeshPhongMaterial( { color: 'red', depthWrite: false } ) );
    background.rotation.y =  0
    background.position.set( 0, 5, -5 );
    background.receiveShadow = true;
    scene.add( background );
    const grid_back = new THREE.GridHelper( 10, 20, 0x000000, 0x000000 );
    grid_back.material.opacity = 1;
    grid_back.rotateX(Math.PI / 2)
    grid_back.position.set(0, 5, -5 )
    grid_back.material.transparent = true;
    scene.add( grid_back );

    const leftground = new THREE.Mesh( new THREE.PlaneGeometry( 10, 10 ), new THREE.MeshPhongMaterial( { color: 'green', depthWrite: false } ) );
    leftground.rotation.y = Math.PI / 2
    leftground.position.set( -5, 5, 0 );
    leftground.receiveShadow = true;
    scene.add( leftground );
    const grid_left = new THREE.GridHelper( 10, 20, 0x000000, 0x000000 );
    grid_left.material.opacity = 1;
    grid_left.rotateZ(Math.PI / 2)
    grid_left.position.set(-5, 5, 0 )
    grid_left.material.transparent = true;
    scene.add( grid_left );

    const rightground = new THREE.Mesh( new THREE.PlaneGeometry( 10, 10 ), new THREE.MeshPhongMaterial( { color: 'yellow', depthWrite: false } ) );
    rightground.rotation.y = -Math.PI/2
    rightground.position.set( 5, 5, 0 );
    rightground.receiveShadow = true;
    scene.add( rightground );
    const grid_right = new THREE.GridHelper( 10, 20, 0x000000, 0x000000 );
    grid_right.material.opacity = 1;
    grid_right.rotateZ(Math.PI / 2)
    grid_right.position.set(5, 5, 0 )
    grid_right.material.transparent = true;
    scene.add( grid_right );

    const frontground = new THREE.Mesh( new THREE.PlaneGeometry( 10, 10 ), new THREE.MeshPhongMaterial( { color: 'blue', depthWrite: false } ) );
    frontground.rotation.y =  Math.PI
    frontground.position.set( 0, 5, 5 );
    frontground.receiveShadow = true;
    scene.add( frontground );
    const grid_front = new THREE.GridHelper( 10, 20, 0x000000, 0x000000 );
    grid_front.material.opacity = 1;
    grid_front.rotateX(Math.PI / 2)
    grid_front.position.set(0, 5, 5 )
    grid_front.material.transparent = true;
    scene.add( grid_front );
}

export const drawSky = (scene:THREE.Scene)=>{
    const topground = new THREE.Mesh( new THREE.PlaneGeometry( 10, 10 ), new THREE.MeshPhongMaterial( { color: 'red', depthWrite: false } ) );
    topground.rotation.x = Math.PI / 2;
    topground.position.set( 0, 10, 0 );
    topground.receiveShadow = true;
    scene.add( topground );
    const grid_top = new THREE.GridHelper( 10, 20, 0x000000, 0x000000 );
    grid_top.material.opacity = 1;
    grid_top.position.set( 0, 10, 0 );
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