import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = ({ data }) => {
  return (
    <section id="home" className="hero-section card-layout">
      <div className="container">
        <div className="hero-main-card">
          <div className="hero-card-background">
            <img 
              src="/crm-ui-bg.png" 
              alt="CRM UI Background" 
              className="hero-card-img bg-ui" 
            />
            <div className="hero-card-overlay"></div>
          </div>

          <div className="hero-robot-container">
            <motion.img 
              src="/robot-isolated.png" 
              alt="Floating AI Robot" 
              className="floating-robot"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 1, 0]
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
              <span className="dot turquoise"></span>
              <span>CRM Leads</span>
            </div>
            <div className="widget-value">+1,280</div>
            <div className="widget-graph"></div>
          </motion.div>

          <motion.div 
            className="hero-widget widget-conversion"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="widget-header">
              <span className="heart-icon">❤️</span>
              <span>Conversion</span>
            </div>
            <div className="widget-value">24.5%</div>
            <div className="widget-pulse"></div>
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
            "Automating the 'boring stuff' isn't just about efficiency—it's about <strong>believing in the future</strong> of human potential. We build systems so you can build visions."
          </p>
          <span className="quote-author">— VanillaHub AI</span>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Hero);
