import { motion } from 'framer-motion';

interface AverageDiagramProps {
  step: number;
  count?: number;
  average?: number;
  newCount?: number;
  newAverage?: number;
}

const AverageDiagram = ({ 
  step, 
  count = 5, 
  average = 20, 
  newCount = 4, 
  newAverage = 18 
}: AverageDiagramProps) => {
  const originalSum = count * average;
  const newSum = newCount * newAverage;
  const excludedNumber = originalSum - newSum;

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-background to-green-light/20" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Original Set Visualization */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-sm text-center text-muted-foreground mb-2">Original: {count} numbers, Average = {average}</div>
            <div className="flex gap-2 justify-center">
              {Array.from({ length: count }).map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${
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
            <motion.div
              className="text-center mt-2 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 0 ? 1 : 0 }}
            >
              Sum = {count} × {average} = <span className="font-bold text-green-primary">{originalSum}</span>
            </motion.div>
          </motion.div>

          {/* Arrow showing exclusion */}
          <motion.div
            className="my-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0 }}
            transition={{ delay: 0.5 }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40">
              <path d="M 20 5 L 20 30 M 12 22 L 20 30 L 28 22" stroke="hsl(var(--green-primary))" strokeWidth="3" fill="none" />
            </svg>
          </motion.div>

          {/* New Set (after exclusion) */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-sm text-center text-muted-foreground mb-2">After removing one: {newCount} numbers, Average = {newAverage}</div>
            <div className="flex gap-2 justify-center">
              {Array.from({ length: newCount }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500 flex items-center justify-center font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + 0.1 * i }}
                >
                  ?
                </motion.div>
              ))}
            </div>
            <motion.div
              className="text-center mt-2 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 1 ? 1 : 0 }}
            >
              Sum = {newCount} × {newAverage} = <span className="font-bold text-blue-500">{newSum}</span>
            </motion.div>
          </motion.div>

          {/* Calculation */}
          <motion.div
            className="p-4 rounded-xl bg-card/90 border border-border text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3, scale: step >= 2 ? 1 : 0.9 }}
            transition={{ delay: 0.9 }}
          >
            <div className="text-sm text-muted-foreground mb-2">Excluded Number = Original Sum - New Sum</div>
            <div className="text-sm">= {originalSum} - {newSum}</div>
            <motion.div
              className="text-2xl font-bold text-green-primary mt-2"
              animate={step >= 3 ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              = {excludedNumber}
            </motion.div>
          </motion.div>

          {/* Verification */}
          <motion.div
            className="mt-4 p-2 rounded-lg bg-success/10 border border-success text-xs text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 3 ? 1 : 0 }}
            transition={{ delay: 1.1 }}
          >
            Verify: ({originalSum} - {excludedNumber}) ÷ {newCount} = {newSum} ÷ {newCount} = {newAverage} ✓
          </motion.div>
        </div>

        {/* Formula Box */}
        <motion.div
          className="absolute top-3 left-3 p-2 rounded-lg bg-card/95 border border-green-primary text-xs"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="font-bold text-green-primary">Sum = Average × Count</div>
        </motion.div>
      </div>
    </div>
  );
};

export default AverageDiagram;
