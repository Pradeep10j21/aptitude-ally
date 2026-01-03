import { motion } from 'framer-motion';

interface InferenceDiagramProps {
  step: number;
}

const InferenceDiagram = ({ step }: InferenceDiagramProps) => {
  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Evening Sky */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-400 via-orange-300 to-yellow-200" />
        
        {/* Sun */}
        <motion.div
          className="absolute bottom-16 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-b from-yellow-300 to-orange-500"
          style={{ boxShadow: '0 0 40px rgba(251, 146, 60, 0.5)' }}
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Horizon */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-700 to-green-600" />

        {/* Birds */}
        <motion.div
          className="absolute top-12 right-1/4"
          animate={{ x: [-60, 0], y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <svg width="40" height="20" viewBox="0 0 40 20">
            <path d="M 0 10 Q 5 3, 10 10 M 10 10 Q 15 3, 20 10 M 20 10 Q 25 3, 30 10 M 30 10 Q 35 3, 40 10" 
              stroke="#333" strokeWidth="1.5" fill="none" />
          </svg>
        </motion.div>

        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Clues - Always visible */}
          <motion.div
            className="p-3 rounded-xl bg-card/95 border border-border mb-3 text-center max-w-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-xs italic mb-2">
              "The sky had turned <span className="text-orange-500 font-bold">orange</span>, 
              and birds were <span className="text-green-primary font-bold">returning to nests</span>."
            </div>
            <div className="text-xs text-muted-foreground">What time of day?</div>
          </motion.div>

          {/* Clue Analysis - Step 1 */}
          {step >= 1 && (
            <motion.div
              className="flex gap-2 mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="p-2 rounded-lg bg-orange-500/20 border border-orange-500 text-center">
                <div className="text-xl mb-1">🌅</div>
                <div className="text-xs font-bold">Clue 1</div>
                <div className="text-xs text-orange-500">Orange sky</div>
              </div>
              <div className="p-2 rounded-lg bg-green-primary/20 border border-green-primary text-center">
                <div className="text-xl mb-1">🐦</div>
                <div className="text-xs font-bold">Clue 2</div>
                <div className="text-xs text-green-primary">Birds returning</div>
              </div>
            </motion.div>
          )}

          {/* Logic - Step 2 */}
          {step >= 2 && (
            <motion.div
              className="p-2 rounded-lg bg-accent/10 border border-accent/30 text-center mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-xs">
                Orange sky + Birds going home = <span className="font-bold text-accent">EVENING</span>
              </div>
            </motion.div>
          )}

          {/* Answer - Step 3 */}
          {step >= 3 && (
            <motion.div
              className="px-4 py-2 rounded-xl bg-green-primary text-primary-foreground font-bold"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                🌇 Evening
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InferenceDiagram;