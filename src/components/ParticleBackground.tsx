import { motion } from 'motion/react';

export function ParticleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dark Concrete Base */}
      <div className="absolute inset-0 concrete-texture opacity-20" />
      
      {/* Glowing Accents */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-terrabricks-copper rounded-full blur-[120px] opacity-20"
      />
      
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-terrabricks-orange rounded-full blur-[100px] opacity-10"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(184,115,51,0.15),transparent_60%)]" />

      {/* Subtle Dust/Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%',
            opacity: Math.random() * 0.3 + 0.1
          }}
          animate={{ 
            y: [null, (Math.random() - 0.5) * 100 + '%'],
            opacity: [null, Math.random() * 0.2 + 0.1, null]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
          className="absolute w-1 h-1 bg-terrabricks-copper rounded-full blur-sm"
        />
      ))}
    </div>
  );
}
