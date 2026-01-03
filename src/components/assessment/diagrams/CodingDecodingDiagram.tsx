import { motion } from 'framer-motion';

interface CodingDecodingDiagramProps {
  step: number;
}

const CodingDecodingDiagram = ({ step }: CodingDecodingDiagramProps) => {
  const original = 'CLOUD';
  const coded = 'DMPVE';
  const word = 'STORM';
  const answer = 'TUPSN';

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative bg-gradient-to-br from-green-soft/20 via-background to-green-light/20">
        {/* Pattern Hint */}
        <motion.div
          className="absolute bottom-3 left-3 p-2 rounded-lg bg-card/80 border border-muted text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 1 ? 1 : 0 }}
        >
          S→T, T→U, etc. (+1)
        </motion.div>

        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Given Pattern */}
          <motion.div
            className="mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-xs text-muted-foreground mb-2">Given Pattern</div>
            <div className="flex gap-1 justify-center mb-1">
              {original.split('').map((letter, i) => (
                <motion.div
                  key={i}
                  className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500 flex items-center justify-center font-bold text-sm text-blue-600 dark:text-blue-400"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 * i }}
                >
                  {letter}
                </motion.div>
              ))}
            </div>
            <div className="text-xs text-green-primary mb-1">↓ +1</div>
            <div className="flex gap-1 justify-center">
              {coded.split('').map((letter, i) => (
                <motion.div
                  key={i}
                  className="w-8 h-8 rounded-lg bg-green-primary/20 border border-green-primary flex items-center justify-center font-bold text-sm text-green-primary"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 + 0.1 * i }}
                >
                  {letter}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Apply to STORM */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3, y: 0 }}
          >
            <div className="text-xs text-muted-foreground text-center mb-2">Apply to {word}</div>
            <div className="flex gap-2 justify-center">
              {word.split('').map((letter, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: step >= 2 ? 1 : 0 }}
                  transition={{ delay: 0.5 + 0.1 * i }}
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500 flex items-center justify-center font-bold text-sm text-amber-600 dark:text-amber-400">
                    {letter}
                  </div>
                  <span className="text-xs text-green-primary">↓</span>
                  <div className="w-8 h-8 rounded-lg bg-green-primary flex items-center justify-center font-bold text-sm text-primary-foreground">
                    {answer[i]}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Answer */}
          <motion.div
            className="p-3 rounded-xl bg-green-primary/10 border-2 border-green-primary text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: step >= 3 ? 1 : 0.3, scale: step >= 3 ? 1 : 0.9 }}
          >
            <div className="text-xs text-muted-foreground mb-1">Answer</div>
            <motion.div
              className="text-xl font-bold text-green-primary tracking-widest"
              animate={step >= 3 ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {answer}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CodingDecodingDiagram;
