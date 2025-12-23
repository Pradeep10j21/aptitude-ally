import { motion } from 'framer-motion';

const FloatingParticles = () => {
  const largeParticles = [
    { color: 'bg-primary/10', size: 'w-72 h-72', x: '-10%', y: '20%', duration: 20 },
    { color: 'bg-accent/10', size: 'w-96 h-96', x: '80%', y: '10%', duration: 25 },
    { color: 'bg-success/10', size: 'w-64 h-64', x: '60%', y: '70%', duration: 18 },
    { color: 'bg-learning/10', size: 'w-80 h-80', x: '20%', y: '80%', duration: 22 },
    { color: 'bg-primary/5', size: 'w-48 h-48', x: '40%', y: '30%', duration: 15 },
    { color: 'bg-accent/5', size: 'w-56 h-56', x: '90%', y: '60%', duration: 23 },
    { color: 'bg-success/5', size: 'w-40 h-40', x: '5%', y: '50%', duration: 17 },
    { color: 'bg-learning/5', size: 'w-52 h-52', x: '70%', y: '40%', duration: 21 },
  ];

  const floatingShapes = [
    { x: '15%', y: '25%', size: 40, duration: 18, rotate: 45 },
    { x: '85%', y: '35%', size: 30, duration: 22, rotate: 30 },
    { x: '25%', y: '65%', size: 35, duration: 20, rotate: 60 },
    { x: '75%', y: '75%', size: 25, duration: 16, rotate: 15 },
    { x: '50%', y: '15%', size: 28, duration: 24, rotate: 75 },
  ];

  const glowingDots = [
    { x: '10%', y: '40%', duration: 3 },
    { x: '30%', y: '20%', duration: 4 },
    { x: '50%', y: '60%', duration: 3.5 },
    { x: '70%', y: '30%', duration: 4.5 },
    { x: '90%', y: '50%', duration: 3 },
    { x: '20%', y: '80%', duration: 4 },
    { x: '60%', y: '10%', duration: 3.5 },
    { x: '80%', y: '85%', duration: 4.5 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large blurred particles */}
      {largeParticles.map((particle, index) => (
        <motion.div
          key={`large-${index}`}
          className={`absolute rounded-full ${particle.color} ${particle.size} blur-3xl`}
          style={{ left: particle.x, top: particle.y }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 20, 0, -20, 0],
            scale: [1, 1.1, 1, 0.95, 1],
            opacity: [0.5, 0.7, 0.5, 0.6, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating shapes with borders */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={`shape-${index}`}
          className="absolute rounded-lg border-2 border-primary/20"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            y: [0, -20, 0, 20, 0],
            rotate: [shape.rotate, shape.rotate + 90, shape.rotate + 180, shape.rotate + 270, shape.rotate + 360],
            scale: [1, 1.05, 1, 0.95, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Glowing dots */}
      {glowingDots.map((dot, index) => (
        <motion.div
          key={`dot-${index}`}
          className="absolute w-2 h-2 rounded-full bg-primary/40"
          style={{ left: dot.x, top: dot.y }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Subtle connecting lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.line
          x1="10%" y1="30%" x2="30%" y2="50%"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          strokeOpacity="0.1"
          animate={{ strokeOpacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.line
          x1="60%" y1="20%" x2="80%" y2="40%"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
          strokeOpacity="0.1"
          animate={{ strokeOpacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.line
          x1="40%" y1="70%" x2="70%" y2="85%"
          stroke="hsl(var(--success))"
          strokeWidth="1"
          strokeOpacity="0.1"
          animate={{ strokeOpacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
      </svg>
    </div>
  );
};

export default FloatingParticles;
