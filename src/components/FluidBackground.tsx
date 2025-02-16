import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './FluidBackground.css';

const fragmentShader = `
  uniform float time;
  uniform vec2 resolution;
  uniform vec2 mouse;
  uniform float mouseSpeed;
  
  #define LAYERS 4.0
  #define PI 3.14159265359
  
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }
  
  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  float fbm(vec2 st) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 0.0;
    
    for(float i = 0.0; i < 6.0; i++) {
      value += amplitude * noise(st);
      st *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  vec3 colorA = vec3(0.5, 0.0, 1.0);  // Purple
  vec3 colorB = vec3(1.0, 0.0, 0.5);  // Pink
  vec3 colorC = vec3(0.0, 0.5, 1.0);  // Blue

  void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * resolution.xy) / min(resolution.x, resolution.y);
    
    vec2 mouse_norm = mouse.xy/resolution.xy;
    mouse_norm = mouse_norm * 2.0 - 1.0;
    
    float dist = length(uv - mouse_norm) * 2.0;
    float mouseEffect = smoothstep(1.0, 0.0, dist) * mouseSpeed;
    
    vec2 q = vec2(0.0);
    q.x = fbm(uv + 0.1 * time);
    q.y = fbm(uv + vec2(1.0));
    
    vec2 r = vec2(0.0);
    r.x = fbm(uv + 1.0 * q + vec2(1.7, 9.2) + 0.15 * time);
    r.y = fbm(uv + 1.0 * q + vec2(8.3, 2.8) + 0.126 * time);
    
    float f = fbm(uv + r + mouseEffect);
    
    vec3 color = mix(colorA, colorB, clamp(f * 2.0, 0.0, 1.0));
    color = mix(color, colorC, clamp(length(q), 0.0, 1.0));
    color = mix(color, colorA, clamp(length(r.x), 0.0, 1.0));
    
    float brightness = f * 0.8 + 0.4;  // Adjust base brightness
    color = color * brightness;
    
    // Add subtle pulsing effect
    float pulse = sin(time * 0.5) * 0.1 + 0.9;
    color *= pulse;
    
    // Add vignette effect
    float vignette = 1.0 - smoothstep(0.5, 1.5, length(uv));
    color *= vignette;
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const FluidBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const mouseSpeed = useRef<number>(0);
  const lastMousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!containerRef.current || isInitialized) return;

    const container = containerRef.current;
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    const geometry = new THREE.PlaneGeometry(2, 2);
    const uniforms = {
      time: { value: 0 },
      resolution: { value: new THREE.Vector2() },
      mouse: { value: new THREE.Vector2() },
      mouseSpeed: { value: 0.0 }
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      renderer.setSize(width, height);
      uniforms.resolution.value.set(width, height);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      // Calculate mouse speed
      const dx = x - lastMousePosition.current.x;
      const dy = y - lastMousePosition.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy) * 0.01;
      mouseSpeed.current = THREE.MathUtils.lerp(mouseSpeed.current, speed, 0.1);
      
      lastMousePosition.current = { x, y };
      mousePosition.current = { x, y };
      uniforms.mouse.value.set(x, y);
      uniforms.mouseSpeed.value = mouseSpeed.current;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      const rect = container.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      
      // Calculate touch speed
      const dx = x - lastMousePosition.current.x;
      const dy = y - lastMousePosition.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy) * 0.01;
      mouseSpeed.current = THREE.MathUtils.lerp(mouseSpeed.current, speed, 0.1);
      
      lastMousePosition.current = { x, y };
      mousePosition.current = { x, y };
      uniforms.mouse.value.set(x, y);
      uniforms.mouseSpeed.value = mouseSpeed.current;
    };

    container.appendChild(renderer.domElement);
    window.addEventListener('resize', resize);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchmove', handleTouchMove);
    resize();

    let animationFrameId: number;
    const animate = (time: number) => {
      uniforms.time.value = time * 0.001;
      
      // Gradually reduce mouse speed
      mouseSpeed.current *= 0.95;
      uniforms.mouseSpeed.value = mouseSpeed.current;
      
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate(0);

    setIsInitialized(true);

    return () => {
      window.removeEventListener('resize', resize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, [isInitialized]);

  return (
    <div 
      ref={containerRef} 
      className="fluid-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.8,
        transition: 'opacity 0.5s ease-in-out'
      }}
    />
  );
};

export default FluidBackground;
