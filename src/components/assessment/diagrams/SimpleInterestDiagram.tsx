import { motion } from 'framer-motion';

interface SimpleInterestDiagramProps {
  step: number;
}

const SimpleInterestDiagram = ({ step }: SimpleInterestDiagramProps) => {
  const principal = 5000;
  const rate = 12;
  const time = 3;
  const interest = (principal * rate * time) / 100; // 1800
  const amount = principal + interest; // 6800

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative bg-gradient-to-br from-green-soft/20 via-background to-green-light/20">
        {/* Bank Icon */}
        <motion.div
          className="absolute top-3 right-3 text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          🏦
        </motion.div>

        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Input Values */}
          <motion.div
            className="flex gap-3 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="px-3 py-2 rounded-lg bg-blue-500/20 border border-blue-500 text-center">
              <div className="text-xs text-muted-foreground">P</div>
              <div className="text-sm font-bold text-blue-600 dark:text-blue-400">₹{principal}</div>
            </div>
            <div className="px-3 py-2 rounded-lg bg-amber-500/20 border border-amber-500 text-center">
              <div className="text-xs text-muted-foreground">R</div>
              <div className="text-sm font-bold text-amber-600 dark:text-amber-400">{rate}%</div>
            </div>
            <div className="px-3 py-2 rounded-lg bg-purple-500/20 border border-purple-500 text-center">
              <div className="text-xs text-muted-foreground">T</div>
              <div className="text-sm font-bold text-purple-600 dark:text-purple-400">{time} yrs</div>
            </div>
          </motion.div>

          {/* Formula */}
          <motion.div
            className="px-4 py-2 rounded-lg bg-card/90 border border-border mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
          >
            <div className="text-sm font-mono font-bold text-center">
              SI = <span className="text-blue-500">P</span> × <span className="text-amber-500">R</span> × <span className="text-purple-500">T</span> / 100
            </div>
          </motion.div>

          {/* Calculation */}
          <motion.div
            className="p-3 rounded-xl bg-card/90 border border-border text-center mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3 }}
          >
            <div className="text-xs space-y-1">
              <div>SI = ({principal} × {rate} × {time}) / 100</div>
              <div>SI = {principal * rate * time} / 100</div>
              <motion.div
                className="text-base font-bold text-green-primary"
                animate={step >= 2 ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              >
                SI = ₹{interest}
              </motion.div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="w-full max-w-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
          >
            <div className="flex justify-between items-center">
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-green-primary/20 border-2 border-green-primary flex items-center justify-center text-xs font-bold">
                  ₹{(principal/1000).toFixed(0)}k
                </div>
                <div className="text-xs mt-1">Start</div>
              </div>
              
              <div className="flex-1 h-2 bg-green-primary/30 mx-2 relative rounded-full">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-green-primary rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: step >= 2 ? '100%' : '0%' }}
                  transition={{ duration: 1 }}
                />
              </div>
              
              <div className="text-center">
                <motion.div 
                  className="w-10 h-10 rounded-full bg-green-primary flex items-center justify-center text-xs font-bold text-primary-foreground"
                  animate={step >= 2 ? { boxShadow: ['0 0 0 0 rgba(0,0,0,0.2)', '0 0 0 8px rgba(0,0,0,0)', '0 0 0 0 rgba(0,0,0,0)'] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ₹{(amount/1000).toFixed(1)}k
                </motion.div>
                <div className="text-xs mt-1">End</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SimpleInterestDiagram;
