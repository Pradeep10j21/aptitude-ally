import { motion } from 'framer-motion';

interface InferenceDiagramProps {
  step: number;
}

const InferenceDiagram = ({ step }: InferenceDiagramProps) => {
  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Sky Gradient - Evening */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-400 via-orange-300 to-yellow-200" />
        
        {/* Sun setting */}
        <motion.div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-b from-yellow-300 to-orange-500"
          style={{ boxShadow: '0 0 60px rgba(251, 146, 60, 0.6)' }}
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Horizon */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-700 to-green-600" />

        {/* Birds flying home */}
        <motion.div
          className="absolute top-16 right-1/4"
          animate={{ x: [-100, 0], y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <svg width="60" height="30" viewBox="0 0 60 30">
            <path d="M 0 15 Q 10 5, 15 15 M 15 15 Q 20 5, 30 15 M 30 15 Q 40 5, 45 15 M 45 15 Q 50 5, 60 15" 
              stroke="#333" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-24 right-1/3"
          animate={{ x: [-80, 0], y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        >
          <svg width="40" height="20" viewBox="0 0 40 20">
            <path d="M 0 10 Q 8 2, 12 10 M 12 10 Q 16 2, 20 10 M 20 10 Q 28 2, 32 10 M 32 10 Q 36 2, 40 10" 
              stroke="#333" strokeWidth="1.5" fill="none" />
          </svg>
        </motion.div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Clues Box */}
          <motion.div
            className="p-4 rounded-xl bg-card/95 border border-border mb-4 text-center max-w-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-sm italic mb-3">
              "The sky had turned <span className="text-orange-500 font-bold">orange</span>, 
              and birds were <span className="text-green-primary font-bold">returning to their nests</span>."
            </div>
            <div className="text-xs text-muted-foreground">What time of day is it?</div>
          </motion.div>

          {/* Clue Analysis */}
          <motion.div
            className="grid grid-cols-2 gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
            transition={{ delay: 0.3 }}
          >
            <div className="p-3 rounded-xl bg-orange-500/20 border border-orange-500 text-center">
              <div className="text-2xl mb-1">🌅</div>
              <div className="text-sm font-bold">Clue 1</div>
              <div className="text-xs text-muted-foreground">Orange sky</div>
              <div className="text-xs text-orange-500">= Sunrise/Sunset</div>
            </div>
            <div className="p-3 rounded-xl bg-green-primary/20 border border-green-primary text-center">
              <div className="text-2xl mb-1">🐦</div>
              <div className="text-sm font-bold">Clue 2</div>
              <div className="text-xs text-muted-foreground">Birds returning</div>
              <div className="text-xs text-green-primary">= Evening time</div>
            </div>
          </motion.div>

          {/* Logic */}
          <motion.div
            className="p-3 rounded-xl bg-accent/10 border border-accent/30 text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-sm">
              Orange sky + Birds going home = <span className="font-bold text-accent">EVENING</span>
            </div>
          </motion.div>

          {/* Answer */}
          <motion.div
            className="px-6 py-3 rounded-xl bg-green-primary text-primary-foreground font-bold text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: step >= 3 ? 1 : 0, scale: step >= 3 ? 1 : 0.9 }}
            transition={{ delay: 0.9 }}
          >
            <motion.div
              animate={step >= 3 ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              🌇 Evening
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InferenceDiagram;
