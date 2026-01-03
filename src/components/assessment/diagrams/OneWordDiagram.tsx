import { motion } from 'framer-motion';

interface OneWordDiagramProps {
  step: number;
}

const OneWordDiagram = ({ step }: OneWordDiagramProps) => {
  const options = [
    { word: 'Linguist', meaning: 'Language expert', icon: '👨‍🏫', correct: false },
    { word: 'Polyglot', meaning: 'Knows many languages', icon: '🌍', correct: true },
    { word: 'Interpreter', meaning: 'Translator', icon: '🗣️', correct: false },
    { word: 'Philologist', meaning: 'Studies language history', icon: '📚', correct: false },
  ];

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative bg-gradient-to-br from-green-soft/20 via-background to-green-light/20">
        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Definition - Always visible */}
          <motion.div
            className="p-3 rounded-xl bg-card/90 border-2 border-green-primary mb-4 text-center max-w-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-xs text-muted-foreground mb-1">Find one word for:</div>
            <div className="text-sm font-bold">"A person who knows many languages"</div>
          </motion.div>

          {/* Options - Always visible */}
          <div className="grid grid-cols-2 gap-2 w-full max-w-sm mb-3">
            {options.map((opt, i) => (
              <motion.div
                key={opt.word}
                className={`p-2 rounded-lg border-2 ${
                  opt.correct && step >= 2 
                    ? 'bg-success/10 border-success' 
                    : step >= 2 
                      ? 'bg-muted/50 border-muted opacity-50'
                      : 'bg-card/90 border-border'
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + 0.1 * i }}
              >
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-lg">{opt.icon}</span>
                  <span className="font-bold text-sm">{opt.word}</span>
                  {opt.correct && step >= 2 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-success"
                    >
                      ✓
                    </motion.span>
                  )}
                </div>
                <div className="text-xs text-muted-foreground">{opt.meaning}</div>
              </motion.div>
            ))}
          </div>

          {/* Etymology - Step 1 */}
          {step >= 1 && (
            <motion.div
              className="p-3 rounded-xl bg-accent/10 border border-accent/30 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-xs font-bold text-accent mb-2">Word Etymology</div>
              <div className="flex items-center justify-center gap-2">
                <div className="p-1 rounded bg-blue-500/20">
                  <div className="font-bold text-xs text-blue-600 dark:text-blue-400">POLY</div>
                  <div className="text-xs text-muted-foreground">= Many</div>
                </div>
                <div className="text-sm">+</div>
                <div className="p-1 rounded bg-amber-500/20">
                  <div className="font-bold text-xs text-amber-600 dark:text-amber-400">GLOT</div>
                  <div className="text-xs text-muted-foreground">= Language</div>
                </div>
                <div className="text-sm">=</div>
                <div className="p-1 rounded bg-green-primary/20">
                  <div className="font-bold text-xs text-green-primary">POLYGLOT</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Fun Fact - Step 3 */}
          {step >= 3 && (
            <motion.div
              className="mt-2 text-xs text-muted-foreground text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              🌟 Pope John Paul II spoke 8 languages!
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OneWordDiagram;