import { motion } from 'framer-motion';

interface NumberSeriesDiagramProps {
  step: number;
}

const NumberSeriesDiagram = ({ step }: NumberSeriesDiagramProps) => {
  const series = [2, 6, 12, 20, 30, 42];
  const differences = [4, 6, 8, 10, 12];

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative bg-gradient-to-br from-green-soft/20 via-background to-green-light/20">
        {/* Step Label */}
        <motion.div
          className="absolute top-3 left-3 px-2 py-1 rounded-lg bg-card/95 border border-green-primary text-xs font-bold text-green-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Step {step + 1}
        </motion.div>

        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Series Numbers */}
          <motion.div className="flex gap-2 mb-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {series.map((num, i) => (
              <motion.div
                key={i}
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${
                  i === series.length - 1 
                    ? 'bg-green-primary text-primary-foreground' 
                    : 'bg-card border-2 border-green-primary'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: i === series.length - 1 && step < 3 ? 0 : 1 }}
                transition={{ delay: 0.1 * i }}
              >
                {i === series.length - 1 ? (step >= 3 ? num : '?') : num}
              </motion.div>
            ))}
          </motion.div>

          {/* Differences */}
          <motion.div
            className="flex gap-2 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
          >
            {differences.map((diff, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center w-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: step >= 1 ? 1 : 0 }}
                transition={{ delay: 0.5 + 0.1 * i }}
              >
                <span className="text-lg text-green-primary">↓</span>
                <span className={`text-xs font-bold ${i === differences.length - 1 ? 'text-green-primary' : 'text-muted-foreground'}`}>
                  +{diff}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Pattern */}
          <motion.div
            className="p-3 rounded-xl bg-card/90 border border-border mb-3 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
          >
            <div className="text-xs text-muted-foreground mb-1">Difference Pattern</div>
            <div className="flex gap-1 justify-center text-xs">
              {differences.map((d, i) => (
                <span key={i} className={`px-2 py-1 rounded ${i === differences.length - 1 ? 'bg-green-primary text-primary-foreground' : 'bg-muted'}`}>
                  +{d}
                </span>
              ))}
            </div>
            <div className="text-xs text-muted-foreground mt-1">Each diff increases by 2</div>
          </motion.div>

          {/* Alternative Pattern */}
          <motion.div
            className="p-2 rounded-lg bg-accent/10 border border-accent/30 text-center text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3 }}
          >
            <div className="text-muted-foreground">Pattern: n(n+1)</div>
            <div className="flex gap-1 justify-center mt-1">
              <span className="px-1 bg-muted rounded">1×2=2</span>
              <span className="px-1 bg-muted rounded">2×3=6</span>
              <span className="text-muted-foreground">...</span>
              <span className="px-1 bg-green-primary text-primary-foreground rounded">6×7=42</span>
            </div>
          </motion.div>

          {/* Answer */}
          <motion.div
            className="mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 3 ? 1 : 0 }}
          >
            <motion.div
              className="text-xl font-bold text-green-primary"
              animate={step >= 3 ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              Next = 42
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NumberSeriesDiagram;
