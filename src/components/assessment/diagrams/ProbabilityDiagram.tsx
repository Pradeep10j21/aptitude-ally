import { motion } from 'framer-motion';

interface ProbabilityDiagramProps {
  step: number;
}

const ProbabilityDiagram = ({ step }: ProbabilityDiagramProps) => {
  const red = 4;
  const blue = 6;
  const total = red + blue;

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative bg-gradient-to-br from-green-soft/20 via-background to-green-light/20">
        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Bag - Always visible */}
          <motion.div
            className="relative mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-28 h-32 bg-amber-700 rounded-b-2xl rounded-t-lg relative overflow-hidden border-4 border-amber-800">
              <div className="absolute top-0 left-0 right-0 h-3 bg-amber-800" />
              
              <div className="p-2 grid grid-cols-2 gap-1 mt-3">
                {/* Red balls */}
                {Array.from({ length: red }).map((_, i) => (
                  <motion.div
                    key={`red-${i}`}
                    className="w-6 h-6 rounded-full bg-red-500 border-2 border-red-600 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <span className="text-xs text-white font-bold">R</span>
                  </motion.div>
                ))}
                {/* Blue balls */}
                {Array.from({ length: blue }).map((_, i) => (
                  <motion.div
                    key={`blue-${i}`}
                    className="w-6 h-6 rounded-full bg-blue-500 border-2 border-blue-600 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 + 0.1 * i }}
                  >
                    <span className="text-xs text-white font-bold">B</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Count - Always visible */}
          <motion.div
            className="flex gap-2 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="px-2 py-1 rounded bg-red-500/20 border border-red-500 text-center">
              <div className="text-sm font-bold text-red-500">{red}</div>
              <div className="text-xs text-muted-foreground">Red</div>
            </div>
            <div className="text-lg self-center">+</div>
            <div className="px-2 py-1 rounded bg-blue-500/20 border border-blue-500 text-center">
              <div className="text-sm font-bold text-blue-500">{blue}</div>
              <div className="text-xs text-muted-foreground">Blue</div>
            </div>
            <div className="text-lg self-center">=</div>
            <div className="px-2 py-1 rounded bg-muted border border-border text-center">
              <div className="text-sm font-bold">{total}</div>
              <div className="text-xs text-muted-foreground">Total</div>
            </div>
          </motion.div>

          {/* Calculation - Step 1 */}
          {step >= 1 && (
            <motion.div
              className="p-3 rounded-xl bg-card/90 border border-border text-center mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-xs text-muted-foreground mb-1">P(Red) = Favorable / Total</div>
              <div className="text-sm font-mono">= <span className="text-red-500">{red}</span> / {total}</div>
              {step >= 2 && (
                <motion.div
                  className="text-lg font-bold text-green-primary mt-1"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  = 2/5
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Probability Bar - Step 2 */}
          {step >= 2 && (
            <motion.div
              className="w-full max-w-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="h-5 rounded-full overflow-hidden flex">
                <motion.div
                  className="bg-red-500 flex items-center justify-center text-xs text-white font-bold"
                  initial={{ width: 0 }}
                  animate={{ width: `${(red / total) * 100}%` }}
                  transition={{ duration: 0.5 }}
                >
                  40%
                </motion.div>
                <motion.div
                  className="bg-blue-500 flex items-center justify-center text-xs text-white font-bold"
                  initial={{ width: 0 }}
                  animate={{ width: `${(blue / total) * 100}%` }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  60%
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProbabilityDiagram;