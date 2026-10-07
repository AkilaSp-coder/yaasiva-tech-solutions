import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Play, Pause, RotateCw, Activity, ShieldCheck, Zap } from 'lucide-react';

interface SphereCanvasProps {
  className?: string;
  interactive?: boolean;
}

export const SphereCanvas: React.FC<SphereCanvasProps> = ({ className = '', interactive = true }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [isRunning, setIsRunning] = useState(true);
  const [rotationSpeed, setRotationSpeed] = useState(1);
  const [glowMode, setGlowMode] = useState<'cyan' | 'electric' | 'violet'>('cyan');
  const [activeNodesCount, setActiveNodesCount] = useState(142);
  const [isPointerHovered, setIsPointerHovered] = useState(false);

  // References to communicate with animation loop without re-triggering effects
  const animStateRef = useRef({
    isRunning: true,
    speed: 1,
    targetRotationX: 0,
    targetRotationY: 0,
    currentRotationX: 0,
    currentRotationY: 0,
    glowMode: 'cyan',
    isHovered: false,
    mouseX: 0,
    mouseY: 0,
  });

  useEffect(() => {
    animStateRef.current.isRunning = isRunning;
    animStateRef.current.speed = rotationSpeed;
    animStateRef.current.glowMode = glowMode;
    animStateRef.current.isHovered = isPointerHovered;
  }, [isRunning, rotationSpeed, glowMode, isPointerHovered]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      animStateRef.current.speed = 0.2;
    }

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7.5;

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group to hold all 3D sphere components
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 3. Inner Pulsing Core (Icosahedron)
    const innerGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 4. Solid glowing center nucleus
    const nucleusGeo = new THREE.SphereGeometry(0.75, 24, 24);
    const nucleusMat = new THREE.MeshStandardMaterial({
      color: 0x070b19,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.8,
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
    mainGroup.add(nucleusMesh);

    // 5. Outer Geodesic Sphere with Node Points
    const outerGeo = new THREE.IcosahedronGeometry(2.35, 3);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    mainGroup.add(outerMesh);

    // 6. Neural Vertices (Points on outer shell)
    const posAttribute = outerGeo.attributes.position;
    const vertexPointsCount = posAttribute.count;
    setActiveNodesCount(vertexPointsCount);

    const pointsGeo = new THREE.BufferGeometry();
    const pointPositions = new Float32Array(posAttribute.array);
    pointsGeo.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3));

    // Custom Canvas Texture for circular glowing particle nodes
    const makeGlowDot = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        grad.addColorStop(0.3, 'rgba(6, 182, 212, 0.9)');
        grad.addColorStop(0.8, 'rgba(59, 130, 246, 0.3)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const dotTexture = makeGlowDot();
    const pointsMat = new THREE.PointsMaterial({
      size: 0.16,
      map: dotTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0x67e8f9,
    });
    const pointsMesh = new THREE.Points(pointsGeo, pointsMat);
    mainGroup.add(pointsMesh);

    // 7. Dynamic Neural Synapse Connecting Lines
    const lineCoords: number[] = [];
    const positions = posAttribute.array;
    for (let i = 0; i < vertexPointsCount; i += 3) {
      for (let j = i + 1; j < Math.min(i + 6, vertexPointsCount); j++) {
        const x1 = positions[i * 3];
        const y1 = positions[i * 3 + 1];
        const z1 = positions[i * 3 + 2];
        const x2 = positions[j * 3];
        const y2 = positions[j * 3 + 1];
        const z2 = positions[j * 3 + 2];
        const dist = Math.hypot(x1 - x2, y1 - y2, z1 - z2);
        if (dist < 1.1) {
          lineCoords.push(x1, y1, z1, x2, y2, z2);
        }
      }
    }
    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(lineCoords, 3));
    const linesMat = new THREE.LineBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    });
    const neuralLines = new THREE.LineSegments(linesGeo, linesMat);
    mainGroup.add(neuralLines);

    // 8. Dual Orbital Particle Rings
    const createRing = (radius: number, count: number, color: number, tiltX: number, tiltY: number) => {
      const ringGeo = new THREE.BufferGeometry();
      const ringPositions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const spread = (Math.random() - 0.5) * 0.18;
        ringPositions[i * 3] = Math.cos(angle) * (radius + spread);
        ringPositions[i * 3 + 1] = (Math.random() - 0.5) * 0.15;
        ringPositions[i * 3 + 2] = Math.sin(angle) * (radius + spread);
      }
      ringGeo.setAttribute('position', new THREE.BufferAttribute(ringPositions, 3));
      const ringMat = new THREE.PointsMaterial({
        size: 0.08,
        color,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
      });
      const ring = new THREE.Points(ringGeo, ringMat);
      ring.rotation.x = tiltX;
      ring.rotation.z = tiltY;
      return ring;
    };

    const ring1 = createRing(3.1, 160, 0x06b6d4, Math.PI / 4, 0.2);
    const ring2 = createRing(3.4, 130, 0x8b5cf6, -Math.PI / 3.5, 0.4);
    mainGroup.add(ring1);
    mainGroup.add(ring2);

    // 9. Ambient & Point Lighting
    const ambientLight = new THREE.AmbientLight(0x0f172a, 1.5);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 3, 20);
    cyanLight.position.set(4, 3, 5);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0x8b5cf6, 2.5, 20);
    purpleLight.position.set(-4, -3, 3);
    scene.add(purpleLight);

    // Pointer Interaction Event Handlers
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (!interactive) return;
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const rect = container.getBoundingClientRect();
      const normX = ((clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((clientY - rect.top) / rect.height) * 2 - 1);

      animStateRef.current.mouseX = normX;
      animStateRef.current.mouseY = normY;

      if (isDragging && interactive) {
        const deltaX = clientX - prevMouseX;
        const deltaY = clientY - prevMouseY;
        animStateRef.current.targetRotationY += deltaX * 0.008;
        animStateRef.current.targetRotationX += deltaY * 0.008;
        prevMouseX = clientX;
        prevMouseY = clientY;
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const handleMouseEnter = () => setIsPointerHovered(true);
    const handleMouseLeave = () => {
      setIsPointerHovered(false);
      isDragging = false;
    };

    container.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);
    container.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const delta = clock.getDelta();
      const state = animStateRef.current;

      if (state.isRunning) {
        // Base continuous rotation
        const rotDelta = delta * 0.35 * state.speed;
        mainGroup.rotation.y += rotDelta;

        // Counter-rotating particle rings
        ring1.rotation.y += rotDelta * 1.5;
        ring2.rotation.y -= rotDelta * 1.2;

        // Pulsing core effect
        const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.06;
        nucleusMesh.scale.set(pulse, pulse, pulse);

        const innerPulse = 1 + Math.cos(elapsedTime * 1.8) * 0.04;
        innerMesh.scale.set(innerPulse, innerPulse, innerPulse);

        // Subtle sine breathing of lines opacity
        linesMat.opacity = 0.18 + Math.sin(elapsedTime * 3) * 0.08;
      }

      // Smooth pointer reaction & rotation damping
      state.currentRotationX += (state.targetRotationX - state.currentRotationX) * 0.08;
      state.currentRotationY += (state.targetRotationY - state.currentRotationY) * 0.08;

      // Parallax tilt towards cursor
      const mouseInfluenceX = state.mouseY * 0.35;
      const mouseInfluenceY = state.mouseX * 0.45;

      mainGroup.rotation.x = state.currentRotationX + mouseInfluenceX;
      mainGroup.rotation.y += (state.currentRotationY - mainGroup.rotation.y) * 0.05 + (state.isHovered ? mouseInfluenceY * 0.02 : 0);

      // Dynamic color update based on glow mode
      if (state.glowMode === 'cyan') {
        pointsMat.color.setHex(0x67e8f9);
        innerMat.color.setHex(0x06b6d4);
        linesMat.color.setHex(0x22d3ee);
        cyanLight.color.setHex(0x06b6d4);
      } else if (state.glowMode === 'electric') {
        pointsMat.color.setHex(0x60a5fa);
        innerMat.color.setHex(0x3b82f6);
        linesMat.color.setHex(0x93c5fd);
        cyanLight.color.setHex(0x3b82f6);
      } else {
        pointsMat.color.setHex(0xc084fc);
        innerMat.color.setHex(0x8b5cf6);
        linesMat.color.setHex(0xd8b4fe);
        cyanLight.color.setHex(0xa855f7);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean up on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      container.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);

      // Dispose Three.js objects to avoid WebGL memory leaks
      innerGeo.dispose();
      innerMat.dispose();
      nucleusGeo.dispose();
      nucleusMat.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
      linesGeo.dispose();
      linesMat.dispose();
      dotTexture.dispose();
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [interactive]);

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* 3D WebGL Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] cursor-grab active:cursor-grabbing touch-none select-none relative"
        title="Interactive 3D AI Neural Core — Drag or move cursor to interact"
      />

      {/* Floating HUD Telemetry & Interactive Control Bar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-3 py-2 rounded-xl bg-[#070B19]/80 backdrop-blur-md border border-cyan-500/20 shadow-xl shadow-cyan-950/40 text-xs text-slate-300">
        {/* Play/Pause */}
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="p-1.5 rounded-lg bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 text-slate-300 transition-colors flex items-center gap-1.5 focus-visible:ring-1 focus-visible:ring-cyan-400"
          aria-label={isRunning ? 'Pause 3D rotation' : 'Resume 3D rotation'}
        >
          {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline font-mono">{isRunning ? 'Running' : 'Paused'}</span>
        </button>

        <span className="w-px h-3.5 bg-white/10" aria-hidden="true" />

        {/* Speed toggle */}
        <button
          onClick={() => setRotationSpeed((prev) => (prev >= 2 ? 0.5 : prev + 0.5))}
          className="px-2 py-1 rounded-lg bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors font-mono text-[11px] flex items-center gap-1"
          title="Adjust rotation velocity"
        >
          <RotateCw className="w-3 h-3 text-cyan-400" />
          <span>{rotationSpeed}x</span>
        </button>

        <span className="w-px h-3.5 bg-white/10" aria-hidden="true" />

        {/* Spectrum Mode */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setGlowMode('cyan')}
            className={`w-3.5 h-3.5 rounded-full transition-all ${glowMode === 'cyan' ? 'ring-2 ring-cyan-400 scale-110 bg-cyan-400' : 'bg-cyan-600/50 hover:bg-cyan-400'}`}
            title="Cyan Spectrum"
            aria-label="Cyan Spectrum"
          />
          <button
            onClick={() => setGlowMode('electric')}
            className={`w-3.5 h-3.5 rounded-full transition-all ${glowMode === 'electric' ? 'ring-2 ring-blue-400 scale-110 bg-blue-500' : 'bg-blue-600/50 hover:bg-blue-400'}`}
            title="Electric Blue Spectrum"
            aria-label="Electric Blue Spectrum"
          />
          <button
            onClick={() => setGlowMode('violet')}
            className={`w-3.5 h-3.5 rounded-full transition-all ${glowMode === 'violet' ? 'ring-2 ring-purple-400 scale-110 bg-purple-500' : 'bg-purple-600/50 hover:bg-purple-400'}`}
            title="Deep Violet Spectrum"
            aria-label="Deep Violet Spectrum"
          />
        </div>

        <span className="w-px h-3.5 bg-white/10 hidden md:inline" aria-hidden="true" />

        {/* Active Node Metric */}
        <div className="hidden md:flex items-center gap-1.5 font-mono text-[11px] text-cyan-300">
          <Zap className="w-3 h-3 text-cyan-400 animate-pulse" />
          <span>{activeNodesCount} Nodes Active</span>
        </div>
      </div>
    </div>
  );
};
