import { motion } from 'framer-motion';
import { Calculator, Brain, BookOpen, Search } from 'lucide-react';
import { Question } from '@/types/assessment';
import { getCategoryLabel, getDifficultyColor } from '@/data/questions';

interface QuestionCardProps {
  question: Question;
  isReinforcement?: boolean;
}

const QuestionCard = ({ question, isReinforcement = false }: QuestionCardProps) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'quantitative':
        return Calculator;
      case 'logical':
        return Brain;
      case 'verbal':
        return BookOpen;
      case 'analytical':
        return Search;
      default:
        return Brain;
    }
  };

  const Icon = getCategoryIcon(question.category);

  return (
    <motion.div
      className="glass-card-elevated p-6 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      {/* Reinforcement Badge */}
      {isReinforcement && (
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-learning/10 text-learning text-sm font-medium mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ✨
          </motion.span>
          Practice Question - Reinforce Your Learning
        </motion.div>
      )}

      {/* Category and Difficulty Badges */}
      <div className="flex items-center gap-3 mb-4">
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Icon className="w-4 h-4" />
          {getCategoryLabel(question.category)}
        </motion.div>

        <motion.div
          className={`inline-flex items-center px-3 py-1.5 rounded-full bg-muted text-sm font-medium capitalize ${getDifficultyColor(question.difficulty)}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
        >
          {question.difficulty}
        </motion.div>
      </div>

      {/* Question Text */}
      <motion.h2
        className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {question.question}
      </motion.h2>
    </motion.div>
  );
};

export default QuestionCard;
