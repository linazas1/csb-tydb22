import * as THREE from "three";
//import OrbitControls from "three-orbitcontrols";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

var score = 0;
var lygis = 1;
let container;
let scene;
let camera;
let renderer;
let controls;
let paleistas = 0;
let paleistas1 = 0;
let paleistas2 = 0;
let paleistas3 = 0;
let paleistas4 = 0;
let paleistas5 = 0;
let paleistas6 = 0;
let paleistas7 = 0;
let paleistas0 = 0;

let listener = new THREE.AudioListener();

let sound = new THREE.PositionalAudio(listener);
let sound2 = new THREE.PositionalAudio(listener);
let sound3 = new THREE.PositionalAudio(listener);
let sound4 = new THREE.PositionalAudio(listener);
let sound5 = new THREE.PositionalAudio(listener);
let sound6 = new THREE.PositionalAudio(listener);
let sound7 = new THREE.PositionalAudio(listener);
let sound8 = new THREE.PositionalAudio(listener);
let sound9 = new THREE.PositionalAudio(listener);
let sound10 = new THREE.PositionalAudio(listener);

function init() {
  container = document.querySelector("#container");
  scene = new THREE.Scene();
  scene.background = new THREE.Color("skyblue");

  createLights();
  createCamera();
  // garsas();
  createRenderer();
  createControls();

  renderer.setAnimationLoop(() => {
    update();
    render();
  });
}

init();

function createRenderer() {
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.gammaFactor = 2.2;
  renderer.gammaOutput = true;
  renderer.physicallyCorrectLights = true;
  container.appendChild(renderer.domElement);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
}

function createCamera() {
  camera = new THREE.PerspectiveCamera(
    35,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.set(100, 280, 150);
}

var birds = new THREE.Group();
var birds2 = new THREE.Group();
var birds3 = new THREE.Group();
var birds4 = new THREE.Group();
var birds5 = new THREE.Group();
var birds6 = new THREE.Group();
var birds7 = new THREE.Group();
var birds8 = new THREE.Group();
var birds9 = new THREE.Group();
var birds10 = new THREE.Group();

const loader = new GLTFLoader();
const pauksciai = [];
const pauksciai2 = [];
const pauksciai3 = [];
const pauksciai4 = [];
const pauksciai5 = [];
const pauksciai6 = [];
const pauksciai7 = [];
const pauksciai8 = [];
const pauksciai9 = [];
const pauksciai10 = [];
var balsas = [
  "didžioji Zylė.mp3",
  "Baltasis gandras.mp3",
  "crow.mp3",
  "baltoji kiele.mp3",
  "didysis margasis genys.mp3",
  "zvirblis.mp3",
  "keršulis.mp3",
  "kukutis.mp3",
  "kurtinys.mp3",
  "Juodasis strazdas.mp3"
];

loader.load(
  "Pasaulis.glb",
  function (gltf) {
    scene.add(gltf.scene);
    gltf.scene.castShadow = true;
    gltf.scene.receiveShadow = true;
    //gltf.scene.position.y = 3;
    gltf.scene.position.x = 1;
    gltf.scene.scale.set(1, 1, 1);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "zyle2.glb",
  function (gltf3) {
    gltf3.scene.scale.set(0.5, 0.5, 0.5);
    birds.add(gltf3.scene);

    pauksciai.push(birds);
    birds.position.z = 15;
    birds.position.x = 18;
    birds.position.y = 4;
    scene.add(birds);

    daina();
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "gandras.glb",
  function (gltf4) {
    birds2.add(gltf4.scene);
    birds2.position.z = -10;
    birds2.position.x = -80;
    birds2.position.y = -10;
    birds2.scale.set(0.5, 0.5, 0.5);
    pauksciai2.push(birds2);
    scene.add(birds2);

    birds2.visible = false;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "kranklys.glb",
  function (gltf5) {
    gltf5.scene.position.z = -50;
    gltf5.scene.position.x = -45;
    gltf5.scene.position.y = -1.8;
    gltf5.scene.scale.set(1, 1, 1);
    birds3.add(gltf5.scene);
    pauksciai3.push(birds3);
    scene.add(birds3);
    birds3.visible = false;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
loader.load(
  "baltoji_kiele.glb",
  function (gltf6) {
    gltf6.scene.position.z = 13.25;
    gltf6.scene.position.x = 15.5;
    gltf6.scene.position.y = -10;
    gltf6.scene.scale.set(0.6, 0.6, 0.6);
    birds4.add(gltf6.scene);
    pauksciai4.push(birds4);
    scene.add(birds4);
    birds4.visible = false;
    birds4.rotation.y = Math.PI / 1.5;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
loader.load(
  "genys.glb",
  function (gltf7) {
    gltf7.scene.position.z = -50;
    gltf7.scene.position.x = 26;
    gltf7.scene.position.y = 11.4;
    gltf7.scene.scale.set(0.3, 0.3, 0.3);
    birds5.add(gltf7.scene);
    pauksciai5.push(birds5);
    scene.add(birds5);
    birds5.visible = false;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "karklazvirblis.glb",
  function (gltf8) {
    gltf8.scene.position.z = 33.25;
    gltf8.scene.position.x = -24;
    gltf8.scene.position.y = -2;
    gltf8.scene.scale.set(0.5, 0.5, 0.5);
    birds6.add(gltf8.scene);
    pauksciai6.push(birds6);
    scene.add(birds6);
    birds6.visible = false;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
loader.load(
  "kersulis.glb",
  function (gltf9) {
    gltf9.scene.position.z = 53;
    gltf9.scene.position.x = -15;
    gltf9.scene.position.y = 25.4;
    gltf9.scene.scale.set(0.9, 0.9, 0.9);
    birds7.add(gltf9.scene);
    pauksciai7.push(birds7);
    scene.add(birds7);
    birds7.visible = false;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "kukurisblend.glb",
  function (gltf10) {
    gltf10.scene.position.z = 7;
    gltf10.scene.position.x = -65;
    gltf10.scene.position.y = -10.7;
    gltf10.scene.scale.set(0.7, 0.7, 0.7);
    birds8.add(gltf10.scene);
    birds8.rotation.y = Math.PI;
    pauksciai8.push(birds8);
    scene.add(birds8);
    birds8.visible = false;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "kurtinys.glb",
  function (gltf11) {
    gltf11.scene.position.z = 25;
    gltf11.scene.position.x = 30;
    gltf11.scene.position.y = 0;
    gltf11.scene.scale.set(1.3, 1.3, 1.3);
    birds9.add(gltf11.scene);
    birds9.rotation.y = Math.PI * 1.8;
    pauksciai9.push(birds9);
    scene.add(birds9);
    birds9.visible = false;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "strazdas.glb",
  function (gltf12) {
    gltf12.scene.position.z = -50;
    gltf12.scene.position.x = -10;
    gltf12.scene.position.y = 51.4;
    gltf12.scene.scale.set(1, 1, 1);
    birds10.add(gltf12.scene);
    pauksciai10.push(birds10);
    birds10.rotation.y = Math.PI / 0.55;
    scene.add(birds10);
    birds10.visible = false;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
/*
loader.load(
  "bird_test1.glb",
  function (gltf2) {
    gltf2.scene.position.z = 3;
    gltf2.scene.position.x = 3.5;
    gltf2.scene.position.y = 7.5;

    gltf2.scene.scale.set(0.5, 0.5, 0.5);
    birds.add(gltf2.scene);
    pauksciai.push(birds);
    scene.add(birds);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
*/
function createLights() {
  const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
  directionalLight.position.set(5, 5, 10);
  directionalLight.castShadow = true;

  // const directionalLightHelper = new THREE.DirectionalLightHelper(
  //   directionalLight,
  //   5
  // );

  const hemisphereLight = new THREE.HemisphereLight(0xddeeff, 0x202020, 3);
  //const hemisphereLightHelper = new THREE.HemisphereLightHelper(
  //  hemisphereLight,
  //  5
  // );

  // const gridHelper = new THREE.GridHelper(200, 20);
  //scene.add(gridHelper);
  scene.add(
    directionalLight,
    //directionalLightHelper,
    hemisphereLight
    // hemisphereLightHelper
  );
}

function createControls() {
  controls = new OrbitControls(camera, renderer.domElement);
}

function loadFile(url) {
  const loader = new THREE.FileLoader();

  return new Promise((resolve) => {
    loader.load(url, (result) => {
      resolve(result);
    });
  });
}

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function onClick(event) {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

// laikmatis
const clock = new THREE.Clock();

let elapsedSeconds = 0;

const timerElement = document.getElementById("timer");
function update() {
  const deltaTime = clock.getDelta();
  elapsedSeconds += deltaTime;

  timerElement.innerHTML = elapsedSeconds.toFixed(2);
}

function render() {
  raycaster.setFromCamera(pointer, camera);
  const intersects = raycaster.intersectObjects(pauksciai, true);
  //sukurti kita array pauksciai2
  const intersects2 = raycaster.intersectObjects(pauksciai2, true);
  const intersects3 = raycaster.intersectObjects(pauksciai3, true);
  const intersects4 = raycaster.intersectObjects(pauksciai4, true);
  const intersects5 = raycaster.intersectObjects(pauksciai5, true);
  const intersects6 = raycaster.intersectObjects(pauksciai6, true);
  const intersects7 = raycaster.intersectObjects(pauksciai7, true);
  const intersects8 = raycaster.intersectObjects(pauksciai8, true);
  const intersects9 = raycaster.intersectObjects(pauksciai9, true);
  const intersects10 = raycaster.intersectObjects(pauksciai10, true);

  //for (let i = 0; i < intersects.length; i++)
  if (elapsedSeconds > 2) {
    if (intersects.length > 0) {
      intersects[0].object.visible = false;

      // intersects[0].object.parent.remove(intersects[0].object);
      score = 1;
      lygis = 2;
      birds2.visible = true;
      if (sound.isPlaying === true) {
        sound.stop;
      }
      daina1();
    }
  }
  if (intersects2.length > 0) {
    intersects2[0].object.visible = false;
    score = 2;
    lygis = 3;
    birds3.visible = true;
    if (sound2.isPlaying === true) {
      sound2.stop;
    }
    daina2();
  }

  if (intersects3.length > 0) {
    intersects3[0].object.visible = false;
    score = 3;
    lygis = 4;
    birds4.visible = true;
    if (sound3.isPlaying === true) {
      sound3.stop;
    }
    daina3();
  }
  if (intersects4.length > 0) {
    intersects4[0].object.visible = false;
    score = 4;
    lygis = 5;
    birds5.visible = true;
    daina4();
  }
  if (intersects5.length > 0) {
    intersects5[0].object.visible = false;
    score = 5;
    lygis = 6;
    birds6.visible = true;
    daina5();

    // sound.stop();
  }
  if (intersects6.length > 0) {
    intersects6[0].object.visible = false;
    score = 6;
    lygis = 7;
    birds7.visible = true;
    daina6();
  }
  if (intersects7.length > 0) {
    intersects7[0].object.visible = false;
    score = 7;
    lygis = 8;
    birds8.visible = true;
    daina7();
  }
  if (intersects8.length > 0) {
    intersects8[0].object.visible = false;
    score = 8;
    lygis = 9;
    birds9.visible = true;
    daina8();
  }
  if (intersects9.length > 0) {
    intersects9[0].object.visible = false;
    score = 9;
    lygis = 10;
    birds10.visible = true;
    daina9();
  }
  if (intersects10.length > 0) {
    intersects10[0].object.visible = false;
    score = 10;
    lygis = 11;
    if (sound10.isPlaying === true) {
      sound10.stop();
    }
    // žaidimo sustabdymas
    clock.stop();
    const darkOverlay = document.getElementById("darkOverlay");
    darkOverlay.style.display = "block";
    renderer.setAnimationLoop(null);

    // pabaigos langas
    const playAgainButton = document.getElementById("playAgainButton");
    const goBackButton = document.getElementById("goBackButton");
    playAgainButton.style.display = "inline-block";
    goBackButton.style.display = "inline-block";
    timerElement.classList.add("pulsing");
    const playButton2 = document.getElementById("playAgainButton");
    playButton2.addEventListener("click", reloadGame);
  }

  document.getElementById("info").innerHTML = score;
  renderer.render(scene, camera);
}

camera.add(listener);

let audioLoader = new THREE.AudioLoader();

function daina() {
  birds.add(sound);
  audioLoader.load(balsas[0], function (buffer) {
    sound.setBuffer(buffer);
    sound.setVolume(1);
    sound.setRefDistance(1);
    sound.setLoop(true);
    sound.play();
    update();
  });
  //listener.add(birds);
}

function daina1() {
  if (sound.isPlaying === true && paleistas0 === 0) {
    sound.stop();
    birds.remove(sound);
    birds2.add(sound2);
    // listener.remove(birds);

    //listener.add(birds2);
    audioLoader.load(balsas[1], function (buffer) {
      sound2.setBuffer(buffer);
      sound2.setRefDistance(1);
      sound2.setVolume(0.5);
      sound2.setLoop(true);
      sound2.play();
      paleistas0 = 1;
      update();
    });
  }
}

function daina2() {
  if (sound2.isPlaying === true && paleistas === 0) {
    sound2.stop();

    birds2.remove(sound);
    birds3.add(sound3);
    audioLoader.load(balsas[2], function (buffer) {
      sound3.setBuffer(buffer);
      sound3.setRefDistance(1);
      sound3.setVolume(0.1);
      sound3.setLoop(true);
      sound3.play();
      paleistas = 1;
      update();
    });
  }
}

function daina3() {
  if (sound3.isPlaying === true && paleistas1 === 0) {
    sound3.stop();
    birds3.remove(sound);
    birds4.add(sound4);
    //birds2.remove(sound);
    birds4.add(sound4);
    audioLoader.load(balsas[3], function (buffer) {
      sound4.setBuffer(buffer);
      sound4.setRefDistance(1);
      sound4.setVolume(0.5);
      sound4.setLoop(true);
      sound4.play();
      paleistas1 = 1;
      update();
    });
  }
}

function daina4() {
  if (sound4.isPlaying === true && paleistas2 === 0) {
    sound4.stop();

    birds4.remove(sound4);
    birds5.add(sound5);
    audioLoader.load(balsas[4], function (buffer) {
      sound5.setBuffer(buffer);
      sound5.setRefDistance(1);
      sound5.setVolume(0.5);
      sound5.setLoop(true);
      sound5.play();
      paleistas2 = 1;
      update();
    });
  }
}
function daina5() {
  if (sound5.isPlaying === true && paleistas3 === 0) {
    sound5.stop();
    birds5.remove(sound5);
    birds6.add(sound6);
    audioLoader.load(balsas[5], function (buffer) {
      sound6.setBuffer(buffer);
      sound6.setRefDistance(1);
      sound6.setVolume(0.5);
      sound6.setLoop(true);
      sound6.play();
      paleistas3 = 1;
      update();
    });
  }
}
function daina6() {
  if (sound6.isPlaying === true && paleistas4 == 0) {
    sound6.stop();
    birds6.remove(sound6);
    birds7.add(sound7);
    audioLoader.load(balsas[6], function (buffer) {
      sound7.setBuffer(buffer);
      sound7.setRefDistance(1);
      sound7.setVolume(0.5);
      sound7.setLoop(true);
      sound7.play();
      paleistas4 = 1;
      update();
    });
  }
}

function daina7() {
  if (sound7.isPlaying === true && paleistas5 === 0) {
    sound7.stop();
    birds7.remove(sound7);
    birds8.add(sound8);
    audioLoader.load(balsas[7], function (buffer) {
      sound8.setBuffer(buffer);
      sound8.setRefDistance(1);
      sound8.setVolume(0.5);
      sound8.setLoop(true);
      sound8.play();
      paleistas5 = 1;
      update();
    });
  }
}

function daina8() {
  if (sound8.isPlaying === true && paleistas6 === 0) {
    sound8.stop();
    birds8.remove(sound8);
    birds9.add(sound9);
    audioLoader.load(balsas[8], function (buffer) {
      sound9.setBuffer(buffer);
      sound9.setRefDistance(1);
      sound9.setVolume(0.5);
      sound9.setLoop(true);
      sound9.play();
      paleistas6 = 1;
      update();
    });
  }
}

function daina9() {
  if (sound9.isPlaying === true && paleistas7 === 0) {
    sound9.stop();
    birds9.remove(sound9);
    birds10.add(sound10);
    audioLoader.load(balsas[9], function (buffer) {
      sound10.setBuffer(buffer);
      sound10.setRefDistance(1);
      sound10.setVolume(0.5);
      sound10.setLoop(true);
      sound10.play();
      paleistas7 = 1;
      update();
    });
  }
}

function setVolumeForAllAudioObjects(volume) {
  scene.traverse(function (object) {
    if (object instanceof THREE.Audio) {
      object.setVolume(volume);
    }
  });
}

// Get the sound button element
const soundButton = document.getElementById("sound-button");

// Set initial audio state
let isAudioEnabled = true;

// Function to toggle audio
function toggleAudio() {
  if (isAudioEnabled === true) {
    isAudioEnabled = false;
    setVolumeForAllAudioObjects(0);
    console.log("Audio disabled");
    soundButton.classList.remove("audio-enabled");
    soundButton.classList.add("audio-disabled");
  } else {
    isAudioEnabled = true;
    setVolumeForAllAudioObjects(1);
    console.log("Audio enabled");
    soundButton.classList.remove("audio-disabled");
    soundButton.classList.add("audio-enabled");
  }
}

// Get the play button element
const playButton = document.getElementById("play-button");

// Function to reload the game
function reloadGame() {
  location.reload(); // Reload the current page
}

document.getElementById("goBackButton").addEventListener("click", function () {
  window.location.href = "https://37vpn5.csb.app/";
});
// Add event listener to play button
playButton.addEventListener("click", reloadGame);

// Add event listener to sound button
soundButton.addEventListener("click", toggleAudio);

window.addEventListener("click", onClick, false);

// Timeris

window.requestAnimationFrame(render);

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;

  // Update camera frustum
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}
window.addEventListener("resize", onWindowResize, false);
