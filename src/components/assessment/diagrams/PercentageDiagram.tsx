import { motion } from 'framer-motion';

interface PercentageDiagramProps {
  step: number;
  originalPrice?: number;
  discount?: number;
  tax?: number;
}

const PercentageDiagram = ({ 
  step, 
  originalPrice = 80, 
  discount = 20, 
  tax = 10 
}: PercentageDiagramProps) => {
  const discountedPrice = originalPrice * (1 - discount / 100);
  const finalPrice = discountedPrice * (1 + tax / 100);
  
  return (
    <div className="diagram-container">
      <div className="diagram-scene flex items-center justify-center bg-gradient-to-br from-card to-background-secondary p-4">
        <div className="w-full max-w-md">
          {/* Price Tag Animation */}
          <div className="flex justify-center mb-8">
            <motion.div
              className="relative"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              {/* Shirt Icon */}
              <motion.div
                className="w-32 h-32 rounded-xl bg-primary/20 flex items-center justify-center text-6xl"
                whileHover={{ scale: 1.05 }}
              >
                👔
              </motion.div>
              
              {/* Original Price Tag */}
              <motion.div
                className={`absolute -top-2 -right-4 px-3 py-1 rounded-full font-bold text-sm ${
                  step >= 1 
                    ? 'bg-warning/20 text-warning line-through' 
                    : 'bg-primary text-primary-foreground'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                ${originalPrice}
              </motion.div>
              
              {/* Discount Badge */}
              {step >= 1 && (
                <motion.div
                  className="absolute -bottom-2 -right-4 px-3 py-1 rounded-full bg-success text-success-foreground font-bold text-sm"
                  initial={{ scale: 0, rotate: -15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                >
                  -{discount}% OFF
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Calculation Steps */}
          <div className="space-y-4">
            {/* Step 1: Apply Discount */}
            <motion.div
              className={`p-4 rounded-xl border-2 ${
                step >= 1 
                  ? 'bg-success/10 border-success/30' 
                  : 'bg-muted/50 border-transparent'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏷️</span>
                  <div>
                    <p className="font-semibold text-sm">After {discount}% Discount</p>
                    <p className="text-xs text-muted-foreground">
                      ${originalPrice} × {(100 - discount) / 100} = ${discountedPrice.toFixed(2)}
                    </p>
                  </div>
                </div>
                <motion.div
                  className="text-xl font-bold text-success"
                  initial={{ scale: 0 }}
                  animate={{ scale: step >= 1 ? 1 : 0 }}
                  transition={{ delay: 0.6 }}
                >
                  ${discountedPrice.toFixed(2)}
                </motion.div>
              </div>
              
              {/* Visual Bar */}
              <div className="mt-3 h-4 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-success rounded-full"
                  initial={{ width: '100%' }}
                  animate={{ width: step >= 1 ? '80%' : '100%' }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                />
              </div>
              <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                <span>$0</span>
                <span>${originalPrice}</span>
              </div>
            </motion.div>

            {/* Step 2: Apply Tax */}
            <motion.div
              className={`p-4 rounded-xl border-2 ${
                step >= 2 
                  ? 'bg-accent/10 border-accent/30' 
                  : 'bg-muted/50 border-transparent'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: step >= 2 ? 1 : 0.5, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📋</span>
                  <div>
                    <p className="font-semibold text-sm">After {tax}% Tax</p>
                    <p className="text-xs text-muted-foreground">
                      ${discountedPrice.toFixed(2)} × {1 + tax / 100} = ${finalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>
                <motion.div
                  className="text-xl font-bold text-accent"
                  initial={{ scale: 0 }}
                  animate={{ scale: step >= 2 ? 1 : 0 }}
                  transition={{ delay: 1 }}
                >
                  +${(finalPrice - discountedPrice).toFixed(2)}
                </motion.div>
              </div>
            </motion.div>

            {/* Final Price */}
            <motion.div
              className={`p-4 rounded-xl border-2 ${
                step >= 3 
                  ? 'bg-primary/10 border-primary' 
                  : 'bg-muted/50 border-transparent'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 3 ? 1 : 0.3 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🛒</span>
                  <p className="font-bold">Final Price</p>
                </div>
                <motion.div
                  className="text-2xl font-bold text-primary"
                  initial={{ scale: 0 }}
                  animate={{ scale: step >= 3 ? [1, 1.2, 1] : 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  ${finalPrice.toFixed(2)}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PercentageDiagram;
