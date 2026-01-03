import { motion } from 'framer-motion';

interface PercentageDiagramNewProps {
  step: number;
}

const PercentageDiagramNew = ({ step }: PercentageDiagramNewProps) => {
  const costPrice = 100;
  const markup = 40;
  const discount = 25;
  const markedPrice = costPrice + (costPrice * markup / 100); // 140
  const discountAmount = markedPrice * discount / 100; // 35
  const sellingPrice = markedPrice - discountAmount; // 105
  const profit = sellingPrice - costPrice; // 5
  const profitPercent = (profit / costPrice) * 100; // 5%

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative bg-gradient-to-br from-green-soft/20 via-background to-green-light/20">
        {/* Formula Box */}
        <motion.div
          className="absolute top-3 left-3 p-2 rounded-lg bg-card/95 border border-green-primary shadow-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="text-xs font-semibold text-green-muted mb-1">Step {step + 1}</div>
          <div className="text-xs font-bold text-foreground">
            {step === 0 && 'CP = ₹100 (Base)'}
            {step === 1 && `MP = CP + 40% = ₹${markedPrice}`}
            {step === 2 && `SP = MP - 25% = ₹${sellingPrice}`}
            {step === 3 && `Profit = ${profitPercent}% ✓`}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="flex flex-col items-center">
            {/* Price Flow */}
            <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-center mb-4">
              {/* Cost Price - Always visible */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
                  <span className="text-sm md:text-base font-bold text-blue-600 dark:text-blue-400">₹{costPrice}</span>
                </div>
                <span className="text-xs mt-1 text-muted-foreground">CP</span>
              </motion.div>

              {/* Arrow 1 - Step 1 */}
              {step >= 1 && (
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <span className="text-xs font-bold text-green-primary">+40%</span>
                  <span className="text-lg">→</span>
                </motion.div>
              )}

              {/* Marked Price - Step 1 */}
              {step >= 1 && (
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center">
                    <span className="text-sm md:text-base font-bold text-amber-600 dark:text-amber-400">₹{markedPrice}</span>
                  </div>
                  <span className="text-xs mt-1 text-muted-foreground">MP</span>
                </motion.div>
              )}

              {/* Arrow 2 - Step 2 */}
              {step >= 2 && (
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <span className="text-xs font-bold text-destructive">-25%</span>
                  <span className="text-lg">→</span>
                </motion.div>
              )}

              {/* Selling Price - Step 2 */}
              {step >= 2 && (
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
                    <span className="text-sm md:text-base font-bold text-green-600 dark:text-green-400">₹{sellingPrice}</span>
                  </div>
                  <span className="text-xs mt-1 text-muted-foreground">SP</span>
                </motion.div>
              )}
            </div>

            {/* Calculation - Step 3 */}
            {step >= 3 && (
              <motion.div
                className="p-3 rounded-xl bg-card/90 border border-border text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="text-xs text-muted-foreground">
                  Profit = SP - CP = ₹{sellingPrice} - ₹{costPrice} = <span className="font-bold text-green-primary">₹{profit}</span>
                </div>
                <motion.div
                  className="text-lg font-bold text-green-primary mt-1"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  Profit% = {profitPercent}%
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PercentageDiagramNew;