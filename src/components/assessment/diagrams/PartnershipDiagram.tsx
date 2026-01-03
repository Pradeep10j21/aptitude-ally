import { motion } from 'framer-motion';

interface PartnershipDiagramProps {
  step: number;
}

const PartnershipDiagram = ({ step }: PartnershipDiagramProps) => {
  const ratioA = 3;
  const ratioB = 5;
  const totalProfit = 40000;
  const totalParts = ratioA + ratioB;
  const perPart = totalProfit / totalParts;
  const shareA = ratioA * perPart;
  const shareB = ratioB * perPart;

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative bg-gradient-to-br from-green-soft/20 via-background to-green-light/20">
        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Partners */}
          <motion.div
            className="flex gap-6 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col items-center">
              <div className="text-3xl">👤</div>
              <div className="px-3 py-1 rounded-lg bg-blue-500/20 border border-blue-500 text-center">
                <div className="font-bold text-sm text-blue-600 dark:text-blue-400">A</div>
                <div className="text-xs text-muted-foreground">{ratioA} parts</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl">👤</div>
              <div className="px-3 py-1 rounded-lg bg-amber-500/20 border border-amber-500 text-center">
                <div className="font-bold text-sm text-amber-600 dark:text-amber-400">B</div>
                <div className="text-xs text-muted-foreground">{ratioB} parts</div>
              </div>
            </div>
          </motion.div>

          {/* Ratio Bar */}
          <motion.div
            className="w-full max-w-xs mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-xs text-center text-muted-foreground mb-1">Ratio {ratioA}:{ratioB}</div>
            <div className="h-6 rounded-full overflow-hidden flex">
              <motion.div
                className="bg-blue-500 flex items-center justify-center text-white font-bold text-xs"
                initial={{ width: 0 }}
                animate={{ width: `${(ratioA / totalParts) * 100}%` }}
              >
                {ratioA}
              </motion.div>
              <motion.div
                className="bg-amber-500 flex items-center justify-center text-white font-bold text-xs"
                initial={{ width: 0 }}
                animate={{ width: `${(ratioB / totalParts) * 100}%` }}
                transition={{ delay: 0.2 }}
              >
                {ratioB}
              </motion.div>
            </div>
          </motion.div>

          {/* Total Profit */}
          <motion.div
            className="px-4 py-2 rounded-xl bg-green-primary/10 border-2 border-green-primary mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0 }}
          >
            <div className="text-center">
              <div className="text-xs text-muted-foreground">Total Profit</div>
              <div className="text-xl font-bold text-green-primary">₹{totalProfit.toLocaleString()}</div>
            </div>
          </motion.div>

          {/* Calculation */}
          <motion.div
            className="p-3 rounded-xl bg-card/90 border border-border text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3 }}
          >
            <div className="text-xs mb-2">Per part = ₹{totalProfit.toLocaleString()} ÷ {totalParts} = ₹{perPart.toLocaleString()}</div>
            <div className="flex gap-3 justify-center">
              <div className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500">
                <div className="text-xs text-muted-foreground">A's Share</div>
                <div className="text-sm font-bold text-blue-500">₹{shareA.toLocaleString()}</div>
              </div>
              <div className="px-2 py-1 rounded bg-amber-500/10 border border-amber-500">
                <div className="text-xs text-muted-foreground">B's Share</div>
                <motion.div 
                  className="text-sm font-bold text-amber-500"
                  animate={step >= 3 ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ₹{shareB.toLocaleString()}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Answer */}
          <motion.div
            className="mt-3 px-4 py-1 rounded-full bg-green-primary text-primary-foreground font-bold text-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: step >= 3 ? 1 : 0, scale: step >= 3 ? 1 : 0.9 }}
          >
            B's Share = ₹{shareB.toLocaleString()}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipDiagram;
