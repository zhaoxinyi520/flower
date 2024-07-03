import * as THREE from 'three'
export const createCamera = ()=>{
    const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.rotation.order = 'YXZ';
    return camera
}