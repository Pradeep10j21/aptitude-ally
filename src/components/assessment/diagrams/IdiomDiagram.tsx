import { motion } from 'framer-motion';

interface IdiomDiagramProps {
  step: number;
}

const IdiomDiagram = ({ step }: IdiomDiagramProps) => {
  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Night Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-600" />
        
        {/* Stars */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ left: `${10 + Math.random() * 80}%`, top: `${5 + Math.random() * 30}%` }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2 + Math.random(), repeat: Infinity }}
          />
        ))}

        {/* Moon */}
        <motion.div
          className="absolute top-4 right-6 w-8 h-8 rounded-full bg-yellow-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ boxShadow: '0 0 20px rgba(253, 224, 71, 0.4)' }}
        />

        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Desk Scene - Always visible */}
          <motion.div
            className="relative mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-48 h-16 bg-amber-700 rounded-b flex items-center justify-center gap-4 pt-2">
              {/* Oil Lamp */}
              <motion.div className="flex flex-col items-center">
                <motion.div
                  className="w-4 h-4 rounded-full bg-yellow-500"
                  animate={{ boxShadow: ['0 0 8px #fbbf24', '0 0 16px #fbbf24', '0 0 8px #fbbf24'] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <div className="w-3 h-6 bg-amber-600 rounded-b" />
                <div className="text-xs mt-1 text-amber-200">🪔</div>
              </motion.div>
              
              {/* Books - Step 1 */}
              {step >= 1 && (
                <motion.div
                  className="text-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  📚
                </motion.div>
              )}
              
              {/* Person - Step 1 */}
              {step >= 1 && (
                <motion.div
                  className="text-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  👨‍💼
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Time - Always visible */}
          <motion.div
            className="flex items-center gap-1 mb-3 px-3 py-1 rounded-full bg-slate-700/80 border border-slate-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="text-lg">🕛</span>
            <span className="text-white text-xs">Midnight</span>
          </motion.div>

          {/* Idiom Breakdown - Step 2 */}
          {step >= 2 && (
            <motion.div
              className="p-3 rounded-xl bg-card/95 border border-border text-center max-w-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="font-bold mb-1">"Burn the Midnight Oil"</div>
              <div className="text-xs text-muted-foreground mb-2">
                Historical: People used oil lamps to work at night
              </div>
              {step >= 3 && (
                <motion.div
                  className="p-2 rounded-lg bg-green-primary/10 border border-green-primary"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <div className="text-xs font-bold text-green-primary">
                    = Work or study late into the night
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Example - Step 3 */}
          {step >= 3 && (
            <motion.div
              className="mt-2 text-xs text-white/80 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              "She burned the midnight oil for her exam."
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IdiomDiagram;