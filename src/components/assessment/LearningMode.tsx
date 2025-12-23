import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, ArrowRight, Brain, Sparkles, CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import { Question, ExplanationStep } from '@/types/assessment';

interface LearningModeProps {
  question: Question;
  selectedAnswer: number;
  onContinue: () => void;
  onTrySimilar?: () => void;
  hasReinforcement: boolean;
}

const LearningMode = ({
  question,
  selectedAnswer,
  onContinue,
  onTrySimilar,
  hasReinforcement,
}: LearningModeProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepsCompleted, setStepsCompleted] = useState(false);

  const steps = question.steps || [];
  const totalSteps = steps.length;

  const handleNextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setStepsCompleted(true);
    }
  };

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
      transition: { type: 'spring' as const, stiffness: 100 },
    },
  };

  return (
    <motion.div
      className="learning-card p-6 mt-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div
        className="flex items-center gap-3 mb-6"
        variants={itemVariants}
      >
        <motion.div
          className="relative w-12 h-12 rounded-xl bg-learning/20 flex items-center justify-center text-learning"
          animate={{ y: [0, -5, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Lightbulb className="w-6 h-6" />
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-learning"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>
        <div>
          <motion.h3
            className="font-semibold text-lg"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--learning)) 0%, hsl(var(--accent)) 100%)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Let's understand this concept
          </motion.h3>
          <p className="text-sm text-muted-foreground">{question.concept}</p>
        </div>
      </motion.div>

      {/* GIF Display */}
      {question.gifUrl && (
        <motion.div
          className="mb-6 rounded-xl overflow-hidden bg-muted/30"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={question.gifUrl}
            alt="Learning illustration"
            className="w-full h-48 object-cover"
          />
        </motion.div>
      )}

      {/* Step-by-Step Breakdown */}
      {!stepsCompleted && steps.length > 0 && (
        <motion.div
          className="mb-6"
          variants={itemVariants}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              className="relative bg-card/50 rounded-xl p-5 border border-learning/20 overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              {/* Background shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-learning/5 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />

              <div className="relative z-10">
                {/* Step emoji */}
                <motion.div
                  className="text-4xl mb-3"
                  initial={{ rotate: -45, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {steps[currentStep].emoji || '💡'}
                </motion.div>

                {/* Step title */}
                <motion.h4
                  className="font-semibold text-foreground mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Step {currentStep + 1}: {steps[currentStep].title}
                </motion.h4>

                {/* Step content */}
                <motion.p
                  className="text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {steps[currentStep].content}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {steps.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? 'bg-learning w-6'
                    : index < currentStep
                    ? 'bg-learning/50'
                    : 'bg-muted'
                }`}
                animate={index === currentStep ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              />
            ))}
          </div>

          {/* Next Step Button */}
          <motion.button
            onClick={handleNextStep}
            className="btn-learning w-full mt-4 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {currentStep < totalSteps - 1 ? (
              <>
                Next Step
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </>
            ) : (
              <>
                Got it!
                <CheckCircle className="w-5 h-5" />
              </>
            )}
          </motion.button>
        </motion.div>
      )}

      {/* Summary after steps completed */}
      <AnimatePresence>
        {stepsCompleted && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {/* Answer Comparison */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
              variants={itemVariants}
            >
              {/* Your Answer */}
              <motion.div
                className="warning-card p-4"
                initial={{ opacity: 0, x: -20, rotate: -2 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-warning mb-1">Your Answer</p>
                    <p className="text-foreground">{question.options[selectedAnswer]}</p>
                    <span className="text-2xl mt-2 block">😅</span>
                  </div>
                </div>
              </motion.div>

              {/* Correct Answer */}
              <motion.div
                className="success-card p-4"
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-success mb-1">Correct Answer</p>
                    <p className="text-foreground">{question.options[question.correctAnswer]}</p>
                    <span className="text-2xl mt-2 block">✅</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Fun Fact */}
            {question.funFact && (
              <motion.div
                className="glass-card p-4 mb-4 border-accent/30 bg-accent/5"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  >
                    <Sparkles className="w-5 h-5 text-accent flex-shrink-0" />
                  </motion.div>
                  <div>
                    <p className="text-sm font-medium text-accent mb-1">Fun Fact 🎉</p>
                    <p className="text-sm text-muted-foreground">{question.funFact}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Pro Tip */}
            <motion.div
              className="glass-card p-4 mb-6 border-primary/30 bg-primary/5"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-start gap-3">
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Brain className="w-5 h-5 text-primary flex-shrink-0" />
                </motion.div>
                <div>
                  <p className="text-sm font-medium text-primary mb-1">Pro Tip</p>
                  <p className="text-sm text-muted-foreground">{question.tip}</p>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              variants={itemVariants}
            >
              {hasReinforcement && onTrySimilar && (
                <motion.button
                  onClick={onTrySimilar}
                  className="btn-learning flex-1 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <RefreshCw className="w-5 h-5" />
                  Try a Similar Question
                </motion.button>
              )}
              <motion.button
                onClick={onContinue}
                className="btn-primary flex-1 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Continue to Next
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LearningMode;
