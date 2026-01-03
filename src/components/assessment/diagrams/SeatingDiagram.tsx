import { motion } from 'framer-motion';

interface SeatingDiagramProps {
  step: number;
}

const SeatingDiagram = ({ step }: SeatingDiagramProps) => {
  // Ram: 12th from left, Shyam: 17th from right
  // After swap, Ram is 22nd from left
  // Total = 12 + 22 - 1 = 33 (Ram moved to Shyam's position)

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-background to-green-light/20" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Row Visualization - Before */}
          <motion.div
            className="w-full max-w-md mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-xs text-center text-muted-foreground mb-2">Before Interchange</div>
            <div className="relative h-12 bg-gradient-to-r from-muted/50 via-card to-muted/50 rounded-xl border border-border">
              {/* Left indicator */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">←L</div>
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">R→</div>
              
              {/* Ram position (12th from left) */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center"
                style={{ left: '25%' }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">R</div>
                <div className="text-xs mt-1 whitespace-nowrap">12th</div>
              </motion.div>
              
              {/* Shyam position (22nd from left = 17th from right for 38 total, but 33 total for this problem) */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center"
                style={{ left: '60%' }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold">S</div>
                <div className="text-xs mt-1 whitespace-nowrap">17th↓</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
            transition={{ delay: 0.5 }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40">
              <path d="M 15 10 C 5 20, 5 30, 15 35 M 12 32 L 15 35 L 18 32" stroke="hsl(var(--green-primary))" strokeWidth="2" fill="none" />
              <path d="M 25 10 C 35 20, 35 30, 25 35 M 22 32 L 25 35 L 28 32" stroke="hsl(var(--green-primary))" strokeWidth="2" fill="none" />
            </svg>
            <div className="text-xs text-green-primary text-center">Swap</div>
          </motion.div>

          {/* Row Visualization - After */}
          <motion.div
            className="w-full max-w-md mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-xs text-center text-muted-foreground mb-2">After Interchange</div>
            <div className="relative h-12 bg-gradient-to-r from-muted/50 via-card to-muted/50 rounded-xl border border-border">
              {/* Left indicator */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">←L</div>
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">R→</div>
              
              {/* Shyam now at Ram's old position */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center"
                style={{ left: '25%' }}
                initial={{ scale: 0 }}
                animate={{ scale: step >= 1 ? 1 : 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold">S</div>
                <div className="text-xs mt-1 whitespace-nowrap">12th</div>
              </motion.div>
              
              {/* Ram now at 22nd from left */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center"
                style={{ left: '60%' }}
                initial={{ scale: 0 }}
                animate={{ scale: step >= 1 ? 1 : 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">R</div>
                <div className="text-xs mt-1 whitespace-nowrap text-green-primary font-bold">22nd←</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Calculation */}
          <motion.div
            className="p-4 rounded-xl bg-card/90 border border-border text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3 }}
            transition={{ delay: 1 }}
          >
            <div className="text-sm text-muted-foreground mb-2">
              Ram moved from 12th to 22nd position (Shyam's spot)
            </div>
            <div className="text-sm font-mono mb-2">
              Total = Position₁ + Position₂ - 1
            </div>
            <div className="text-sm font-mono">
              Total = 12 + 22 - 1
            </div>
            <motion.div
              className="text-2xl font-bold text-green-primary mt-2"
              animate={step >= 3 ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              = 33 students
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SeatingDiagram;
