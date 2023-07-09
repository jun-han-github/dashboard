import { useEffect, useRef } from 'react';
import {
	Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, LineBasicMaterial, Mesh, Vector3, BufferGeometry, Line
} from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const gltfLoader = new GLTFLoader();
const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 10);
camera.lookAt(0, 0, 0);
const renderer = new WebGLRenderer();

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

const ThreeDimensionPage = () => {

	const containerRef = useRef<HTMLDivElement>(null);
	let loadedModel: GLTF;

	// Cube
	// const geometry = new BoxGeometry(1, 1, 1);
	// const material = new MeshBasicMaterial({ color: 0x00ff00 });
	// const cube = new Mesh(geometry, material);
	// scene.add(cube);

	// arrow
	// const arrow = new LineBasicMaterial({ color: 0x0000ff });
	// const points = [];
	// points.push(new Vector3(-10,  0, 0));
	// points.push(new Vector3(  0, 10, 0));
	// points.push(new Vector3( 10,  0, 0));

	// const arrowGeometry = new BufferGeometry().setFromPoints(points);
	// const line = new Line(arrowGeometry, arrow);

	useEffect(() => {
		renderer.setSize(window.innerWidth, window.innerHeight);
		if (containerRef.current) {
			containerRef.current.appendChild(renderer.domElement);
		}
		console.log('renderer: ', renderer.domElement);
	}, []);

	// Object
	gltfLoader.load('src/assets/3dmodel/desktop_pc/scene.gltf', (gltfScene: GLTF) => {
		loadedModel = gltfScene;

		scene.add(gltfScene.scene);
	}, (error) => {
		console.error('Error: ', error);
	});

	function animate() {
		requestAnimationFrame( animate );
		// scene.add(line);
		// cube.rotation.x += 0.01;
		// cube.rotation.y += 0.01;

		// if (loadedModel) {
		// 	loadedModel.scene.rotation.y += 0.01;
		// }
		renderer.render(scene, camera);
	}

	animate();

	return (
		<div>
			ThreeDimensionPage
			<div ref={containerRef} />
		</div>
	)
}
export default ThreeDimensionPage
