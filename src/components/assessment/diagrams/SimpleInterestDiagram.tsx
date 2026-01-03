import { motion } from 'framer-motion';

interface SimpleInterestDiagramProps {
  step: number;
  principal?: number;
  rate?: number;
  time?: number;
}

const SimpleInterestDiagram = ({ 
  step, 
  principal = 5000, 
  rate = 12, 
  time = 3 
}: SimpleInterestDiagramProps) => {
  const interest = (principal * rate * time) / 100;
  const amount = principal + interest;

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-background to-green-light/20" />
        
        {/* Bank Building Visual */}
        <motion.div
          className="absolute top-6 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-4xl">🏦</div>
        </motion.div>

        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-12">
          {/* Input Values */}
          <motion.div
            className="flex gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500 text-center">
              <div className="text-xs text-muted-foreground">Principal</div>
              <div className="font-bold text-blue-600 dark:text-blue-400">₹{principal.toLocaleString()}</div>
            </div>
            <div className="px-4 py-2 rounded-lg bg-amber-500/20 border border-amber-500 text-center">
              <div className="text-xs text-muted-foreground">Rate</div>
              <div className="font-bold text-amber-600 dark:text-amber-400">{rate}%</div>
            </div>
            <div className="px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500 text-center">
              <div className="text-xs text-muted-foreground">Time</div>
              <div className="font-bold text-purple-600 dark:text-purple-400">{time} years</div>
            </div>
          </motion.div>

          {/* Formula Display */}
          <motion.div
            className="p-4 rounded-xl bg-card/90 border border-border mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2">Formula</div>
              <div className="text-lg font-mono font-bold">
                SI = <span className="text-blue-500">P</span> × <span className="text-amber-500">R</span> × <span className="text-purple-500">T</span> / 100
              </div>
            </div>
          </motion.div>

          {/* Calculation Steps */}
          <motion.div
            className="space-y-2 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-sm">
              SI = ({principal} × {rate} × {time}) / 100
            </div>
            <div className="text-sm">
              SI = {principal * rate * time} / 100
            </div>
            <motion.div
              className="text-xl font-bold text-green-primary"
              animate={step >= 2 ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              SI = ₹{interest.toLocaleString()}
            </motion.div>
          </motion.div>

          {/* Timeline Visual */}
          <motion.div
            className="mt-6 w-full max-w-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex justify-between items-center">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-primary/20 border-2 border-green-primary flex items-center justify-center text-sm font-bold">
                  ₹{(principal/1000).toFixed(0)}k
                </div>
                <div className="text-xs mt-1">Start</div>
              </div>
              
              <div className="flex-1 h-2 bg-green-primary/30 mx-2 relative">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-green-primary rounded"
                  initial={{ width: '0%' }}
                  animate={{ width: step >= 2 ? '100%' : '0%' }}
                  transition={{ duration: 1 }}
                />
                {[1, 2, 3].map((year) => (
                  <div 
                    key={year} 
                    className="absolute top-4 text-xs text-muted-foreground"
                    style={{ left: `${(year / time) * 100 - 10}%` }}
                  >
                    Y{year}
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-green-primary flex items-center justify-center text-sm font-bold text-primary-foreground"
                  animate={step >= 2 ? { boxShadow: ['0 0 0 0 rgba(15,44,31,0.4)', '0 0 0 10px rgba(15,44,31,0)', '0 0 0 0 rgba(15,44,31,0)'] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ₹{((amount)/1000).toFixed(1)}k
                </motion.div>
                <div className="text-xs mt-1">End</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Info Box */}
        <motion.div
          className="absolute bottom-3 left-3 p-2 rounded-lg bg-card/90 border border-green-muted text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 2 ? 1 : 0 }}
          transition={{ delay: 0.8 }}
        >
          Total Amount = P + SI = ₹{amount.toLocaleString()}
        </motion.div>
      </div>
    </div>
  );
};

export default SimpleInterestDiagram;
