import { motion } from 'framer-motion';

interface AverageDiagramProps {
  step: number;
}

const AverageDiagram = ({ step }: AverageDiagramProps) => {
  const count = 5;
  const average = 20;
  const newCount = 4;
  const newAverage = 18;
  const originalSum = count * average; // 100
  const newSum = newCount * newAverage; // 72
  const excludedNumber = originalSum - newSum; // 28

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative bg-gradient-to-br from-green-soft/20 via-background to-green-light/20">
        {/* Formula */}
        <motion.div
          className="absolute top-3 left-3 p-2 rounded-lg bg-card/95 border border-green-primary text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="font-bold text-green-primary">Sum = Avg × Count</div>
        </motion.div>

        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Original Set */}
          <motion.div
            className="mb-3 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-xs text-muted-foreground mb-1">Original: 5 numbers, Avg = 20</div>
            <div className="flex gap-1 justify-center">
              {Array.from({ length: count }).map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                    i === count - 1 && step >= 2 ? 'bg-red-500 text-white' : 'bg-green-primary/20 border border-green-primary'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 * i }}
                >
                  {i === count - 1 && step >= 3 ? excludedNumber : '?'}
                </motion.div>
              ))}
            </div>
            <div className="text-xs mt-1">Sum = 5 × 20 = <span className="font-bold text-green-primary">{originalSum}</span></div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            className="text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
          >
            ↓
          </motion.div>

          {/* New Set */}
          <motion.div
            className="mb-3 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
          >
            <div className="text-xs text-muted-foreground mb-1">After removing one: 4 numbers, Avg = 18</div>
            <div className="flex gap-1 justify-center">
              {Array.from({ length: newCount }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500 flex items-center justify-center font-bold text-xs"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + 0.1 * i }}
                >
                  ?
                </motion.div>
              ))}
            </div>
            <div className="text-xs mt-1">Sum = 4 × 18 = <span className="font-bold text-blue-500">{newSum}</span></div>
          </motion.div>

          {/* Calculation */}
          <motion.div
            className="p-3 rounded-xl bg-card/90 border border-border text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3 }}
          >
            <div className="text-xs text-muted-foreground">Excluded = Original - New</div>
            <div className="text-xs">= {originalSum} - {newSum}</div>
            <motion.div
              className="text-xl font-bold text-green-primary mt-1"
              animate={step >= 3 ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              = {excludedNumber}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AverageDiagram;
