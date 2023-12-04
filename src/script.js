import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import GUI from 'lil-gui'

/**
 * Base
 */
// Debug
const gui = new GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

const loader = new GLTFLoader()

/**
 * House
 */
// Group
const house = new THREE.Group()
scene.add(house)

// Walls
const walls = new THREE.Mesh(
    new THREE.BoxGeometry(4, 2.5, 4),
    new THREE.MeshStandardMaterial({map: textureLoader.load('textures/bricks/color.jpg')})
)
walls.position.y = 1.25;
walls.castShadow = true;
walls.receiveShadow = true;
house.add(walls)

//Additional walls
const walls2 = new THREE.Mesh(
    new THREE.BoxGeometry(6.5, 6.5, 3),
    new THREE.MeshStandardMaterial({map: textureLoader.load('textures/bricks/color.jpg')})
)
walls2.position.y = 1.25;
walls2.position.x = 0;
walls2.position.z = -2.5
walls2.castShadow = true;
walls2.receiveShadow = true;
house.add(walls2)

// Roof
// Door
const materialRoof = new THREE.MeshStandardMaterial({map: textureLoader.load('textures/roof/tuiles.jpg')})
materialRoof.map.repeat.set(10, 10);
materialRoof.map.wrapS = THREE.RepeatWrapping;
materialRoof.map.wrapT = THREE.RepeatWrapping;
const geometryRoof = new THREE.ConeGeometry(3.5, 1, 4);
const roof = new THREE.Mesh(geometryRoof, materialRoof);
roof.position.y = 2.5 + 0.5
roof.rotation.y = Math.PI * 0.25
roof.castShadow = true;
roof.receiveShadow = true;
house.add(roof)

//additional roof
const roof2 = new THREE.Mesh(geometryRoof, materialRoof);
roof2.scale.y = (3)
roof2.position.y = 5.5 + 0.5
roof2.position.x = 0
roof2.position.z = -2.5
roof2.rotation.y = Math.PI * 0.25
roof2.castShadow = true;
roof2.receiveShadow = true;
house.add(roof2)

const geometryRoof3 = new THREE.ConeGeometry(2, 1, 4);
const roof3 = new THREE.Mesh(geometryRoof3, materialRoof);
roof3.scale.y = (2)
roof3.position.y = 5 + 0.5
roof3.position.x = 2
roof3.position.z = -2.5
roof3.rotation.y = Math.PI * 0.25
roof3.castShadow = true;
roof3.receiveShadow = true;
house.add(roof3)

const roof4 = new THREE.Mesh(geometryRoof3, materialRoof);
roof4.scale.y = (2)
roof4.position.y = 5 + 0.5
roof4.position.x = -2
roof4.position.z = -2.5
roof4.rotation.y = Math.PI * 0.25
roof4.castShadow = true;
roof4.receiveShadow = true;
house.add(roof4)

//windows
const window1 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.5, 1),
    new THREE.MeshStandardMaterial({map: textureLoader.load('textures/windows/window.png'), transparent: true})
)
window1.position.x = 1.5
window1.position.y = 1.25
window1.position.z = 2.001
window1.castShadow = true;
window1.receiveShadow = true;
house.add(window1)

const window2 = new THREE.Mesh(
    new THREE.PlaneGeometry(0.5, 1),
    new THREE.MeshStandardMaterial({map: textureLoader.load('textures/windows/window.png'), transparent: true})
)
window2.position.x = -1.5
window2.position.y = 1.25
window2.position.z = 2.001
window2.castShadow = true;
window2.receiveShadow = true;
house.add(window2)

const window3 = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshStandardMaterial({map: textureLoader.load('textures/windows/window.png'), transparent: true})
)
window3.position.x = 1.5
window3.position.y = 3.7
window3.position.z = -0.9
window3.castShadow = true;
window3.receiveShadow = true;
house.add(window3)

const window4 = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshStandardMaterial({map: textureLoader.load('textures/windows/window.png'), transparent: true})
)
window4.position.x = -1.5
window4.position.y = 3.7
window4.position.z = -0.9
window4.castShadow = true;
window4.receiveShadow = true;
house.add(window4)

// Door
const materialDoor = new THREE.MeshStandardMaterial({map: textureLoader.load('textures/door/old_door.jpg')})
materialDoor.map.repeat.set(1, 1);
materialDoor.map.wrapS = THREE.RepeatWrapping;
materialDoor.map.wrapT = THREE.RepeatWrapping;
const geometryDoor = new THREE.PlaneGeometry(1, 1.5);
const door = new THREE.Mesh(geometryDoor, materialDoor);
door.position.x = 0
door.position.y = 0.75
door.position.z = 2 + 0.01
door.castShadow = true;
door.receiveShadow = true;
house.add(door)

// Bushes
const bushGeometry = new THREE.SphereGeometry(1, 16, 16)
const bushMaterial = new THREE.MeshStandardMaterial({map: textureLoader.load('textures/grass/color.jpg')})

const bush1 = new THREE.Mesh(bushGeometry, bushMaterial)
bush1.scale.set(0.5, 0.5, 0.5)
bush1.position.set(0.8, 0.2, 2.2)
bush1.castShadow = true;
bush1.receiveShadow = true;
house.add(bush1)

const bush2 = new THREE.Mesh(bushGeometry, bushMaterial)
bush2.scale.set(0.25, 0.25, 0.25)
bush2.position.set(1.4, 0.1, 2.1)
bush2.castShadow = true;
bush2.receiveShadow = true;
house.add(bush2)

const bush3 = new THREE.Mesh(bushGeometry, bushMaterial)
bush3.scale.set(0.4, 0.4, 0.4)
bush3.position.set(-0.8, 0.1, 2.2)
bush3.castShadow = true;
bush3.receiveShadow = true;
house.add(bush3)

const bush4 = new THREE.Mesh(bushGeometry, bushMaterial)
bush4.scale.set(0.15, 0.15, 0.15)
bush4.position.set(-1, 0.05, 2.6)
bush4.castShadow = true;
bush4.receiveShadow = true;
house.add(bush4)

const material = new THREE.MeshStandardMaterial({map: textureLoader.load('textures/grass/color.jpg')})
material.map.repeat.set(30, 30);
    material.map.wrapS = THREE.RepeatWrapping;
    material.map.wrapT = THREE.RepeatWrapping;
// Floor
const geometry = new THREE.PlaneGeometry(200, 150);
const floor = new THREE.Mesh(geometry, material);
floor.rotation.x = -Math.PI * 0.5
floor.position.y = 0
floor.receiveShadow = true;
scene.add(floor)

// Graves
const graves = new THREE.Group()
scene.add(graves)

const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2)
const graveMaterial = new THREE.MeshStandardMaterial({color: '#b2b6b1'})

for (let i = 0; i < 50; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 3 + Math.random() * 6;
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;
    const grave = new THREE.Mesh(graveGeometry, graveMaterial)
    grave.position.set(x, 0.3, z)
    grave.rotation.y = (Math.random() - 0.5) * 0.4
    grave.rotation.z = (Math.random() - 0.5) * 0.4
    grave.castShadow = true;
    grave.receiveShadow = true;
    graves.add(grave)
}

//lune qui tourne
const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({map: textureLoader.load('textures/moon/moonClair.png')})
)
moon.position.z = -0
moon.position.x = -8
moon.position.y = 10
moon.castShadow = true;
moon.receiveShadow = true;

scene.add(moon)


/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#ffffff', 0.01)
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
scene.add(ambientLight)

// Directional light
const moonLight = new THREE.DirectionalLight('#b9d5ff', 0.5)
moonLight.position.set(4, 5, -2)
moonLight.castShadow = true;
moonLight.shadow.mapSize.width = 1024; // default
moonLight.shadow.mapSize.height = 1024; // default
gui.add(moonLight, 'intensity').min(0).max(1).step(0.001)
gui.add(moonLight.position, 'x').min(-5).max(5).step(0.001)
gui.add(moonLight.position, 'y').min(-5).max(5).step(0.001)
gui.add(moonLight.position, 'z').min(-5).max(5).step(0.001)
scene.add(moonLight)

// Door light
const doorLight = new THREE.PointLight('#ff7d46', 1, 7)
doorLight.position.set(0, 2.2, 2.7)
doorLight.castShadow = true;
doorLight.shadow.mapSize.width = 1024; // default
doorLight.shadow.mapSize.height = 1024; // default
house.add(doorLight)

//windows light
const windowLight = new THREE.PointLight('#ff7d46', 1, 7)
windowLight.position.set(1.5, 1.25, 2.7)
windowLight.castShadow = true;
windowLight.shadow.mapSize.width = 1024; // default
windowLight.shadow.mapSize.height = 1024; // default
house.add(windowLight)

const windowLight2 = new THREE.PointLight('#ff7d46', 1, 7)
windowLight2.position.set(-1.5, 1.25, 2.7)
windowLight2.castShadow = true;
windowLight2.shadow.mapSize.width = 1024; // default
windowLight2.shadow.mapSize.height = 1024; // default
house.add(windowLight2)

const windowLight3 = new THREE.PointLight('#ff7d46', 1, 7)
windowLight3.position.set(1.5, 3.7, -0.2)
windowLight3.castShadow = true;
windowLight3.shadow.mapSize.width = 1024; // default
windowLight3.shadow.mapSize.height = 1024; // default
house.add(windowLight3)

const windowLight4 = new THREE.PointLight('#ff7d46', 1, 7)
windowLight4.position.set(-1.5, 3.7, -0.2)
windowLight4.castShadow = true;
windowLight4.shadow.mapSize.width = 1024; // default
windowLight4.shadow.mapSize.height = 1024; // default
house.add(windowLight4)

//lune light
const moonLight2 = new THREE.PointLight('#ffffff', 5, 7)
moonLight2.position.set(0, 10, -10)
moonLight2.castShadow = true;
moonLight2.shadow.mapSize.width = 1024; // default
moonLight2.shadow.mapSize.height = 1024; // default
scene.add(moonLight2)

// Ghosts
//model 3D de fantôme
let ghost3D;
loader.load(
    'models/3december_-fantasy_ghost.glb',
    (gltf) => {
        ghost3D = gltf.scene;
        ghost3D.traverse((child) => {
            child.castShadow = true;
            child.receiveShadow = true;
        })
        ghost3D.scale.set(0.007, 0.007, 0.007)
        ghost3D.position.set(0, 0, 0)
        scene.add(ghost3D)
    }
)

let ghost3D2;
loader.load(
    'models/3december_-fantasy_ghost.glb',
    (gltf) => {
        ghost3D2 = gltf.scene;
        ghost3D2.traverse((child) => {
            child.castShadow = true;
            child.receiveShadow = true;
        })
        ghost3D2.scale.set(0.007, 0.007, 0.007)
        ghost3D2.position.set(0, 0, 0)
        scene.add(ghost3D2)
    }
)

let ghost3D3;
loader.load(
    'models/3december_-fantasy_ghost.glb',
    (gltf) => {
        ghost3D3 = gltf.scene;
        ghost3D3.traverse((child) => {
            child.castShadow = true;
            child.receiveShadow = true;
        })
        ghost3D3.scale.set(0.007, 0.007, 0.007)
        ghost3D3.position.set(0, 0, 0)
        scene.add(ghost3D3)
    }
)

const ghost1 = new THREE.PointLight('#00ffff', 2, 3)
ghost1.castShadow = true;
ghost1.shadow.mapSize.width = 1024; // default
ghost1.shadow.mapSize.height = 1024; // default
scene.add(ghost1)

const ghost2 = new THREE.PointLight('#00ffff', 2, 3)
ghost2.castShadow = true;
ghost2.shadow.mapSize.width = 1024; // default
ghost2.shadow.mapSize.height = 1024; // default
scene.add(ghost2)

const ghost3 = new THREE.PointLight('#00ffff', 2, 3)
ghost3.castShadow = true;
ghost3.shadow.mapSize.width = 1024; // default
ghost3.shadow.mapSize.height = 1024; // default
scene.add(ghost3)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 4
camera.position.y = 1
camera.position.z = 8
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/** brouillard **/
const fog = new THREE.Fog('#262837', 1, 15)
scene.fog = fog

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor('#262837');

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Update ghosts
    const ghost1Angle = elapsedTime * 0.5;
    ghost1.position.x = Math.cos(ghost1Angle) * 4;
    ghost1.position.z = Math.sin(ghost1Angle) * 4;
    ghost1.position.y = Math.sin(elapsedTime * 3);

    const ghost2Angle = -elapsedTime * 0.32;
    ghost2.position.x = Math.cos(ghost2Angle) * 5;
    ghost2.position.z = Math.sin(ghost2Angle) * 5;
    ghost2.position.y = Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5);

    const ghost3Angle = -elapsedTime * 0.18;
    ghost3.position.x = Math.cos(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.32));
    ghost3.position.z = Math.sin(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.5));
    ghost3.position.y = Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5);

    // Render ghost 3D
    if (ghost3D) {
        ghost3D.position.copy(ghost2.position)
        ghost3D.position.y += 0.5
    }

    if (ghost3D2) {
        ghost3D2.position.copy(ghost1.position)
        ghost3D2.position.y += 0.5
    }

    if (ghost3D3) {
        ghost3D3.position.copy(ghost3.position)
        ghost3D3.position.y += 0.5
    }

    // lune qui tourne sur elle même
    moon.rotation.y = elapsedTime * 0.1

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()