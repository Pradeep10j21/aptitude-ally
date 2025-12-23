import { motion } from 'framer-motion';
import { Sparkles, BookOpen, Target, TrendingUp, Clock, ArrowRight } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const features = [
    {
      icon: BookOpen,
      title: 'Learn as You Go',
      description: 'Understand concepts when you make mistakes',
    },
    {
      icon: Target,
      title: 'Adaptive Assessment',
      description: 'Questions that challenge and teach',
    },
    {
      icon: TrendingUp,
      title: 'Track Your Progress',
      description: 'See your strengths and areas to improve',
    },
    {
      icon: Clock,
      title: 'Your Own Pace',
      description: 'No pressure, just learning',
    },
  ];

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-6 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background orbs */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-accent/20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-4xl w-full relative z-10">
        {/* Logo and Title */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          {/* Animated Logo */}
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-primary shadow-glow mb-6 relative"
            animate={{
              y: [-5, 5, -5],
              rotate: [-3, 3, -3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles className="w-10 h-10 text-primary-foreground" />
            
            {/* Orbiting particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-accent"
                style={{ transformOrigin: '40px 40px' }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * 0.5,
                }}
              />
            ))}
          </motion.div>

          {/* Gradient Title */}
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4 animate-gradient"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 50%, hsl(var(--primary)) 100%)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Aptitude Assessment
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A learning-first assessment experience. Make mistakes, understand concepts, 
            and showcase your potential through guided problem-solving.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass-card p-6 group cursor-pointer"
              initial={{ opacity: 0, rotateX: -15 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{
                delay: 0.5 + index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.03,
                y: -5,
              }}
            >
              {/* Shimmer overlay on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                />
              </motion.div>

              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="text-center">
          <motion.button
            onClick={onStart}
            className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Assessment
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.button>

          <motion.p
            className="mt-4 text-sm text-muted-foreground flex items-center justify-center gap-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Clock className="w-4 h-4" />
            8 questions • ~10 minutes
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;
