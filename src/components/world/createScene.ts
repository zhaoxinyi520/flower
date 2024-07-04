import * as THREE from 'three'

let roomR = 3
export const ininScene = (scene:THREE.Scene)=>{
    /**创建光源 */
    scene.background = new THREE.Color( 0xffffff );
    scene.fog = new THREE.Fog( 0xffffff, 0, 50 );
    const fillLight1 = new THREE.HemisphereLight( 0xffffff, 0xffffff, 1.5 );
    fillLight1.position.set( 2, 1, 1 );
    scene.add( fillLight1 );

    const directionalLight = new THREE.DirectionalLight( 0xffffff, 2.5 );
    directionalLight.position.set( 1, 10,  1 );
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
}



export const createScene = (scene:THREE.Scene)=>{
    /**画地板 */
    drawGround(scene)
    /** 画墙壁 */
    drawWall(scene)
    /**画天花板 */
    drawSky(scene)
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

import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';
/**天花板 */
export const drawSky = (scene:THREE.Scene)=>{
    const topground = new THREE.Mesh( new THREE.PlaneGeometry( 2*roomR, 2*roomR ), new THREE.MeshPhongMaterial( { color: 0xFFFFFF, depthWrite: false } ) );
    topground.rotation.x = Math.PI / 2;
    topground.position.set( 0, 2*roomR, 0 );
    topground.receiveShadow = true;
    scene.add( topground );




    const loader = new SVGLoader();

    let guiData = {
        currentURL: './models/svg/tiger.svg',
        drawFillShapes: true,
        drawStrokes: true,
        fillShapesWireframe: false,
        strokesWireframe: false
    };

    loader.load( "/public/models/tiger.svg", function ( data ) {

        const group = new THREE.Group();
        group.scale.multiplyScalar( 0.01 );
        group.position.x = -3;
        group.position.y = 6;
        group.position.z = 3;
        //group.scale.z = 5
        //group.scale.x = 0
        group.rotateX(Math.PI / 2)
        group.scale.y *= - 1;
        let renderOrder = 0;
        for ( const path of data.paths ) {
            const fillColor = path.userData.style.fill;
            if ( guiData.drawFillShapes && fillColor !== undefined && fillColor !== 'none' ) {
                const material = new THREE.MeshBasicMaterial( {
                    color: new THREE.Color().setStyle( fillColor ),
                    opacity: path.userData.style.fillOpacity,
                    transparent: true,
                    side: THREE.DoubleSide,
                    depthWrite: false,
                    wireframe: guiData.fillShapesWireframe
                } );
                const shapes = SVGLoader.createShapes( path );
                for ( const shape of shapes ) {
                    const geometry = new THREE.ShapeGeometry( shape );
                    const mesh = new THREE.Mesh( geometry, material );
                    mesh.renderOrder = renderOrder ++;
                    group.add( mesh );
                }
            }
            const strokeColor = path.userData.style.stroke;
            if ( guiData.drawStrokes && strokeColor !== undefined && strokeColor !== 'none' ) {
                const material = new THREE.MeshBasicMaterial( {
                    color: new THREE.Color().setStyle( strokeColor ),
                    opacity: path.userData.style.strokeOpacity,
                    transparent: true,
                    side: THREE.DoubleSide,
                    depthWrite: false,
                    wireframe: guiData.strokesWireframe
                } );
                for ( const subPath of path.subPaths ) {
                    const geometry = SVGLoader.pointsToStroke( subPath.getPoints(), path.userData.style );
                    if ( geometry ) {
                        const mesh = new THREE.Mesh( geometry, material );
                        mesh.renderOrder = renderOrder ++;
                        group.add( mesh );
                    }
                }
            }
        }
        scene.add( group );
    })

    // const grid_top = new THREE.GridHelper( 2*roomR, 4*roomR, 0x000000, 0x000000 );
    // grid_top.material.opacity = 1;
    // grid_top.position.set( 0, 2*roomR, 0 );
    // grid_top.material.transparent = true;
    // scene.add( grid_top );
}

