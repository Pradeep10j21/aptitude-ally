import { motion } from 'framer-motion';

interface CompoundInterestDiagramProps {
  step: number;
}

const CompoundInterestDiagram = ({ step }: CompoundInterestDiagramProps) => {
  const principal = 10000;
  const rate = 10;
  const year1Amount = principal * (1 + rate / 100); // 11000
  const year2Amount = year1Amount * (1 + rate / 100); // 12100
  const ci = year2Amount - principal; // 2100
  const si = (principal * rate * 2) / 100; // 2000

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative bg-gradient-to-br from-green-soft/20 via-background to-green-light/20">
        {/* Formula Box */}
        <motion.div
          className="absolute top-3 left-3 p-2 rounded-lg bg-card/95 border border-green-primary shadow-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="text-xs font-semibold text-green-muted">Formula</div>
          <div className="text-xs font-bold font-mono">A = P(1 + R/100)ⁿ</div>
        </motion.div>

        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Growth Bars */}
          <div className="flex items-end gap-6 mb-4">
            {/* Year 0 - Always visible */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <motion.div 
                className="w-14 bg-blue-500 rounded-t-lg flex items-end justify-center pb-1"
                style={{ height: 50 }}
              >
                <span className="text-xs text-white font-bold">₹10k</span>
              </motion.div>
              <div className="text-xs mt-1 text-muted-foreground">Start</div>
            </motion.div>

            {/* Year 1 - Step 1 */}
            {step >= 1 && (
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="text-xs text-green-primary font-bold mb-1">+₹1k</div>
                <motion.div 
                  className="w-14 bg-amber-500 rounded-t-lg flex items-end justify-center pb-1"
                  style={{ height: 60 }}
                >
                  <span className="text-xs text-white font-bold">₹11k</span>
                </motion.div>
                <div className="text-xs mt-1 text-muted-foreground">Y1</div>
              </motion.div>
            )}

            {/* Year 2 - Step 2 */}
            {step >= 2 && (
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="text-xs text-green-primary font-bold mb-1">+₹1.1k</div>
                <motion.div 
                  className="w-14 bg-green-500 rounded-t-lg flex items-end justify-center pb-1"
                  style={{ height: 70 }}
                >
                  <span className="text-xs text-white font-bold">₹12.1k</span>
                </motion.div>
                <div className="text-xs mt-1 text-muted-foreground">Y2</div>
              </motion.div>
            )}
          </div>

          {/* Key Insight - Step 2 */}
          {step >= 2 && (
            <motion.div
              className="p-2 rounded-lg bg-accent/10 border border-accent/30 text-center mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-xs text-accent font-bold">Interest on Interest = ₹100 extra</div>
            </motion.div>
          )}

          {/* Result - Step 3 */}
          {step >= 3 && (
            <motion.div
              className="p-3 rounded-xl bg-card/90 border border-border text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-xs">CI = A - P = ₹{year2Amount} - ₹{principal}</div>
              <motion.div
                className="text-lg font-bold text-green-primary"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                CI = ₹{ci}
              </motion.div>
            </motion.div>
          )}

          {/* Comparison - Step 3 */}
          {step >= 3 && (
            <motion.div
              className="mt-3 flex gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="px-2 py-1 rounded bg-muted/50 text-center text-xs">
                <div className="text-muted-foreground">SI</div>
                <div className="font-bold">₹{si}</div>
              </div>
              <div className="px-2 py-1 rounded bg-green-primary/20 border border-green-primary text-center text-xs">
                <div className="text-green-muted">CI</div>
                <div className="font-bold text-green-primary">₹{ci}</div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompoundInterestDiagram;