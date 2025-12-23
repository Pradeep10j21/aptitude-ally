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
      <div className="diagram-scene relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-bg-card to-green-light/30" />
        
        {/* Shop illustration */}
        <motion.div
          className="absolute left-4 top-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <svg width="120" height="100" viewBox="0 0 120 100">
            {/* Shop building */}
            <rect x="10" y="30" width="100" height="60" rx="4" fill="hsl(var(--green-primary))" />
            {/* Roof */}
            <polygon points="5,32 60,5 115,32" fill="hsl(var(--green-dark))" />
            {/* Door */}
            <rect x="45" y="50" width="30" height="40" rx="2" fill="hsl(var(--green-light))" />
            <circle cx="70" cy="70" r="2" fill="hsl(var(--green-dark))" />
            {/* Window */}
            <rect x="20" y="45" width="20" height="20" rx="2" fill="hsl(var(--background))" />
            <line x1="30" y1="45" x2="30" y2="65" stroke="hsl(var(--green-muted))" strokeWidth="2" />
            <line x1="20" y1="55" x2="40" y2="55" stroke="hsl(var(--green-muted))" strokeWidth="2" />
            {/* Sign */}
            <rect x="80" y="45" width="20" height="20" rx="2" fill="hsl(var(--background))" />
            <text x="90" y="58" textAnchor="middle" className="text-xs font-bold fill-green-primary">₹</text>
          </svg>
          <div className="text-center text-xs font-semibold text-foreground mt-1">Shop</div>
        </motion.div>

        {/* Cost Price Box */}
        <motion.div
          className="absolute left-4 bottom-4 p-3 rounded-xl bg-card border-2 border-green-muted shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-xs text-muted-foreground">Cost Price (CP)</div>
          <div className="flex items-center gap-2">
            <motion.div
              className="text-2xl font-bold text-green-dark"
              animate={step >= 1 ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              ₹{costPrice}
            </motion.div>
            <svg width="30" height="30" viewBox="0 0 30 30">
              <rect x="2" y="5" width="26" height="20" rx="2" fill="hsl(var(--green-muted))" />
              <text x="15" y="18" textAnchor="middle" className="text-xs fill-background">BUY</text>
            </svg>
          </div>
        </motion.div>

        {/* Selling Price Box */}
        <motion.div
          className="absolute right-4 bottom-4 p-3 rounded-xl bg-card border-2 border-green-primary shadow-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-xs text-muted-foreground">Selling Price (SP)</div>
          <div className="flex items-center gap-2">
            <motion.div
              className="text-2xl font-bold text-green-primary"
              animate={step >= 1 ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              ₹{sellingPrice}
            </motion.div>
            <svg width="30" height="30" viewBox="0 0 30 30">
              <rect x="2" y="5" width="26" height="20" rx="2" fill="hsl(var(--green-primary))" />
              <text x="15" y="18" textAnchor="middle" className="text-xs fill-background">SELL</text>
            </svg>
          </div>
        </motion.div>

        {/* Arrow showing profit */}
        {step >= 1 && (
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bottom-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <svg width="200" height="50" viewBox="0 0 200 50">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--green-primary))" />
                </marker>
              </defs>
              <motion.line 
                x1="20" y1="25" x2="180" y2="25" 
                stroke="hsl(var(--green-primary))" 
                strokeWidth="3"
                markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8 }}
              />
              <motion.text 
                x="100" y="15" 
                textAnchor="middle" 
                className="text-sm font-bold fill-green-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Profit = ₹{profit}
              </motion.text>
            </svg>
          </motion.div>
        )}

        {/* Bar comparison */}
        <motion.div
          className="absolute right-4 top-4 w-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-xs font-semibold text-muted-foreground mb-2">Price Comparison</div>
          <div className="space-y-2">
            <div>
              <div className="text-xs text-muted-foreground">CP</div>
              <div className="h-6 bg-green-muted rounded-full overflow-hidden">
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
              <div className="h-6 bg-green-light rounded-full overflow-hidden">
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

        {/* Formula Box */}
        <motion.div
          className="absolute top-4 left-1/2 -translate-x-1/2 p-4 rounded-xl bg-card/95 border-2 border-green-primary shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-xs font-semibold text-green-muted mb-2 text-center">Profit & Loss Formula</div>
          <div className="text-sm font-bold text-foreground text-center">
            {step === 0 && (
              <div className="space-y-1">
                <div>Profit = SP - CP</div>
                <div>Profit % = (Profit / CP) × 100</div>
              </div>
            )}
            {step === 1 && (
              <div className="space-y-1">
                <div>Profit = {sellingPrice} - {costPrice}</div>
                <motion.div 
                  className="text-green-primary"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                >
                  Profit = ₹{profit}
                </motion.div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-1">
                <div>Profit % = ({profit} / {costPrice}) × 100</div>
                <div>= {profit / costPrice} × 100</div>
                <motion.div 
                  className="text-lg text-green-primary"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  = {profitPercent}% ✓
                </motion.div>
              </div>
            )}
            {step === 3 && (
              <motion.div 
                className="p-3 bg-green-primary/10 rounded-lg"
                animate={{ boxShadow: ['0 0 0 0 rgba(15,44,31,0.4)', '0 0 0 10px rgba(15,44,31,0)', '0 0 0 0 rgba(15,44,31,0)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-muted-foreground text-xs">Answer</div>
                <div className="text-2xl text-green-primary font-bold">{profitPercent}% Profit</div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfitLossDiagram;
