import { motion } from 'framer-motion';
import { Lightbulb, CheckCircle, Clock, Brain, ArrowRight, Sparkles } from 'lucide-react';

interface InstructionsScreenProps {
  onBegin: () => void;
}

const InstructionsScreen = ({ onBegin }: InstructionsScreenProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
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

  const howItWorks = [
    {
      icon: Brain,
      title: 'Answer Questions',
      description: 'Read each question carefully and select your best answer.',
    },
    {
      icon: Lightbulb,
      title: 'Learn from Mistakes',
      description: 'If you answer incorrectly, we\'ll guide you through the concept step-by-step.',
    },
    {
      icon: CheckCircle,
      title: 'Practice & Reinforce',
      description: 'Get similar questions to solidify your understanding.',
    },
  ];

  const tips = [
    'Take your time - this is about learning, not speed',
    'Read the explanations carefully when provided',
    'Don\'t worry about making mistakes - they\'re learning opportunities',
    'Your performance is tracked to show your growth areas',
  ];

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-6 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-2xl w-full relative z-10">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-10">
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-learning/10 text-learning mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">How It Works</h2>
          <p className="text-muted-foreground">A quick guide before you begin</p>
        </motion.div>

        {/* How It Works */}
        <motion.div variants={itemVariants} className="glass-card p-6 mb-6">
          <h3 className="font-semibold text-lg text-foreground mb-4">The Learning Flow</h3>
          <div className="space-y-4">
            {howItWorks.map((item, index) => (
              <motion.div
                key={item.title}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tips */}
        <motion.div variants={itemVariants} className="glass-card p-6 mb-8">
          <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-accent" />
            Tips for Best Experience
          </h3>
          <ul className="space-y-3">
            {tips.map((tip, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3 text-sm text-muted-foreground"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                {tip}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* What to Expect */}
        <motion.div variants={itemVariants} className="glass-card p-6 mb-8 border-learning/30 bg-learning/5">
          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-learning flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">What to Expect</h3>
              <p className="text-sm text-muted-foreground">
                You'll answer 8 questions covering quantitative, logical, verbal, and analytical reasoning. 
                The timer tracks time spent but doesn't pressure you. Focus on understanding, not rushing.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Begin Button */}
        <motion.div variants={itemVariants} className="text-center">
          <motion.button
            onClick={onBegin}
            className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Begin Assessment
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InstructionsScreen;
