import { motion } from 'framer-motion';
import { Trophy, Clock, TrendingUp, TrendingDown, RefreshCw, Sparkles, CheckCircle, XCircle } from 'lucide-react';
import { AssessmentResult } from '@/types/assessment';
import { getCategoryLabel } from '@/data/questions';
import { useEffect, useState } from 'react';

interface SummaryScreenProps {
  result: AssessmentResult;
  onRetake: () => void;
}

const SummaryScreen = ({ result, onRetake }: SummaryScreenProps) => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const getScoreMessage = (accuracy: number) => {
    if (accuracy >= 90) return { text: 'Outstanding!', emoji: '🌟' };
    if (accuracy >= 75) return { text: 'Great Job!', emoji: '🎉' };
    if (accuracy >= 60) return { text: 'Good Progress!', emoji: '👍' };
    if (accuracy >= 40) return { text: 'Nice Effort!', emoji: '💪' };
    return { text: 'Keep Practicing!', emoji: '📚' };
  };

  const scoreMessage = getScoreMessage(result.accuracy);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      transition: { type: 'spring' as const, stiffness: 100 },
    },
  };

  const confettiColors = ['#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4', '#f97316', '#84cc16'];

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                backgroundColor: confettiColors[i % confettiColors.length],
                left: `${50 + (Math.random() - 0.5) * 20}%`,
                top: '0%',
              }}
              initial={{ y: -20, rotate: 0, opacity: 1 }}
              animate={{
                y: '100vh',
                rotate: 720,
                opacity: 0,
              }}
              transition={{
                duration: 2 + Math.random(),
                delay: Math.random() * 0.5,
                ease: 'easeIn',
              }}
            />
          ))}
        </div>
      )}

      {/* Background orbs */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 rounded-full bg-success/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-accent/20 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="max-w-2xl w-full relative z-10">
        {/* Trophy Animation */}
        <motion.div
          className="text-center mb-8"
          variants={itemVariants}
        >
          <motion.div
            className="relative inline-block mb-6"
          >
            <motion.div
              className="w-24 h-24 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-accent-glow"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Trophy className="w-12 h-12 text-accent-foreground" />
            </motion.div>

            {/* Orbiting stars */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 text-accent"
                style={{ transformOrigin: '48px 48px' }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 4 + i * 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
            ))}
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-2"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--success)) 0%, hsl(var(--accent)) 50%, hsl(var(--primary)) 100%)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Assessment Complete!
          </motion.h1>

          <motion.p className="text-xl text-muted-foreground flex items-center justify-center gap-2">
            <span>{scoreMessage.emoji}</span>
            {scoreMessage.text}
            <span>{scoreMessage.emoji}</span>
          </motion.p>
        </motion.div>

        {/* Score Cards */}
        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          variants={itemVariants}
        >
          {/* Accuracy */}
          <motion.div
            className="glass-card-elevated p-6 text-center"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-success opacity-10 rounded-xl"
                animate={{ opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <p className="text-sm text-muted-foreground mb-2">Accuracy</p>
              <motion.p
                className="text-4xl font-bold text-success"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
              >
                {result.accuracy}%
              </motion.p>
              <p className="text-sm text-muted-foreground mt-1">
                {result.correctAnswers}/{result.totalQuestions} correct
              </p>
            </div>
          </motion.div>

          {/* Learning Score */}
          <motion.div
            className="glass-card-elevated p-6 text-center"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-learning opacity-10 rounded-xl"
                animate={{ opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <p className="text-sm text-muted-foreground mb-2">Learning Score</p>
              <motion.p
                className="text-4xl font-bold text-learning"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.4 }}
              >
                {result.learningEfficiency}%
              </motion.p>
              <p className="text-sm text-muted-foreground mt-1">
                Concept retention
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Time */}
        <motion.div
          className="glass-card p-4 mb-6 flex items-center justify-center gap-3"
          variants={itemVariants}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          >
            <Clock className="w-5 h-5 text-muted-foreground" />
          </motion.div>
          <span className="text-muted-foreground">Time spent:</span>
          <span className="font-semibold text-foreground">{formatTime(result.totalTime)}</span>
        </motion.div>

        {/* Category Performance */}
        <motion.div
          className="glass-card-elevated p-6 mb-6"
          variants={itemVariants}
        >
          <h3 className="font-semibold text-foreground mb-4">Category Performance</h3>
          <div className="space-y-4">
            {Object.entries(result.categoryScores).map(([category, score], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">{getCategoryLabel(category)}</span>
                  <span className="font-medium text-foreground">
                    {score.correct}/{score.total} ({score.percentage}%)
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent relative"
                    initial={{ width: 0 }}
                    animate={{ width: `${score.percentage}%` }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strengths and Improvements */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
          variants={itemVariants}
        >
          {/* Strengths */}
          <motion.div
            className="success-card p-5"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <TrendingUp className="w-5 h-5 text-success" />
              </motion.div>
              <h4 className="font-semibold text-success">Strengths</h4>
            </div>
            <ul className="space-y-2">
              {result.strengths.map((strength, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2 text-sm text-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                  {strength}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Improvements */}
          <motion.div
            className="warning-card p-5"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <TrendingDown className="w-5 h-5 text-warning" />
              </motion.div>
              <h4 className="font-semibold text-warning">Areas to Improve</h4>
            </div>
            <ul className="space-y-2">
              {result.improvements.map((improvement, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2 text-sm text-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <XCircle className="w-4 h-4 text-warning flex-shrink-0 mt-0.5" />
                  {improvement}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Retake Button */}
        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <motion.button
            onClick={onRetake}
            className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <RefreshCw className="w-5 h-5" />
            </motion.span>
            Retake Assessment
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SummaryScreen;
