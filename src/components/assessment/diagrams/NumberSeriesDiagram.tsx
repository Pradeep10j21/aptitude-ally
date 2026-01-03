import { motion } from 'framer-motion';

interface NumberSeriesDiagramProps {
  step: number;
}

const NumberSeriesDiagram = ({ step }: NumberSeriesDiagramProps) => {
  const series = [2, 6, 12, 20, 30, 42];
  const differences = [4, 6, 8, 10, 12];

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-background to-green-light/20" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Series Numbers */}
          <motion.div
            className="flex gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {series.map((num, i) => (
              <motion.div
                key={i}
                className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                  i === series.length - 1 
                    ? 'bg-green-primary text-primary-foreground' 
                    : 'bg-card border-2 border-green-primary'
                }`}
                initial={{ scale: 0, y: -20 }}
                animate={{ 
                  scale: i === series.length - 1 && step < 3 ? 0 : 1, 
                  y: 0 
                }}
                transition={{ delay: 0.1 * i }}
              >
                {i === series.length - 1 ? (step >= 3 ? num : '?') : num}
              </motion.div>
            ))}
          </motion.div>

          {/* Differences Arrows */}
          <motion.div
            className="flex gap-3 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
            transition={{ delay: 0.6 }}
          >
            {differences.map((diff, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center w-12"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: step >= 1 ? 1 : 0, y: 0 }}
                transition={{ delay: 0.7 + 0.1 * i }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M 12 4 L 12 16 M 8 12 L 12 16 L 16 12" stroke="hsl(var(--green-primary))" strokeWidth="2" fill="none" />
                </svg>
                <span className={`text-sm font-bold ${i === differences.length - 1 ? 'text-green-primary' : 'text-muted-foreground'}`}>
                  +{diff}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Pattern Explanation */}
          <motion.div
            className="p-4 rounded-xl bg-card/90 border border-border mb-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-sm text-muted-foreground mb-2">Difference Pattern</div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="px-2 py-1 rounded bg-muted">+4</span>
              <span className="px-2 py-1 rounded bg-muted">+6</span>
              <span className="px-2 py-1 rounded bg-muted">+8</span>
              <span className="px-2 py-1 rounded bg-muted">+10</span>
              <span className="px-2 py-1 rounded bg-green-primary text-primary-foreground">+12</span>
            </div>
            <div className="text-xs text-muted-foreground mt-2">Each difference increases by 2</div>
          </motion.div>

          {/* Alternative Pattern */}
          <motion.div
            className="p-3 rounded-xl bg-accent/10 border border-accent/30 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="text-xs text-muted-foreground mb-2">Alternative: n(n+1) pattern</div>
            <div className="flex gap-2 justify-center text-xs">
              <span className="px-2 py-1 rounded bg-muted">1×2=2</span>
              <span className="px-2 py-1 rounded bg-muted">2×3=6</span>
              <span className="px-2 py-1 rounded bg-muted">3×4=12</span>
              <span className="px-2 py-1 rounded bg-muted">...</span>
              <span className="px-2 py-1 rounded bg-green-primary text-primary-foreground">6×7=42</span>
            </div>
          </motion.div>

          {/* Answer */}
          <motion.div
            className="mt-4 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: step >= 3 ? 1 : 0, scale: step >= 3 ? 1 : 0.9 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              className="text-3xl font-bold text-green-primary"
              animate={step >= 3 ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              Next Number = 42
            </motion.div>
          </motion.div>
        </div>

        {/* Step Label */}
        <motion.div
          className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-card/95 border border-green-primary text-xs font-bold text-green-primary"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Step {step + 1}
        </motion.div>
      </div>
    </div>
  );
};

export default NumberSeriesDiagram;
