import { memo } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Zap, Users, Globe, Target } from 'lucide-react';
import './Achievements.css';

const Achievements2026 = ({ data }) => {
  const icons = {
    CheckCircle2, Award, Zap, Users, Globe, Target
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="section achievements-section">
      <div className="container">
        <motion.div 
          className="achievements-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">{data.title}</h2>
          <p className="section-subtitle text-center">{data.subtitle}</p>
        </motion.div>

        <motion.div 
          className="achievements-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {data.items && data.items.map((item, idx) => {
            const Icon = icons[item.icon] || CheckCircle2;
            return (
              <motion.div key={idx} className="achievement-card" variants={itemVariants}>
                <div className="achievement-icon-wrapper">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-desc">{item.description}</p>
              </motion.div>
            );
          })}
          
          {/* Support for simple string array (points) */}
          {data.points && (
             <ul className="achievements-list" style={{ listStyle: 'none', padding: 0 }}>
               {data.points.map((point, idx) => {
                 if (typeof point === 'object' && point.header) {
                   return (
                     <motion.li 
                       key={`header-${idx}`} 
                       variants={itemVariants}
                       style={{ marginBottom: '12px', marginTop: idx > 0 ? '24px' : '0' }}
                     >
                       <h4 style={{ margin: 0, color: 'var(--accent-primary)', fontSize: '1.1rem', fontWeight: '700' }}>{point.header}</h4>
                     </motion.li>
                   );
                 }
                 return (
                   <motion.li 
                     key={idx} 
                     variants={itemVariants}
                     style={{ marginBottom: '16px', display: 'flex', gap: '12px' }}
                   >
                     <CheckCircle2 color="var(--accent-primary)" size={18} style={{ flexShrink: 0, marginTop: '4px' }} />
                     <span>{point}</span>
                   </motion.li>
                 );
               })}
             </ul>
          )}

          {/* Moved the visual panel inside the grid to position it to the right */}
          <motion.div 
            className="achievements-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
             <div className="glass-panel text-center visual-panel" style={{ padding: '40px' }}>
                <span className="year-badge" style={{ background: 'var(--accent-primary)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700 }}>{data.badge || 'Milestone'}</span>
                <h3 style={{ margin: '15px 0' }}>{data.visualTitle || 'Foundation'}</h3>
                {/* Fixed progress bar to use CSS classes and remove overriding inline background colors to allow animation */}
                <div className="progress-bar-container" style={{ height: '8px', borderRadius: '4px', overflow: 'hidden', margin: '20px auto', maxWidth: '300px' }}>
                  <div className="progress-bar-fill" style={{ height: '100%', width: '100%' }}></div>
                </div>
                <p>{data.visualText || '100% Core Integration'}</p>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Achievements2026);
