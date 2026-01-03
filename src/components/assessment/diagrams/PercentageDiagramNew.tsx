import { motion } from 'framer-motion';

interface PercentageDiagramNewProps {
  step: number;
  costPrice?: number;
  markup?: number;
  discount?: number;
}

const PercentageDiagramNew = ({ 
  step, 
  costPrice = 100, 
  markup = 40, 
  discount = 25 
}: PercentageDiagramNewProps) => {
  const markedPrice = costPrice + (costPrice * markup / 100);
  const discountAmount = markedPrice * discount / 100;
  const sellingPrice = markedPrice - discountAmount;
  const profit = sellingPrice - costPrice;
  const profitPercent = (profit / costPrice) * 100;

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-background to-green-light/20" />
        
        {/* Price Flow Diagram */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Price Boxes */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {/* Cost Price */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-20 h-20 rounded-xl bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">₹{costPrice}</span>
              </div>
              <span className="text-xs mt-2 text-muted-foreground font-medium">Cost Price</span>
            </motion.div>

            {/* Arrow 1 */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: step >= 1 ? 1 : 0.3, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-green-primary text-sm font-bold">+{markup}%</div>
              <svg width="40" height="20" viewBox="0 0 40 20">
                <path d="M 0 10 L 30 10 M 25 5 L 30 10 L 25 15" stroke="hsl(var(--green-primary))" strokeWidth="2" fill="none" />
              </svg>
            </motion.div>

            {/* Marked Price */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: step >= 1 ? 1 : 0.3, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-20 h-20 rounded-xl bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center">
                <span className="text-xl font-bold text-amber-600 dark:text-amber-400">₹{markedPrice}</span>
              </div>
              <span className="text-xs mt-2 text-muted-foreground font-medium">Marked Price</span>
            </motion.div>

            {/* Arrow 2 */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: step >= 2 ? 1 : 0.3, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-red-500 text-sm font-bold">-{discount}%</div>
              <svg width="40" height="20" viewBox="0 0 40 20">
                <path d="M 0 10 L 30 10 M 25 5 L 30 10 L 25 15" stroke="hsl(var(--destructive))" strokeWidth="2" fill="none" />
              </svg>
            </motion.div>

            {/* Selling Price */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: step >= 2 ? 1 : 0.3, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="w-20 h-20 rounded-xl bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
                <span className="text-xl font-bold text-green-600 dark:text-green-400">₹{sellingPrice}</span>
              </div>
              <span className="text-xs mt-2 text-muted-foreground font-medium">Selling Price</span>
            </motion.div>
          </div>

          {/* Calculation Box */}
          <motion.div
            className="mt-6 p-4 rounded-xl bg-card/90 border border-border max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 3 ? 1 : 0.3, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="text-center space-y-2">
              <div className="text-sm text-muted-foreground">
                Profit = SP - CP = ₹{sellingPrice} - ₹{costPrice} = <span className="font-bold text-green-primary">₹{profit}</span>
              </div>
              <motion.div
                className="text-lg font-bold text-green-primary"
                animate={step >= 3 ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              >
                Profit% = {profitPercent}%
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Formula Box */}
        <motion.div
          className="absolute top-3 left-3 p-3 rounded-xl bg-card/95 border-2 border-green-primary shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-xs font-semibold text-green-muted mb-1">Step {step + 1}</div>
          <div className="text-sm font-bold text-foreground">
            {step === 0 && 'CP = ₹100 (Base value)'}
            {step === 1 && `MP = CP + ${markup}% = ₹${markedPrice}`}
            {step === 2 && `SP = MP - ${discount}% = ₹${sellingPrice}`}
            {step === 3 && `Profit = ${profitPercent}% ✓`}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PercentageDiagramNew;
