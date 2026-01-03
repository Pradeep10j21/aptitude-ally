import { motion } from 'framer-motion';

interface SeatingDiagramProps {
  step: number;
}

const SeatingDiagram = ({ step }: SeatingDiagramProps) => {
  return (
    <div className="diagram-container">
      <div className="diagram-scene relative bg-gradient-to-br from-green-soft/20 via-background to-green-light/20">
        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Before Swap */}
          <motion.div
            className="w-full max-w-sm mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-xs text-center text-muted-foreground mb-1">Before Interchange</div>
            <div className="relative h-10 bg-gradient-to-r from-muted/50 via-card to-muted/50 rounded-lg border border-border">
              <div className="absolute left-1 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">L←</div>
              <div className="absolute right-1 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">→R</div>
              
              {/* Ram */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2"
                style={{ left: '25%' }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">R</div>
                <div className="text-xs text-center mt-0.5">12th</div>
              </motion.div>
              
              {/* Shyam */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2"
                style={{ left: '60%' }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold">S</div>
                <div className="text-xs text-center mt-0.5">17th↓</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Swap Arrow */}
          <motion.div
            className="mb-3 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
          >
            <span className="text-lg">⇅</span>
            <div className="text-xs text-green-primary">Swap</div>
          </motion.div>

          {/* After Swap */}
          <motion.div
            className="w-full max-w-sm mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
          >
            <div className="text-xs text-center text-muted-foreground mb-1">After Interchange</div>
            <div className="relative h-10 bg-gradient-to-r from-muted/50 via-card to-muted/50 rounded-lg border border-border">
              <div className="absolute left-1 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">L←</div>
              <div className="absolute right-1 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">→R</div>
              
              {/* Shyam at Ram's old spot */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2"
                style={{ left: '25%' }}
                initial={{ scale: 0 }}
                animate={{ scale: step >= 1 ? 1 : 0 }}
              >
                <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold">S</div>
                <div className="text-xs text-center mt-0.5">12th</div>
              </motion.div>
              
              {/* Ram at 22nd */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2"
                style={{ left: '60%' }}
                initial={{ scale: 0 }}
                animate={{ scale: step >= 1 ? 1 : 0 }}
              >
                <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">R</div>
                <div className="text-xs text-center mt-0.5 text-green-primary font-bold">22nd←</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Calculation */}
          <motion.div
            className="p-3 rounded-xl bg-card/90 border border-border text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3 }}
          >
            <div className="text-xs text-muted-foreground mb-1">
              Ram: 12th → 22nd (Shyam's spot)
            </div>
            <div className="text-xs font-mono mb-1">Total = Pos₁ + Pos₂ - 1</div>
            <div className="text-xs font-mono">= 12 + 22 - 1</div>
            <motion.div
              className="text-xl font-bold text-green-primary mt-1"
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
