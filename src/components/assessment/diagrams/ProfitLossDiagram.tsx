import { motion } from 'framer-motion';

interface ProfitLossDiagramProps {
  step: number;
  costPrice?: number;
  sellingPrice?: number;
}

const ProfitLossDiagram = ({ step, costPrice = 400, sellingPrice = 500 }: ProfitLossDiagramProps) => {
  const profit = sellingPrice - costPrice;
  const profitPercent = (profit / costPrice) * 100;

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative bg-gradient-to-b from-amber-50 to-green-50 dark:from-green-900/20 dark:to-green-950/30">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-200/20 to-transparent dark:from-orange-900/10" />
        
        {/* Shop illustration */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <svg width="100" height="70" viewBox="0 0 100 70">
            {/* Shop building */}
            <rect x="15" y="25" width="70" height="45" rx="3" fill="hsl(var(--green-primary))" />
            {/* Roof */}
            <polygon points="10,27 50,5 90,27" fill="hsl(var(--green-dark))" />
            {/* Door */}
            <rect x="40" y="40" width="20" height="30" rx="2" fill="hsl(var(--green-light))" />
            <circle cx="55" cy="55" r="2" fill="hsl(var(--green-dark))" />
            {/* Windows */}
            <rect x="22" y="35" width="14" height="14" rx="2" fill="hsl(var(--background))" />
            <rect x="64" y="35" width="14" height="14" rx="2" fill="hsl(var(--background))" />
            {/* Sign */}
            <rect x="35" y="10" width="30" height="12" rx="2" fill="hsl(var(--card))" stroke="hsl(var(--green-muted))" />
            <text x="50" y="19" textAnchor="middle" className="text-xs font-bold fill-green-primary">SHOP</text>
          </svg>
        </motion.div>

        {/* Price boxes side by side */}
        <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-8">
          {/* Cost Price Box */}
          <motion.div
            className="p-3 rounded-xl bg-card border-2 border-green-muted shadow-lg text-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-xs text-muted-foreground mb-1">Cost Price (CP)</div>
            <motion.div
              className="text-2xl font-bold text-green-dark"
              animate={step >= 1 ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              ₹{costPrice}
            </motion.div>
            <div className="text-xs text-muted-foreground mt-1">Buy at</div>
          </motion.div>

          {/* Arrow */}
          {step >= 1 && (
            <motion.div
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <svg width="60" height="40" viewBox="0 0 60 40">
                <motion.line 
                  x1="5" y1="20" x2="45" y2="20" 
                  stroke="hsl(var(--green-primary))" 
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <polygon points="45,20 38,15 38,25" fill="hsl(var(--green-primary))" />
              </svg>
              <motion.div 
                className="text-sm font-bold text-green-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                +₹{profit}
              </motion.div>
            </motion.div>
          )}

          {/* Selling Price Box */}
          <motion.div
            className="p-3 rounded-xl bg-card border-2 border-green-primary shadow-lg text-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-xs text-muted-foreground mb-1">Selling Price (SP)</div>
            <motion.div
              className="text-2xl font-bold text-green-primary"
              animate={step >= 1 ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              ₹{sellingPrice}
            </motion.div>
            <div className="text-xs text-muted-foreground mt-1">Sell at</div>
          </motion.div>
        </div>

        {/* Formula Box */}
        <motion.div
          className="absolute top-4 left-4 p-3 rounded-lg bg-card/95 border border-border shadow-lg max-w-[200px]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-xs font-semibold text-muted-foreground mb-1">Profit & Loss Formula</div>
          <div className="text-sm font-bold text-foreground">
            {step === 0 && (
              <div className="space-y-1">
                <div>Profit = SP - CP</div>
                <div>Profit% = (Profit/CP) × 100</div>
              </div>
            )}
            {step === 1 && (
              <div className="space-y-1">
                <div>Profit = {sellingPrice} - {costPrice}</div>
                <motion.div className="text-green-primary">
                  Profit = ₹{profit}
                </motion.div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-1">
                <div>Profit% = ({profit}/{costPrice}) × 100</div>
                <div>= {(profit/costPrice).toFixed(2)} × 100</div>
                <motion.div 
                  className="text-lg text-green-primary"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  = {profitPercent}% ✓
                </motion.div>
              </div>
            )}
            {step >= 3 && (
              <motion.div 
                className="p-2 bg-green-primary/10 rounded text-center"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-xs text-muted-foreground">Answer</div>
                <div className="text-xl text-green-primary font-bold">{profitPercent}%</div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Bar comparison */}
        <motion.div
          className="absolute top-4 right-4 w-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-xs font-semibold text-muted-foreground mb-2">Comparison</div>
          <div className="space-y-2">
            <div>
              <div className="text-xs text-muted-foreground">CP</div>
              <div className="h-4 bg-green-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-green-dark"
                  initial={{ width: '0%' }}
                  animate={{ width: `${(costPrice / sellingPrice) * 100}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">SP</div>
              <div className="h-4 bg-green-light rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-green-primary"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ground */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-green-700 to-green-600 dark:from-green-800 dark:to-green-700" />
      </div>
    </div>
  );
};

export default ProfitLossDiagram;