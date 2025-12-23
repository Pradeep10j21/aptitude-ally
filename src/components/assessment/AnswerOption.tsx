import { motion } from 'framer-motion';
import { Check, X, Sparkles } from 'lucide-react';
import { FeedbackState } from '@/types/assessment';

interface AnswerOptionProps {
  option: string;
  index: number;
  isSelected: boolean;
  feedbackState: FeedbackState;
  correctAnswer: number;
  onSelect: (index: number) => void;
  disabled: boolean;
}

const AnswerOption = ({
  option,
  index,
  isSelected,
  feedbackState,
  correctAnswer,
  onSelect,
  disabled,
}: AnswerOptionProps) => {
  const labels = ['A', 'B', 'C', 'D'];
  const isCorrect = index === correctAnswer;
  const showCorrectState = feedbackState !== 'none' && isCorrect;
  const showIncorrectState = feedbackState === 'incorrect' && isSelected && !isCorrect;

  const getStateClasses = () => {
    if (showCorrectState) return 'border-success bg-success/10';
    if (showIncorrectState) return 'border-warning bg-warning/10';
    if (isSelected) return 'border-primary bg-primary/10';
    return 'border-border/50 hover:border-primary/50';
  };

  const confettiColors = ['#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4'];

  return (
    <motion.button
      className={`relative w-full rounded-xl border-2 p-4 text-left transition-all duration-200 backdrop-blur-sm ${getStateClasses()}`}
      onClick={() => !disabled && onSelect(index)}
      disabled={disabled}
      initial={{ opacity: 0, x: -30, rotateY: -10 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
      whileHover={!disabled ? { scale: 1.02, x: 10 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
    >
      {/* Selection ripple effect */}
      {isSelected && feedbackState === 'none' && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-primary/10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Hover sparkle */}
      {!disabled && !isSelected && (
        <motion.div
          className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/30"
          initial={{ opacity: 0, rotate: 0 }}
          whileHover={{ opacity: 1, rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          <Sparkles className="w-5 h-5" />
        </motion.div>
      )}

      {/* Selection pulse indicator */}
      {isSelected && feedbackState === 'none' && (
        <motion.div
          className="absolute -right-1 -top-1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <motion.div
            className="w-6 h-6 rounded-full bg-primary flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <div className="w-4 h-4 rounded-full bg-primary-foreground/30" />
            <div className="absolute w-2 h-2 rounded-full bg-primary-foreground" />
          </motion.div>
        </motion.div>
      )}

      {/* Confetti for correct answer */}
      {showCorrectState && (
        <>
          {confettiColors.map((color, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{ backgroundColor: color, left: '50%', top: '50%' }}
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{
                scale: [0, 1, 0],
                x: (Math.random() - 0.5) * 100,
                y: (Math.random() - 0.5) * 80,
                opacity: [0, 1, 0],
              }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            />
          ))}
          <motion.div
            className="absolute inset-0 rounded-xl"
            initial={{ background: 'transparent' }}
            animate={{
              background: [
                'linear-gradient(90deg, transparent 0%, hsl(var(--success) / 0.1) 50%, transparent 100%)',
                'linear-gradient(90deg, transparent 100%, hsl(var(--success) / 0.1) 50%, transparent 0%)',
              ],
            }}
            transition={{ duration: 0.5 }}
          />
        </>
      )}

      {/* Shake animation for incorrect */}
      <motion.div
        className="flex items-center gap-4 relative z-10"
        animate={
          showIncorrectState
            ? {
                rotate: [0, -10, 10, -10, 10, 0],
              }
            : {}
        }
        transition={{ duration: 0.5 }}
      >
        {/* Option Label */}
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-semibold transition-all duration-200 ${
            showCorrectState
              ? 'bg-success text-success-foreground'
              : showIncorrectState
              ? 'bg-warning text-warning-foreground'
              : isSelected
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground'
          }`}
        >
          {showCorrectState ? (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Check className="w-5 h-5" />
            </motion.div>
          ) : showIncorrectState ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            labels[index]
          )}
        </div>

        {/* Option Text */}
        <span className="text-foreground font-medium">{option}</span>
      </motion.div>
    </motion.button>
  );
};

export default AnswerOption;
