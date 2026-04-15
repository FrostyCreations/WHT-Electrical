import { memo } from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import './FeatureSection.css';

const FeatureSection = ({ data }) => {
  const isReversed = data.imagePosition === 'right';
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  return (
    <section className={`section feature-section ${data.bgColor ? `bg-${data.bgColor}` : (isReversed ? 'bg-secondary' : 'bg-primary')}`}>
      <div className="container">
        <div 
          className={`feature-grid ${isReversed ? 'reversed' : ''}`}
          style={{
            gridTemplateColumns: data.splitRatio 
              ? (isReversed ? `${100 - data.splitRatio}% ${data.splitRatio}%` : `${100 - data.splitRatio}% ${data.splitRatio}%`) 
              : (isReversed ? '1fr 1.4fr' : '1fr 1.4fr')
          }}
        >
          
          <motion.div 
            className="feature-visual"
            initial={isMobile ? {} : { opacity: 0, x: isReversed ? 30 : -30 }}
            whileInView={isMobile ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`feature-image-wrapper ${data.imageStyle || 'standard'}`}>
              {data.imageUrl ? (
                <OptimizedImage src={data.imageUrl} alt={data.title} className="feature-image" />
              ) : (
                <div className="feature-placeholder-image">
                  <LayoutGrid size={48} className="placeholder-icon" />
                </div>
              )}
              <div className="decor-dots"></div>
            </div>
          </motion.div>

          <motion.div 
            className="feature-content"
            initial={isMobile ? {} : { opacity: 0, x: isReversed ? -30 : 30 }}
            whileInView={isMobile ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {data.eyebrow && <span className="feature-eyebrow">{data.eyebrow}</span>}
            <h2 className="section-title text-primary feature-title">{data.title}</h2>
            <div 
              className="feature-text"
              style={{ lineHeight: data.lineHeight || '1.7' }}
            >
              <p style={{ lineHeight: 'inherit' }}>{data.description}</p>
            </div>
            
            {data.price && !data.hidePriceBlock && (
              <div className="pricing-block">
                <div className="pricing-info">
                  <span className="pricing-label">Price:</span>
                  <span className="pricing-value">{data.price}</span>
                </div>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default memo(FeatureSection);
