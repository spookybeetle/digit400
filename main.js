import * as THREE from 'three';
import './style.css';
/*import javascriptLogo from './javascript.svg'
import viteLogo from 'public.vite.svg'*/
import { setupCounter } from './counter.js'

// Import Orbit controls 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


// create a new renderer by instating the canvas element in our HTML // file
const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'),
});


const geometry = new THREE.BoxGeometry(10, 10, 10);

//set the color of the basic material in the object parameters `{}`
//MW Changed color to purple
const material = new THREE.MeshBasicMaterial( { color: "rgb(178, 95, 226)" } );

const cube = new THREE.Mesh( geometry, material );


cube.position.z = -15;
cube.position.x = -15;

cube.rotation.x = 2;
cube.rotation.y = .5;

const ico = new THREE.IcosahedronGeometry(10);
//Changed color to a different green
const icoMaterial = new THREE.MeshPhongMaterial({ color: "rgb( 132, 240, 113 )" });
const icoMesh = new THREE.Mesh(ico, icoMaterial);



// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 10, 10);

const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.position.set(25, -15, -400);

scene.add( cube );
scene.add(icoMesh);

icoMesh.position.z= -15;
icoMesh.position.x= 15;
scene.add(pointLight);
scene.add(ambientLight);

renderer.render(scene, camera);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);
camera.position.setX(-3);

function animate() {
        requestAnimationFrame( animate );
        // rotate the cube fast
        cube.rotation.x += 0.1;
        cube.rotation.y += 0.3;
        // rotate the other cube thingy slowly
        icoMesh.rotation.z += -0.001
        icoMesh.rotation.y += -0.005
// rotate the smiley sphere on the Y axis:, changed to x axis
        smileMesh.rotation.x += 0.05
        controls.update()
        
// added orbit ocntrol component 
        controls.update()
        
        
            renderer.render( scene, camera );
}

// Helpers
        
        const lightHelper = new THREE.PointLightHelper(pointLight);
        
        scene.add(lightHelper)
        
//Grid Helper
        
        const gridHelper = new THREE.GridHelper(200,50);
        
        scene.add(gridHelper)
        
// Orbit Control
        
        const controls = new OrbitControls(camera, renderer.domElement)
        
// Background
        
        const spaceTexture = new THREE.TextureLoader().load('images/starry.jpg')
        
        scene.background = spaceTexture;
        
// Object texture mapping
        
        const smileTexture = new THREE.TextureLoader().load('images/kiwiBadge.PNG')
        
        const ball = new THREE.SphereGeometry( 10, 22, 10 );
        
        
        const smileMaterial = new THREE.MeshBasicMaterial({map: smileTexture})
        
        const smileMesh = new THREE.Mesh(ball, smileMaterial);
        
        scene.add(smileMesh);
        
//Creating a normal
const normalTexture = new THREE.TextureLoader().load('images/normalMaps/normal1.jpg');

// Normal Texture Map
        //changed knot geometry
        const torusGeo = new THREE.TorusKnotGeometry( 5, 1, 600, 5, 4, 25 );
        const torusMaterial = new THREE.MeshStandardMaterial( { 
          normalMap: normalTexture,
          roughness: 2,
          metalness: .8
        } );
        
        const torusKnot = new THREE.Mesh( torusGeo, torusMaterial );
        
        scene.add( torusKnot );
        torusKnot.position.y = 20
animate();
