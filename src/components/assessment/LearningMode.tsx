import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, ArrowRight, Brain, Sparkles, CheckCircle, XCircle, SkipForward, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Question } from '@/types/assessment';

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

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkipToNext = () => {
    onContinue();
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
      {/* Header with Skip Button */}
      <motion.div
        className="flex items-center justify-between mb-6"
        variants={itemVariants}
      >
        <div className="flex items-center gap-3">
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
        </div>

        {/* Skip to Next Question Button */}
        <motion.button
          onClick={handleSkipToNext}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors text-sm"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <SkipForward className="w-4 h-4" />
          Skip to Next
        </motion.button>
      </motion.div>

      {/* Step-by-Step Breakdown with Diagrams */}
      {!stepsCompleted && steps.length > 0 && (
        <motion.div
          className="mb-6"
          variants={itemVariants}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              className="relative bg-card/80 rounded-xl border border-learning/20 overflow-hidden"
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

              <div className="relative z-10 p-6">
                {/* Step Header */}
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className="text-4xl"
                    initial={{ rotate: -45, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    {steps[currentStep].emoji || '💡'}
                  </motion.div>
                  <div className="flex-1">
                    <motion.h4
                      className="font-semibold text-lg text-foreground mb-1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      Step {currentStep + 1}: {steps[currentStep].title}
                    </motion.h4>
                    <motion.p
                      className="text-muted-foreground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {steps[currentStep].content}
                    </motion.p>
                  </div>
                </div>

                {/* Diagram Display */}
                {steps[currentStep].diagram && (
                  <motion.div
                    className="mt-4 p-4 bg-muted/30 rounded-lg border border-border/50 overflow-x-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <pre className="text-xs sm:text-sm font-mono text-foreground whitespace-pre leading-relaxed">
                      {steps[currentStep].diagram.content}
                    </pre>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-4">
            {/* Previous Button */}
            <motion.button
              onClick={handlePrevStep}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                currentStep === 0
                  ? 'bg-muted/30 text-muted-foreground/50 cursor-not-allowed'
                  : 'bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground'
              }`}
              whileHover={currentStep > 0 ? { scale: 1.02 } : {}}
              whileTap={currentStep > 0 ? { scale: 0.98 } : {}}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </motion.button>

            {/* Progress dots */}
            <div className="flex items-center gap-2">
              {steps.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? 'bg-learning w-8'
                      : index < currentStep
                      ? 'bg-success'
                      : 'bg-muted hover:bg-muted-foreground/50'
                  }`}
                  animate={index === currentStep ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              ))}
            </div>

            {/* Next/Got it Button */}
            <motion.button
              onClick={handleNextStep}
              className="btn-learning flex items-center gap-2 px-4 py-2"
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
                    <ChevronRight className="w-5 h-5" />
                  </motion.span>
                </>
              ) : (
                <>
                  Got it!
                  <CheckCircle className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </div>

          {/* Step Counter */}
          <div className="text-center mt-3 text-sm text-muted-foreground">
            Step {currentStep + 1} of {totalSteps}
          </div>
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
                    <p className="text-sm font-medium text-accent mb-1">Fun Fact</p>
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

            {/* Continue Button */}
            <motion.div
              className="flex justify-center"
              variants={itemVariants}
            >
              <motion.button
                onClick={onContinue}
                className="btn-primary flex items-center justify-center gap-2 px-8 py-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Continue to Next Question
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
