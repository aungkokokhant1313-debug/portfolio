import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas({ palette = 'cyber-violet' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 18;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight.position.set(10, 15, 10);
    scene.add(dirLight);

    const pointLightPurple = new THREE.PointLight(0xa855f7, 3.5, 40);
    pointLightPurple.position.set(-10, 6, 8);
    scene.add(pointLightPurple);

    const pointLightCyan = new THREE.PointLight(0x06b6d4, 3.5, 40);
    pointLightCyan.position.set(10, -6, 6);
    scene.add(pointLightCyan);

    const pointLightPink = new THREE.PointLight(0xec4899, 2.5, 30);
    pointLightPink.position.set(0, 10, -5);
    scene.add(pointLightPink);

    // 4. Color Palette Palettes for Geometric Shapes
    const paletteMaterials = {
      purple: new THREE.MeshStandardMaterial({ color: 0x9333ea, roughness: 0.25, metalness: 0.1 }),
      cyan: new THREE.MeshStandardMaterial({ color: 0x06b6d4, roughness: 0.2, metalness: 0.15 }),
      blue: new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.25, metalness: 0.2 }),
      magenta: new THREE.MeshStandardMaterial({ color: 0xec4899, roughness: 0.25, metalness: 0.1 }),
      lime: new THREE.MeshStandardMaterial({ color: 0x84cc16, roughness: 0.3, metalness: 0.1 }),
      orange: new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.25, metalness: 0.1 }),
      white: new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3, metalness: 0.1 }),
    };

    // Multi-colored cube face materials
    const multiColoredCubeMats = [
      paletteMaterials.magenta, // +x
      paletteMaterials.cyan,    // -x
      paletteMaterials.lime,    // +y
      paletteMaterials.purple,  // -y
      paletteMaterials.blue,    // +z
      paletteMaterials.orange,  // -z
    ];

    const floatingObjects = [];

    // Helper to spawn 3D shapes
    const addShape = (mesh, config) => {
      mesh.position.set(config.x, config.y, config.z);
      mesh.rotation.set(config.rotX || 0, config.rotY || 0, config.rotZ || 0);
      scene.add(mesh);
      floatingObjects.push({
        mesh,
        initialY: config.y,
        initialX: config.x,
        speedX: config.speedX || 0.005,
        speedY: config.speedY || 0.008,
        speedZ: config.speedZ || 0.004,
        floatFreq: config.floatFreq || 1.2,
        floatAmp: config.floatAmp || 0.4,
        floatOffset: Math.random() * 10,
      });
    };

    // 5. Create Floating Geometry Objects
    // A. Multi-colored cubes
    const cubeGeo1 = new THREE.BoxGeometry(1.6, 1.6, 1.6);
    const cube1 = new THREE.Mesh(cubeGeo1, multiColoredCubeMats);
    addShape(cube1, { x: -7.5, y: 3.2, z: 2, floatAmp: 0.5, floatFreq: 1.1 });

    const cubeGeo2 = new THREE.BoxGeometry(1.1, 1.1, 1.1);
    const cube2 = new THREE.Mesh(cubeGeo2, multiColoredCubeMats);
    addShape(cube2, { x: 7.8, y: -2.5, z: 1.5, floatAmp: 0.6, floatFreq: 1.4 });

    const cubeGeo3 = new THREE.BoxGeometry(0.85, 0.85, 0.85);
    const cube3 = new THREE.Mesh(cubeGeo3, multiColoredCubeMats);
    addShape(cube3, { x: 6.5, y: 4.8, z: -1, floatAmp: 0.35, floatFreq: 0.9 });

    // B. Floating Torus Rings
    const torusGeo1 = new THREE.TorusGeometry(1.4, 0.42, 24, 48);
    const torus1 = new THREE.Mesh(torusGeo1, paletteMaterials.cyan);
    addShape(torus1, { x: 6.2, y: 1.8, z: 0.5, speedX: 0.008, speedY: 0.012, floatAmp: 0.45 });

    const torusGeo2 = new THREE.TorusGeometry(1.0, 0.32, 24, 48);
    const torus2 = new THREE.Mesh(torusGeo2, paletteMaterials.magenta);
    addShape(torus2, { x: -6.8, y: -3.8, z: 1.8, speedX: -0.01, speedY: 0.007, floatAmp: 0.4 });

    // C. Rounded Capsules / Cylinders
    const capsuleGeo1 = new THREE.CapsuleGeometry(0.55, 1.4, 16, 24);
    const capsule1 = new THREE.Mesh(capsuleGeo1, paletteMaterials.lime);
    addShape(capsule1, { x: -3.8, y: -5.2, z: 0.8, rotZ: 0.6, speedX: 0.007, speedZ: 0.009 });

    const capsuleGeo2 = new THREE.CapsuleGeometry(0.45, 1.2, 16, 24);
    const capsule2 = new THREE.Mesh(capsuleGeo2, paletteMaterials.purple);
    addShape(capsule2, { x: 4.2, y: -4.8, z: -2, rotX: 0.8, speedY: 0.006 });

    // D. Abstract Geometries (Icosahedron & Spheres)
    const icoGeo = new THREE.IcosahedronGeometry(0.85, 0);
    const ico = new THREE.Mesh(icoGeo, paletteMaterials.orange);
    addShape(ico, { x: -8.2, y: -0.5, z: -1.5, speedX: 0.015, speedY: 0.015 });

    const sphereGeo = new THREE.SphereGeometry(0.65, 32, 32);
    const sphere = new THREE.Mesh(sphereGeo, paletteMaterials.white);
    addShape(sphere, { x: 8.5, y: 1.0, z: -3, speedY: 0.005 });

    // 6. Stars & Particle Field
    const starCount = 350;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const starColorChoices = [
      new THREE.Color(0xc084fc), // soft violet
      new THREE.Color(0x38bdf8), // cyan blue
      new THREE.Color(0xf472b6), // pink
      new THREE.Color(0xffffff), // white
      new THREE.Color(0xa3e635), // lime
    ];

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      starPositions[i3] = (Math.random() - 0.5) * 45;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 35;
      starPositions[i3 + 2] = (Math.random() - 0.5) * 30 - 5;

      const col = starColorChoices[Math.floor(Math.random() * starColorChoices.length)];
      starColors[i3] = col.r;
      starColors[i3 + 1] = col.g;
      starColors[i3 + 2] = col.b;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // 7. Mouse Interaction Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 0;

    const handleMouseMove = (e) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseX = normX * 1.8;
      mouseY = normY * 1.2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 8. Resize Handler
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // 9. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera interpolation toward mouse
      targetCameraX += (mouseX - targetCameraX) * 0.04;
      targetCameraY += (mouseY - targetCameraY) * 0.04;
      camera.position.x = targetCameraX;
      camera.position.y = targetCameraY;
      camera.lookAt(0, 0, 0);

      // Animate floating objects
      floatingObjects.forEach((item) => {
        item.mesh.rotation.x += item.speedX;
        item.mesh.rotation.y += item.speedY;
        item.mesh.rotation.z += item.speedZ;

        // Gentle floating sinus
        item.mesh.position.y =
          item.initialY +
          Math.sin(elapsedTime * item.floatFreq + item.floatOffset) * item.floatAmp;
        item.mesh.position.x =
          item.initialX +
          Math.cos(elapsedTime * (item.floatFreq * 0.8) + item.floatOffset) * 0.15;
      });

      // Subtle starfield rotation
      stars.rotation.y = elapsedTime * 0.015;
      stars.rotation.x = Math.sin(elapsedTime * 0.01) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // 10. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose resources
      scene.clear();
      renderer.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
    };
  }, [palette]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    />
  );
}
