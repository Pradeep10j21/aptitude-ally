import { motion } from 'framer-motion';
import { Sparkles, Check } from 'lucide-react';

interface ProgressIndicatorProps {
  currentQuestion: number;
  totalQuestions: number;
  completedQuestions: number[];
}

const ProgressIndicator = ({ currentQuestion, totalQuestions, completedQuestions }: ProgressIndicatorProps) => {
  const percentage = Math.round((completedQuestions.length / totalQuestions) * 100);
  const showSparkle = percentage >= 50;

  return (
    <motion.div
      className="glass-card p-4 mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="flex items-center justify-between mb-3">
        {/* Question Counter */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Question</span>
          <motion.span
            key={currentQuestion}
            className="text-lg font-bold text-foreground"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            {currentQuestion}
          </motion.span>
          <span className="text-muted-foreground">/ {totalQuestions}</span>
        </div>

        {/* Percentage */}
        <div className="flex items-center gap-2">
          {showSparkle && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <Sparkles className="w-4 h-4 text-accent" />
            </motion.div>
          )}
          <span className="text-sm font-medium text-muted-foreground">{percentage}% Complete</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
            width: '50%',
          }}
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />

        {/* Pulse dot at end */}
        {percentage > 0 && (
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent shadow-accent-glow"
            style={{ left: `calc(${percentage}% - 6px)` }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
      </div>

      {/* Step Indicators */}
      <div className="flex justify-between mt-4">
        {[...Array(totalQuestions)].map((_, index) => {
          const questionNum = index + 1;
          const isCompleted = completedQuestions.includes(questionNum);
          const isCurrent = currentQuestion === questionNum;

          return (
            <motion.div
              key={index}
              className={`relative flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium transition-all duration-300 ${
                isCompleted
                  ? 'bg-success text-success-foreground'
                  : isCurrent
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              {isCompleted ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Check className="w-4 h-4" />
                </motion.div>
              ) : (
                questionNum
              )}

              {/* Pulsing ring for current */}
              {isCurrent && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProgressIndicator;
