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
      <div className="diagram-scene relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-background to-green-light/20" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Given Code */}
          <motion.div
            className="mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-sm text-muted-foreground mb-2">Given Pattern</div>
            <div className="flex gap-2 justify-center mb-2">
              {original.split('').map((letter, i) => (
                <motion.div
                  key={i}
                  className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500 flex items-center justify-center font-bold text-blue-600 dark:text-blue-400"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 * i }}
                >
                  {letter}
                </motion.div>
              ))}
            </div>
            <div className="flex gap-2 justify-center">
              {coded.split('').map((letter, i) => (
                <motion.div
                  key={i}
                  className="w-10 h-10 rounded-lg bg-green-primary/20 border border-green-primary flex items-center justify-center font-bold text-green-primary"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + 0.1 * i }}
                >
                  {letter}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pattern Discovery */}
          <motion.div
            className="p-3 rounded-xl bg-card/90 border border-border mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-xs text-muted-foreground text-center mb-2">Pattern: Each letter shifts +1</div>
            <div className="flex justify-center gap-4 text-sm">
              {original.split('').map((letter, i) => (
                <div key={i} className="text-center">
                  <span className="text-blue-500">{letter}</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="text-green-primary">{coded[i]}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Apply to STORM */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-sm text-muted-foreground text-center mb-2">Apply to STORM</div>
            <div className="flex gap-2 justify-center mb-2">
              {word.split('').map((letter, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: step >= 2 ? 1 : 0 }}
                  transition={{ delay: 0.9 + 0.1 * i }}
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500 flex items-center justify-center font-bold text-amber-600 dark:text-amber-400">
                    {letter}
                  </div>
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <path d="M 10 2 L 10 14 M 6 10 L 10 14 L 14 10" stroke="hsl(var(--green-primary))" strokeWidth="2" fill="none" />
                  </svg>
                  <div className="w-10 h-10 rounded-lg bg-green-primary flex items-center justify-center font-bold text-primary-foreground">
                    {answer[i]}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Answer */}
          <motion.div
            className="p-4 rounded-xl bg-green-primary/10 border-2 border-green-primary text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: step >= 3 ? 1 : 0.3, scale: step >= 3 ? 1 : 0.9 }}
            transition={{ delay: 1.2 }}
          >
            <div className="text-sm text-muted-foreground mb-1">Answer</div>
            <motion.div
              className="text-2xl font-bold text-green-primary tracking-widest"
              animate={step >= 3 ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {answer}
            </motion.div>
          </motion.div>

          {/* Alphabet Reference */}
          <motion.div
            className="absolute bottom-3 left-3 p-2 rounded-lg bg-card/80 border border-muted text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0 }}
          >
            <div className="text-muted-foreground">S(19)→T(20), T(20)→U(21), etc.</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CodingDecodingDiagram;
