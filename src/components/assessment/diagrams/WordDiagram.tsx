import { motion } from 'framer-motion';

interface WordDiagramProps {
  step: number;
  word: string;
  meaning: string;
  options: { word: string; meaning: string; isCorrect?: boolean; isSynonym?: boolean }[];
  isAntonym?: boolean;
}

const WordDiagram = ({ 
  step, 
  word, 
  meaning, 
  options,
  isAntonym = false 
}: WordDiagramProps) => {
  return (
    <div className="diagram-container">
      <div className="diagram-scene flex flex-col items-center justify-center bg-gradient-to-br from-card to-background-secondary p-6">
        {/* Main Word */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <div className="text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-primary mb-2"
              animate={{ 
                textShadow: step >= 1 
                  ? ['0 0 10px hsl(var(--primary) / 0.3)', '0 0 20px hsl(var(--primary) / 0.5)', '0 0 10px hsl(var(--primary) / 0.3)']
                  : 'none'
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {word}
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 1 ? 1 : 0 }}
              transition={{ delay: 0.5 }}
            >
              {meaning}
            </motion.p>
          </div>
        </motion.div>

        {/* Relationship indicator */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 2 ? 1 : 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="h-0.5 w-12 bg-border" />
          <span className={`px-4 py-2 rounded-full font-bold text-sm ${
            isAntonym 
              ? 'bg-warning/20 text-warning' 
              : 'bg-success/20 text-success'
          }`}>
            {isAntonym ? 'OPPOSITE →' : 'SIMILAR →'}
          </span>
          <div className="h-0.5 w-12 bg-border" />
        </motion.div>

        {/* Options Grid */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          {options.map((option, index) => (
            <motion.div
              key={option.word}
              className={`p-4 rounded-xl border-2 transition-all ${
                step >= 3 && option.isCorrect
                  ? 'bg-success/10 border-success shadow-lg'
                  : step >= 3 && option.isSynonym && isAntonym
                  ? 'bg-muted/50 border-muted-foreground/20 opacity-50'
                  : 'bg-card border-border hover:border-primary/50'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={step < 3 ? { scale: 1.05 } : {}}
            >
              <div className="text-center">
                <p className={`font-bold ${
                  step >= 3 && option.isCorrect ? 'text-success' : 'text-foreground'
                }`}>
                  {option.word}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {option.meaning}
                </p>
                
                {/* Indicator icons */}
                {step >= 3 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: 'spring' }}
                    className="mt-2"
                  >
                    {option.isCorrect ? (
                      <span className="text-2xl">✓</span>
                    ) : option.isSynonym && isAntonym ? (
                      <span className="text-lg text-muted-foreground">≈ synonym</span>
                    ) : null}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Word root explanation */}
        {step >= 1 && (
          <motion.div
            className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20 max-w-md w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <p className="text-sm text-center">
              <span className="font-bold text-primary">Word Root:</span>{' '}
              <span className="text-muted-foreground">
                {word === 'EPHEMERAL' && '"ephemeros" (Greek) = lasting only a day'}
                {word === 'BENEVOLENT' && '"bene" (Latin) = good + "volent" = wishing'}
              </span>
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default WordDiagram;
