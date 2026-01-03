import { motion } from 'framer-motion';

interface ProbabilityDiagramProps {
  step: number;
  red?: number;
  blue?: number;
}

const ProbabilityDiagram = ({ step, red = 4, blue = 6 }: ProbabilityDiagramProps) => {
  const total = red + blue;
  const probability = red / total;
  const simplified = `${red / 2}/${total / 2}`;

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-background to-green-light/20" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Bag Visualization */}
          <motion.div
            className="relative mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Bag */}
            <div className="w-32 h-40 bg-amber-700 rounded-b-3xl rounded-t-lg relative overflow-hidden border-4 border-amber-800">
              <div className="absolute top-0 left-0 right-0 h-4 bg-amber-800" />
              
              {/* Balls inside */}
              <div className="p-2 grid grid-cols-2 gap-1 mt-4">
                {/* Red balls */}
                {Array.from({ length: red }).map((_, i) => (
                  <motion.div
                    key={`red-${i}`}
                    className="w-8 h-8 rounded-full bg-red-500 border-2 border-red-600 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 * i }}
                    style={{ boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.2)' }}
                  >
                    <span className="text-xs text-white font-bold">R</span>
                  </motion.div>
                ))}
                {/* Blue balls */}
                {Array.from({ length: blue }).map((_, i) => (
                  <motion.div
                    key={`blue-${i}`}
                    className="w-8 h-8 rounded-full bg-blue-500 border-2 border-blue-600 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + 0.1 * i }}
                    style={{ boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.2)' }}
                  >
                    <span className="text-xs text-white font-bold">B</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Count Summary */}
          <motion.div
            className="flex gap-4 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 0 ? 1 : 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="px-3 py-2 rounded-lg bg-red-500/20 border border-red-500 text-center">
              <div className="text-lg font-bold text-red-500">{red}</div>
              <div className="text-xs text-muted-foreground">Red</div>
            </div>
            <div className="text-xl font-bold self-center">+</div>
            <div className="px-3 py-2 rounded-lg bg-blue-500/20 border border-blue-500 text-center">
              <div className="text-lg font-bold text-blue-500">{blue}</div>
              <div className="text-xs text-muted-foreground">Blue</div>
            </div>
            <div className="text-xl font-bold self-center">=</div>
            <div className="px-3 py-2 rounded-lg bg-muted border border-border text-center">
              <div className="text-lg font-bold">{total}</div>
              <div className="text-xs text-muted-foreground">Total</div>
            </div>
          </motion.div>

          {/* Probability Calculation */}
          <motion.div
            className="p-4 rounded-xl bg-card/90 border border-border text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-sm text-muted-foreground mb-2">P(Red Ball) = Favorable / Total</div>
            <div className="text-lg font-mono">
              = <span className="text-red-500">{red}</span> / <span className="text-foreground">{total}</span>
            </div>
            <motion.div
              className="text-xl font-bold text-green-primary mt-2"
              animate={step >= 2 ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              = {simplified}
            </motion.div>
          </motion.div>

          {/* Visual Probability Bar */}
          <motion.div
            className="mt-4 w-full max-w-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 2 ? 1 : 0 }}
            transition={{ delay: 1 }}
          >
            <div className="h-6 rounded-full overflow-hidden flex">
              <motion.div
                className="bg-red-500 flex items-center justify-center text-xs text-white font-bold"
                initial={{ width: 0 }}
                animate={{ width: `${(red / total) * 100}%` }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                40%
              </motion.div>
              <motion.div
                className="bg-blue-500 flex items-center justify-center text-xs text-white font-bold"
                initial={{ width: 0 }}
                animate={{ width: `${(blue / total) * 100}%` }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                60%
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProbabilityDiagram;
