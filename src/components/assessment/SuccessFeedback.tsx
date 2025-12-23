import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

interface SuccessFeedbackProps {
  explanation: string;
  onContinue: () => void;
}

const SuccessFeedback = ({ explanation, onContinue }: SuccessFeedbackProps) => {
  return (
    <motion.div
      className="success-card p-6 mt-6"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      {/* Header */}
      <motion.div
        className="flex items-center gap-3 mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <motion.div
          className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center text-success"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.5 }}
        >
          <CheckCircle className="w-6 h-6" />
        </motion.div>
        <div>
          <h3 className="font-semibold text-success flex items-center gap-2">
            Excellent!
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.span>
          </h3>
          <p className="text-sm text-muted-foreground">You got it right</p>
        </div>
      </motion.div>

      {/* Explanation */}
      <motion.div
        className="bg-success/5 rounded-xl p-4 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-sm text-foreground leading-relaxed">{explanation}</p>
      </motion.div>

      {/* Continue Button */}
      <motion.button
        onClick={onContinue}
        className="btn-success w-full flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Continue
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <ArrowRight className="w-5 h-5" />
        </motion.span>
      </motion.button>
    </motion.div>
  );
};

export default SuccessFeedback;
