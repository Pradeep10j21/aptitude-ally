import { motion } from 'framer-motion';

interface CompoundInterestDiagramProps {
  step: number;
  principal?: number;
  rate?: number;
  time?: number;
}

const CompoundInterestDiagram = ({ 
  step, 
  principal = 10000, 
  rate = 10, 
  time = 2 
}: CompoundInterestDiagramProps) => {
  const year1Amount = principal * (1 + rate / 100);
  const year2Amount = year1Amount * (1 + rate / 100);
  const ci = year2Amount - principal;
  const si = (principal * rate * time) / 100;

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-background to-green-light/20" />
        
        {/* Growth Visualization */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Year by Year Growth */}
          <div className="flex items-end gap-6 mb-6">
            {/* Year 0 */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <motion.div 
                className="w-16 bg-blue-500 rounded-t-lg flex items-end justify-center pb-2"
                style={{ height: 60 }}
              >
                <span className="text-xs text-white font-bold">₹{(principal/1000)}k</span>
              </motion.div>
              <div className="text-xs mt-2 text-muted-foreground">Start</div>
            </motion.div>

            {/* Year 1 */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: step >= 1 ? 1 : 0.3, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div 
                className="w-16 bg-amber-500 rounded-t-lg flex items-end justify-center pb-2 relative"
                style={{ height: 72 }}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-green-primary font-bold whitespace-nowrap">
                  +₹{((year1Amount - principal)/1000).toFixed(0)}k
                </div>
                <span className="text-xs text-white font-bold">₹{(year1Amount/1000).toFixed(0)}k</span>
              </motion.div>
              <div className="text-xs mt-2 text-muted-foreground">Year 1</div>
            </motion.div>

            {/* Year 2 */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: step >= 2 ? 1 : 0.3, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div 
                className="w-16 bg-green-500 rounded-t-lg flex items-end justify-center pb-2 relative"
                style={{ height: 84 }}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-green-primary font-bold whitespace-nowrap">
                  +₹{((year2Amount - year1Amount)/1000).toFixed(1)}k
                </div>
                <span className="text-xs text-white font-bold">₹{(year2Amount/1000).toFixed(1)}k</span>
              </motion.div>
              <div className="text-xs mt-2 text-muted-foreground">Year 2</div>
            </motion.div>
          </div>

          {/* Key Insight */}
          <motion.div
            className="p-3 rounded-xl bg-accent/10 border border-accent/30 text-center max-w-sm mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 2 ? 1 : 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="text-xs text-muted-foreground">Notice: Year 2 interest is calculated on ₹11,000 (not ₹10,000)</div>
            <div className="text-sm font-bold text-accent mt-1">Interest on Interest = Extra ₹100</div>
          </motion.div>

          {/* Calculation */}
          <motion.div
            className="p-4 rounded-xl bg-card/90 border border-border text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 3 ? 1 : 0.3, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="space-y-1 text-sm">
              <div>CI = A - P = ₹{year2Amount.toLocaleString()} - ₹{principal.toLocaleString()}</div>
              <motion.div
                className="text-xl font-bold text-green-primary"
                animate={step >= 3 ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              >
                CI = ₹{ci.toLocaleString()}
              </motion.div>
            </div>
          </motion.div>

          {/* Comparison with SI */}
          <motion.div
            className="mt-4 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 3 ? 1 : 0 }}
            transition={{ delay: 1.1 }}
          >
            <div className="px-3 py-2 rounded-lg bg-muted/50 text-center">
              <div className="text-xs text-muted-foreground">Simple Interest</div>
              <div className="font-bold">₹{si.toLocaleString()}</div>
            </div>
            <div className="px-3 py-2 rounded-lg bg-green-primary/20 border border-green-primary text-center">
              <div className="text-xs text-green-muted">Compound Interest</div>
              <div className="font-bold text-green-primary">₹{ci.toLocaleString()}</div>
            </div>
          </motion.div>
        </div>

        {/* Formula Box */}
        <motion.div
          className="absolute top-3 left-3 p-3 rounded-xl bg-card/95 border-2 border-green-primary shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="text-xs font-semibold text-green-muted mb-1">Formula</div>
          <div className="text-sm font-bold text-foreground font-mono">
            A = P(1 + R/100)ⁿ
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompoundInterestDiagram;
