
import * as THREE from 'three'
import config from '../roomConfig'
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
let roomR = config.roomR


export const  Element = ( id:string, x:number, y:number, z:number, ry:any )=> {
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
export const drawFontWall = (scene:THREE.Scene)=>{

    const background = new THREE.Mesh( new THREE.PlaneGeometry( 2*roomR, 2*roomR ), new THREE.MeshPhongMaterial( { color: 'red', depthWrite: false } ) );
    background.rotation.y =  0
    background.position.set( 0, roomR, -roomR );
    background.receiveShadow = true;
    scene.add( background );
    

    const group = new THREE.Group();
    group.add(  Element( 'SJOz3qjfQXU', 0, 0, 2, 0 ) );
    scene.add( group );
    /**网格 */
    //drwaGrid(scene)
}



const drwaGrid = (scene:THREE.Scene)=>{
    // const grid_back = new THREE.GridHelper( 2*roomR, 4*roomR, 0x000000, 0x000000 );
    // grid_back.material.opacity = 1;
    // grid_back.rotateX(Math.PI / 2)
    // grid_back.position.set(0, roomR, -roomR )
    // grid_back.material.transparent = true;
    // scene.add( grid_back );
}