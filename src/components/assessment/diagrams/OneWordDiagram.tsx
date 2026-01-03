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
      <div className="diagram-scene relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-background to-green-light/20" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Definition */}
          <motion.div
            className="p-4 rounded-xl bg-card/90 border-2 border-green-primary mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-xs text-muted-foreground mb-1">Find one word for:</div>
            <div className="text-lg font-bold">"A person who knows many languages"</div>
          </motion.div>

          {/* Options Grid */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-md mb-4">
            {options.map((opt, i) => (
              <motion.div
                key={opt.word}
                className={`p-3 rounded-xl border-2 ${
                  opt.correct && step >= 2 
                    ? 'bg-success/10 border-success' 
                    : step >= 2 
                      ? 'bg-muted/50 border-muted opacity-50'
                      : 'bg-card/90 border-border'
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + 0.1 * i }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{opt.icon}</span>
                  <span className="font-bold">{opt.word}</span>
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

          {/* Word Breakdown */}
          <motion.div
            className="p-4 rounded-xl bg-accent/10 border border-accent/30 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-sm font-bold text-accent mb-2">Word Etymology</div>
            <div className="flex items-center justify-center gap-4">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <div className="font-bold text-blue-600 dark:text-blue-400">POLY</div>
                <div className="text-xs text-muted-foreground">= Many</div>
              </div>
              <div className="text-xl">+</div>
              <div className="p-2 rounded-lg bg-amber-500/20">
                <div className="font-bold text-amber-600 dark:text-amber-400">GLOT</div>
                <div className="text-xs text-muted-foreground">= Tongue/Language</div>
              </div>
              <div className="text-xl">=</div>
              <div className="p-2 rounded-lg bg-green-primary/20">
                <div className="font-bold text-green-primary">POLYGLOT</div>
                <div className="text-xs text-muted-foreground">= Many Languages</div>
              </div>
            </div>
          </motion.div>

          {/* Fun Fact */}
          <motion.div
            className="mt-4 text-center text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 3 ? 1 : 0 }}
            transition={{ delay: 0.9 }}
          >
            🌟 Famous polyglots: Pope John Paul II (8 languages), Cleopatra (9 languages)
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OneWordDiagram;
