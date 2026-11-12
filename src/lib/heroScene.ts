// Hero 3D scene: a procedurally modelled katana floating among falling sakura petals.
// Loaded lazily from HeroScene.astro so three.js never blocks first paint.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const BLADE_LENGTH = 3;

function buildBlade(): THREE.Mesh {
  const L = BLADE_LENGTH;
  const width = 0.12;
  const sori = 0.14; // curvature of the blade
  const centre = (x: number) => sori * (x / L) ** 2;
  const half = (x: number) => (width / 2) * (1 - 0.3 * (x / L));

  const shape = new THREE.Shape();
  const N = 48;
  const edgeEnd = L * 0.9;
  shape.moveTo(0, centre(0) - half(0));
  // Cutting edge (ha), on the convex side
  for (let i = 1; i <= N; i++) {
    const x = (edgeEnd * i) / N;
    shape.lineTo(x, centre(x) - half(x));
  }
  // Tip (kissaki)
  shape.quadraticCurveTo(L * 0.99, centre(L) - half(L) * 0.5, L, centre(L) + half(L) * 0.55);
  // Back of the blade (mune)
  for (let i = N; i >= 0; i--) {
    const x = (L * 0.97 * i) / N;
    shape.lineTo(x, centre(x) + half(x));
  }

  const depth = 0.016;
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelThickness: 0.012,
    bevelSize: 0.012,
    bevelSegments: 3,
    curveSegments: 12,
  });
  geometry.translate(0, 0, -depth / 2);
  geometry.computeVertexNormals();

  return new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({ color: 0xe4e8eb, metalness: 1, roughness: 0.16 }),
  );
}

function wrapTexture(): THREE.CanvasTexture {
  // Diamond pattern of the handle wrap (tsuka-ito over ray skin)
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#16130f';
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = '#efe6d2';
  ctx.beginPath();
  ctx.moveTo(size / 2, size * 0.2);
  ctx.lineTo(size * 0.72, size / 2);
  ctx.lineTo(size / 2, size * 0.8);
  ctx.lineTo(size * 0.28, size / 2);
  ctx.closePath();
  ctx.fill();
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(3, 9);
  texture.anisotropy = 4;
  return texture;
}

function buildKatana(): { root: THREE.Group; spin: THREE.Group } {
  const spin = new THREE.Group();

  spin.add(buildBlade());

  const gold = new THREE.MeshStandardMaterial({ color: 0xc9a24a, metalness: 1, roughness: 0.35 });
  const iron = new THREE.MeshStandardMaterial({ color: 0x2b2723, metalness: 0.85, roughness: 0.45 });

  // Collar (habaki)
  const habaki = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.15, 0.06), gold);
  habaki.position.x = -0.07;
  spin.add(habaki);

  // Guard (tsuba): disc with a vermillion rim
  const tsuba = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.04, 48), iron);
  tsuba.rotation.z = Math.PI / 2;
  tsuba.position.x = -0.16;
  spin.add(tsuba);
  const rim = new THREE.Mesh(
    new THREE.TorusGeometry(0.26, 0.018, 12, 48),
    new THREE.MeshStandardMaterial({ color: 0xb5321f, metalness: 0.4, roughness: 0.5 }),
  );
  rim.rotation.y = Math.PI / 2;
  rim.position.x = -0.16;
  spin.add(rim);

  // Handle (tsuka)
  const handleLength = 1.1;
  const handle = new THREE.Mesh(
    new THREE.CylinderGeometry(0.068, 0.072, handleLength, 32),
    new THREE.MeshStandardMaterial({ map: wrapTexture(), roughness: 0.85 }),
  );
  handle.rotation.z = Math.PI / 2;
  handle.scale.z = 0.8;
  handle.position.x = -0.18 - handleLength / 2;
  spin.add(handle);

  // Pommel (kashira)
  const kashira = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.07, 0.07, 32), iron);
  kashira.rotation.z = Math.PI / 2;
  kashira.position.x = -0.18 - handleLength - 0.035;
  spin.add(kashira);

  // Centre the sword on its middle so it rotates around its balance point
  const min = -0.18 - handleLength - 0.07;
  spin.position.x = -(min + BLADE_LENGTH) / 2;

  const root = new THREE.Group();
  root.add(spin);
  root.rotation.z = 1.05; // diagonal, tip up
  return { root, spin };
}

function buildPetals(count: number) {
  const shape = new THREE.Shape();
  shape.moveTo(0, -0.08);
  shape.bezierCurveTo(0.08, -0.04, 0.075, 0.07, 0.025, 0.09);
  shape.lineTo(0, 0.07);
  shape.lineTo(-0.025, 0.09);
  shape.bezierCurveTo(-0.075, 0.07, -0.08, -0.04, 0, -0.08);

  const mesh = new THREE.InstancedMesh(
    new THREE.ShapeGeometry(shape),
    new THREE.MeshStandardMaterial({
      color: 0xeea3b5,
      roughness: 0.6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.92,
    }),
    count,
  );

  const rand = (a: number, b: number) => a + Math.random() * (b - a);
  const petals = Array.from({ length: count }, () => ({
    pos: new THREE.Vector3(rand(-2.6, 2.6), rand(-3.2, 3.2), rand(-1.5, 1.5)),
    rot: new THREE.Euler(rand(0, Math.PI), rand(0, Math.PI), rand(0, Math.PI)),
    spin: new THREE.Vector3(rand(-1.2, 1.2), rand(-1.2, 1.2), rand(-0.8, 0.8)),
    fall: rand(0.22, 0.45),
    sway: rand(0.6, 1.4),
    phase: rand(0, Math.PI * 2),
    scale: rand(0.7, 1.25),
  }));

  const dummy = new THREE.Object3D();
  const update = (t: number, dt: number) => {
    petals.forEach((p, i) => {
      p.pos.y -= p.fall * dt;
      p.pos.x += Math.sin(t * p.sway + p.phase) * 0.25 * dt;
      p.rot.x += p.spin.x * dt;
      p.rot.y += p.spin.y * dt;
      p.rot.z += p.spin.z * dt;
      if (p.pos.y < -3.4) {
        p.pos.y = 3.4;
        p.pos.x = rand(-2.6, 2.6);
      }
      dummy.position.copy(p.pos);
      dummy.rotation.copy(p.rot);
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
  };

  return { mesh, update };
}

export function initHeroScene(canvas: HTMLCanvasElement): void {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  } catch {
    return; // No WebGL: the hero simply stays without the 3D layer.
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();

  const key = new THREE.DirectionalLight(0xfff3e0, 1.4);
  key.position.set(3, 4, 5);
  scene.add(key);

  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 50);
  camera.position.set(0, 0, 8.2);

  const { root: katana, spin } = buildKatana();
  scene.add(katana);

  const petals = buildPetals(reduceMotion ? 18 : 42);
  scene.add(petals.mesh);

  const container = canvas.parentElement!;
  const resize = () => {
    const { clientWidth: w, clientHeight: h } = container;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // Keep the whole sword in frame on narrow/short containers
    camera.position.z = w / h < 0.8 ? 9.5 : 8.2;
    camera.updateProjectionMatrix();
    if (!running) renderer.render(scene, camera);
  };

  const pointer = new THREE.Vector2();
  const smoothed = new THREE.Vector2();
  window.addEventListener(
    'pointermove',
    (e) => pointer.set((e.clientX / window.innerWidth) * 2 - 1, (e.clientY / window.innerHeight) * 2 - 1),
    { passive: true },
  );

  const clock = new THREE.Clock();
  let running = false;
  let frame = 0;

  const render = () => {
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;
    smoothed.lerp(pointer, 0.05);

    spin.rotation.x = Math.sin(t * 0.6) * 0.55; // slow turn around the blade axis: catches the light
    katana.rotation.y = smoothed.x * 0.35;
    katana.rotation.x = smoothed.y * 0.25;
    katana.position.y = Math.sin(t * 0.8) * 0.08;
    petals.update(t, dt);

    renderer.render(scene, camera);
  };

  const loop = () => {
    render();
    frame = requestAnimationFrame(loop);
  };
  const start = () => {
    if (running || reduceMotion) return;
    running = true;
    clock.getDelta();
    loop();
  };
  const stop = () => {
    running = false;
    cancelAnimationFrame(frame);
  };

  new ResizeObserver(resize).observe(container);
  resize();
  petals.update(0, 0);
  render();
  canvas.classList.add('is-ready');

  // Only animate while visible and while the tab is in the foreground
  let visible = true;
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible && !document.hidden) start();
    else stop();
  }).observe(container);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else if (visible) start();
  });
}
