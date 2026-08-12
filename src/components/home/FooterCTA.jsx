'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import * as THREE from 'three';

export default function FooterCTA() {
  const mountRef = useRef(null);
  const sectionRef = useRef(null);

  // --- 3D THREE.JS FALLING & BOUNCING Glossy Tech Shapes ---
  // Starts physics drop ONLY when section enters viewport!
  useEffect(() => {
    const container = mountRef.current;
    const section = sectionRef.current;
    if (!container || !section) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight1.position.set(10, 20, 15);
    scene.add(dirLight1);

    const pointLight = new THREE.PointLight(0x3b5da6, 4, 50);
    pointLight.position.set(-10, -10, 10);
    scene.add(pointLight);

    // 3D Geometries matching Brand Palette (#3b5da6 & #25294a)
    const shape1Geo = new THREE.IcosahedronGeometry(2.2, 0);
    const shape1Mat = new THREE.MeshPhysicalMaterial({
      color: 0x3b5da6,
      roughness: 0.15,
      metalness: 0.4,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const shape1 = new THREE.Mesh(shape1Geo, shape1Mat);

    const shape2Geo = new THREE.BoxGeometry(2.4, 2.4, 2.4);
    const shape2Mat = new THREE.MeshPhysicalMaterial({
      color: 0x25294a,
      roughness: 0.1,
      metalness: 0.5,
      clearcoat: 1.0,
    });
    const shape2 = new THREE.Mesh(shape2Geo, shape2Mat);

    const shape3Geo = new THREE.TorusKnotGeometry(1.6, 0.6, 64, 16);
    const shape3Mat = new THREE.MeshPhysicalMaterial({
      color: 0x06b6d4,
      roughness: 0.2,
      metalness: 0.2,
      clearcoat: 0.8,
    });
    const shape3 = new THREE.Mesh(shape3Geo, shape3Mat);

    const shape4Geo = new THREE.TorusGeometry(2, 0.6, 16, 50);
    const shape4Mat = new THREE.MeshPhysicalMaterial({
      color: 0x3b5da6,
      roughness: 0.1,
      metalness: 0.5,
      clearcoat: 0.8,
    });
    const shape4 = new THREE.Mesh(shape4Geo, shape4Mat);

    scene.add(shape1);
    scene.add(shape2);
    scene.add(shape3);
    scene.add(shape4);

    const shapes = [
      { mesh: shape1, vy: 0, vx: 0.02, initialVx: 0.02, rotX: 0.02, rotY: 0.03, floor: -6, startX: -7, startY: 16, startZ: 0 },
      { mesh: shape2, vy: 0, vx: -0.01, initialVx: -0.01, rotX: 0.03, rotY: 0.01, floor: -6.5, startX: -2, startY: 20, startZ: 2 },
      { mesh: shape3, vy: 0, vx: 0.015, initialVx: 0.015, rotX: 0.01, rotY: 0.02, floor: -5.8, startX: 6, startY: 18, startZ: -1 },
      { mesh: shape4, vy: 0, vx: -0.02, initialVx: -0.02, rotX: 0.025, rotY: 0.015, floor: -6.2, startX: 9, startY: 22, startZ: 1 }
    ];

    // Reset shapes to initial high positions
    shapes.forEach((item) => {
      item.mesh.position.set(item.startX, item.startY, item.startZ);
    });

    let animationFrameId;
    let isActive = false;
    const gravity = -0.012;
    const bounce = -0.65;

    // Observer to trigger falling drop ONLY when section enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset positions to high top and start dropping
            shapes.forEach((item) => {
              item.mesh.position.set(item.startX, item.startY, item.startZ);
              item.vy = 0;
              item.vx = item.initialVx;
            });
            isActive = true;
          } else {
            isActive = false;
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (isActive) {
        shapes.forEach((item) => {
          const { mesh } = item;

          item.vy += gravity;
          mesh.position.y += item.vy;
          mesh.position.x += item.vx;

          mesh.rotation.x += item.rotX;
          mesh.rotation.y += item.rotY;

          if (mesh.position.y <= item.floor) {
            mesh.position.y = item.floor;
            item.vy *= bounce;
            item.vx *= 0.85;

            if (Math.abs(item.vy) < 0.05) {
              item.vy = 0.04;
            }
          }
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <footer 
      id="contact" 
      ref={sectionRef} 
      className="relative min-h-[85vh] bg-white text-[#25294a] flex flex-col justify-center items-center overflow-hidden select-none py-20 border-t border-zinc-100"
    >
      
      {/* 3D WebGL Canvas Layer */}
      <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-[#3b5da6]/20 via-[#25294a]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Center Main CTA Headline with SCROLL FLICKER EFFECT */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: [0, 1, 0.2, 1, 0.4, 1, 0.8, 1],
            scale: [0.96, 1.02, 0.98, 1],
            filter: [
              'brightness(1.5) contrast(1.2)',
              'brightness(0.7)',
              'brightness(1.3)',
              'brightness(1)',
            ],
          }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1] }}
          className="flex flex-col items-center"
        >
          <motion.h2 className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#25294a] uppercase font-sans leading-[0.95] max-w-5xl">
            LET&apos;S BUILD YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b5da6] via-cyan-500 to-[#25294a]">
              NEXT-GEN DIGITAL
            </span> <br />
            SOLUTION
          </motion.h2>

          {/* SAY HELLO Button */}
          <div className="mt-10">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25294a] text-white font-black text-sm uppercase tracking-wider shadow-2xl hover:bg-[#3b5da6] transition-all transform hover:scale-105 group"
            >
              <span>SAY HELLO</span>
              <div className="w-8 h-8 rounded-full bg-white text-[#25294a] group-hover:bg-[#25294a] group-hover:text-white flex items-center justify-center transition-colors">
                <Mail className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>

    </footer>
  );
}
