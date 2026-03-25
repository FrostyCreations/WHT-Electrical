import React, { useState, useRef, memo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = ({ data }) => {
  const containerRef = useRef(null);
  
  // Motion Values for mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid motion
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Map mouse movement to subtle parallax offsets
  const moveX = useTransform(springX, [-500, 500], [-30, 30]); 
  const moveY = useTransform(springY, [-300, 300], [-20, 20]); 
  const rotateY = useTransform(springX, [-500, 500], [-10, 10]); 
  const rotateX = useTransform(springY, [-300, 300], [10, -10]); 

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize to center or specific range
    mouseX.set(x - rect.width / 2);
    mouseY.set(y - rect.height / 2);
  };

  return (
    <section 
      id="home" 
      className="hero-section card-layout"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <div className="container">
        <div className="hero-main-card">
          <div className="hero-card-background">
            <video 
              src="/Hero Scene.mov" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="hero-card-video"
            />
            <div className="hero-card-overlay"></div>
            
            {/* Wavy Wave Accent inside the card */}
            <div className="hero-wave-container">
              <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-wave-svg" preserveAspectRatio="none">
                <path d="M0 80C300 120 600 20 1000 40C1200 50 1350 80 1440 100V120H0V80Z" fill="#FFAA00" />
                <path d="M0 100C300 140 600 40 1000 60C1200 70 1350 100 1440 120H0V100Z" fill="#FF8800" />
              </svg>
            </div>
          </div>

          <div className="hero-robot-container">
            <motion.img 
              src="/robot-new.png" 
              alt="AI Robot" 
              className="hero-robot-img"
              style={{ 
                x: moveX, 
                y: moveY,
                rotateY,
                rotateX,
                perspective: 1000
              }}
              animate={{ 
                translateY: [0, -15, 0] // Bobbing movement
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </div>

          <div className="hero-card-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">{data.title}</h1>
            </motion.div>
          </div>

          {/* Floating Widgets */}
          <motion.div 
            className="hero-widget widget-leads"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="widget-header">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path><path d="M12 7v5l3 3"></path></svg>
              <span>Spacewalks</span>
            </div>
            <svg className="widget-svg-chart" viewBox="0 0 200 60" preserveAspectRatio="none">
              <path d="M0 50 Q 25 45, 50 35 T 100 40 T 150 20 T 200 10" fill="none" stroke="#FFAA00" strokeWidth="3" />
              <path d="M0 50 Q 25 45, 50 35 T 100 40 T 150 20 T 200 10 V 60 H 0 Z" fill="rgba(255, 170, 0, 0.2)" />
              <circle cx="150" cy="20" r="4" fill="#fff" />
            </svg>
          </motion.div>

          <motion.div 
            className="hero-widget widget-conversion"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="widget-header">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              <span>Heart rate</span>
            </div>
            <svg className="widget-svg-chart" viewBox="0 0 180 60" preserveAspectRatio="none">
              <path d="M0 30 H 40 L 50 10 L 70 50 L 80 20 L 90 30 H 130 Q 140 25, 150 30 T 180 30" fill="none" stroke="#FFAA00" strokeWidth="2" />
            </svg>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div 
          className="hero-quote-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="hero-quote">
            "You want to wake up in the morning and think the future is going to be great - and that's what building <strong>intelligent systems</strong> is all about. It's about believing in the future and thinking that the future will be better than the past."
          </p>
          <span className="quote-author">— VanillaHub AI</span>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Hero);
