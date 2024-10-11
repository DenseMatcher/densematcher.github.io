// //Import the THREE.js library
// import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// // To allow for the camera to move around the scene
// import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// // To allow for importing the .gltf file
// import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
// import { OBJLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/OBJLoader.js";


// //Set which object to render
// let objToRender = 'dino';


// let list = [
//   "1d6d1_toy_animals_015", "2d6b3_toy_animals_009", "34fb4_toy_animals_019",
//   "2a535_toy_truck_002", "35ebd_toy_car_022", "6bb21_toy_bus_041", 
//   "apple_19", "apple_44", "apple_42",
//   "banana_84", "banana_98", "banana_133"
// ];  // Add more folder names as needed
// const list_assets = list.flatMap(folder => [
//   { type: "annotation", path: `static/meshes/${folder}/annotation.obj` },
//   { type: "color", path: `static/meshes/${folder}/color_mesh.obj` }
// ]);
// list_assets.forEach((asset, index) => {
//   if (asset.type === 'color') {
//     return;
//   }
  
//   //Create a Three.JS Scene
//   const scene = new THREE.Scene();
//   //create a new camera with positions and angles
//   // const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
//   const camera = new THREE.PerspectiveCamera(75, 1 / 0.75, 0.1, 1000);


//   //Keep track of the mouse position, so we can make the eye move
//   let mouseX = window.innerWidth / 2;
//   let mouseY = window.innerHeight / 2;

//   //Keep the 3D object on a global variable so we can access it later
//   let object;

//   //OrbitControls allow the camera to move around the scene
//   let controls;

//   //Instantiate a loader for the .gltf file
//   // const loader = new GLTFLoader();
//   const loader = new OBJLoader();
//   const containerId = `container_${asset.type}${Math.floor(index / 2)}`;

//   //Load the file
//   loader.load(
//     asset.path,
//     function ( obj ) {
//       object = obj
//       scene.add( obj );

//     },
//     function (xhr) {
//       //While it is loading, log the progress
//       console.log(`${asset.path} ${(xhr.loaded / xhr.total * 100)}% loaded`);
//     },
//     function (error) {
//       //If there is an error, log it
//       console.error(`Error loading ${asset.path}:`, error);
//     }
//   );

//   //Instantiate a new renderer and set its size
//   const renderer = new THREE.WebGLRenderer({ alpha: true }); //Alpha: true allows for the transparent background
//   // renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.setSize(window.innerWidth, window.innerWidth * 0.75);

  // console.log(`Filling container ${containerId}`);
  // //Add the renderer to the DOM
  // document.getElementById(containerId).appendChild(renderer.domElement);

  // //Set how far the camera will be from the 3D model
  // // camera.position.z = objToRender === "dino" ? 25 : 500;
  // camera.position.z = 0.25;

  // //Add lights to the scene, so we can actually see the 3D model
  // const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
  // topLight.position.set(500, 500, 500) //top-left-ish
  // topLight.castShadow = false;
  // scene.add(topLight);

  // const frontLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
  // frontLight.position.set(-500, -500, -500) //top-left-ish
  // frontLight.castShadow = false;
  // scene.add(frontLight);

  // // const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "dino" ? 5 : 1);
  // const ambientLight = new THREE.AmbientLight(0x333333, 1);
  // scene.add(ambientLight);

//   //This adds controls to the camera, so we can rotate / zoom it with the mouse
//   if (objToRender === "dino") {
//     controls = new OrbitControls(camera, renderer.domElement);
//   }

//   //Render the scene
//   function animate() {
//     requestAnimationFrame(animate);
//     //Here we could add some code to update the scene, adding some automatic movement

//     //Make the eye move
//     if (object && objToRender === "eye") {
//       //I've played with the constants here until it looked good 
//       object.rotation.y = -3 + mouseX / window.innerWidth * 3;
//       object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
//     }
//     renderer.render(scene, camera);

//   }

//   //Add a listener to the window, so we can resize the window and the camera
//   window.addEventListener("resize", function () {
//     // camera.aspect = window.innerWidth / window.innerHeight;
//     camera.aspect = 1 / 0.75;
//     camera.updateProjectionMatrix();
//     // renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setSize(window.innerWidth, window.innerWidth * 0.75);
//   });

//   //add mouse position listener, so we can make the eye move
//   document.onmousemove = (e) => {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
//   }

//   //Start the 3D rendering
//   animate();
// });

import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
import { OBJLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/OBJLoader.js";

// Set which object to render
let objToRender = 'dino';

let list = [
  "1d6d1_toy_animals_015", "2d6b3_toy_animals_009", "34fb4_toy_animals_019",
  "2a535_toy_truck_002_vehicles", "35ebd_toy_car_022_vehicles", "6bb21_toy_bus_041_vehicles", 
  "apple_19", "apple_44", "apple_42",
  "banana_84", "banana_98", "banana_133"
];  // Add more folder names as needed

const list_assets = list.flatMap(folder => [
  { type: "annotation", path: `static/meshes/${folder}/annotation.obj` },
  // { type: "color", path: `static/meshes/${folder}/color_mesh.obj` }
]);

// Function to load a 3D model
function load3DModel(asset, index) {
  // Create a Three.JS Scene
  const scene = new THREE.Scene();
  // Create a new camera with positions and angles
  const camera = new THREE.PerspectiveCamera(75, 1 / 0.75, 0.1, 1000);

  // Keep track of the mouse position, so we can make the eye move
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  // Keep the 3D object on a global variable so we can access it later
  let object;

  // OrbitControls allow the camera to move around the scene
  const controls = new OrbitControls(camera, document.getElementById(`container_annotation${index}`));

  // Instantiate a loader for the .obj file
  const loader = new OBJLoader();

  // Load the file
  loader.load(
    asset.path,
    function (obj) {
      object = obj;
      scene.add(obj);
    },
    function (xhr) {
      // While it is loading, log the progress
      console.log(`${asset.path} ${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    function (error) {
      // If there is an error, log it
      console.error(`Error loading ${asset.path}:`, error);
    }
  );

  // Instantiate a new renderer and set its size
  const renderer = new THREE.WebGLRenderer({ alpha: true }); // Alpha: true allows for the transparent background
  renderer.setSize(window.innerWidth, window.innerWidth * 0.75);

  console.log(`Filling container container_annotation${index}`);
  //Add the renderer to the DOM
  document.getElementById(`container_annotation${index}`).appendChild(renderer.domElement);

  //Set how far the camera will be from the 3D model
  // camera.position.z = objToRender === "dino" ? 25 : 500;
  camera.position.z = 0.25;

  //Add lights to the scene, so we can actually see the 3D model
  const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
  topLight.position.set(500, 500, 500) //top-left-ish
  topLight.castShadow = false;
  scene.add(topLight);

  const frontLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
  frontLight.position.set(-500, -500, -500) //top-left-ish
  frontLight.castShadow = false;
  scene.add(frontLight);

  // const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "dino" ? 5 : 1);
  const ambientLight = new THREE.AmbientLight(0x333333, 1);
  scene.add(ambientLight);
  
  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}

// Function to load assets based on category
function loadCategory(category) {
  // Clear existing content
  for (let i = 0; i < 3; i++) {
    document.getElementById(`container_annotation${i}`).innerHTML = '';
  }

  // Set the category image
  document.getElementById('category-image').src = `./static/figures/${category}.png`;

  // Load all listed 3D models that include the category string
  const categoryAssets = list_assets.filter(asset => asset.path.includes(category));
  categoryAssets.forEach((asset, index) => {
    if (asset.type === 'annotation') {
      load3DModel(asset, index);
    }
  });
}

// Event listeners for the buttons
document.getElementById('load-animals').addEventListener('click', () => loadCategory('animal'));
document.getElementById('load-cars').addEventListener('click', () => loadCategory('vehicle'));
document.getElementById('load-apples').addEventListener('click', () => loadCategory('apple'));
document.getElementById('load-bananas').addEventListener('click', () => loadCategory('banana'));