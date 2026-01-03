import { motion } from 'framer-motion';

interface PartnershipDiagramProps {
  step: number;
  ratioA?: number;
  ratioB?: number;
  totalProfit?: number;
}

const PartnershipDiagram = ({ 
  step, 
  ratioA = 3, 
  ratioB = 5, 
  totalProfit = 40000 
}: PartnershipDiagramProps) => {
  const totalParts = ratioA + ratioB;
  const perPart = totalProfit / totalParts;
  const shareA = ratioA * perPart;
  const shareB = ratioB * perPart;

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-background to-green-light/20" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Partners */}
          <motion.div
            className="flex gap-8 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Partner A */}
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">👤</div>
              <div className="px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500 text-center">
                <div className="font-bold text-blue-600 dark:text-blue-400">A</div>
                <div className="text-sm text-muted-foreground">Invests {ratioA} parts</div>
              </div>
            </div>

            {/* Partner B */}
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">👤</div>
              <div className="px-4 py-2 rounded-lg bg-amber-500/20 border border-amber-500 text-center">
                <div className="font-bold text-amber-600 dark:text-amber-400">B</div>
                <div className="text-sm text-muted-foreground">Invests {ratioB} parts</div>
              </div>
            </div>
          </motion.div>

          {/* Ratio Bar */}
          <motion.div
            className="w-full max-w-sm mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 0 ? 1 : 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-xs text-center text-muted-foreground mb-1">Investment Ratio {ratioA}:{ratioB}</div>
            <div className="h-8 rounded-full overflow-hidden flex">
              <motion.div
                className="bg-blue-500 flex items-center justify-center text-white font-bold text-sm"
                initial={{ width: 0 }}
                animate={{ width: `${(ratioA / totalParts) * 100}%` }}
                transition={{ duration: 0.5 }}
              >
                {ratioA}
              </motion.div>
              <motion.div
                className="bg-amber-500 flex items-center justify-center text-white font-bold text-sm"
                initial={{ width: 0 }}
                animate={{ width: `${(ratioB / totalParts) * 100}%` }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {ratioB}
              </motion.div>
            </div>
            <div className="text-xs text-center text-muted-foreground mt-1">
              Total = {totalParts} parts
            </div>
          </motion.div>

          {/* Total Profit */}
          <motion.div
            className="px-6 py-3 rounded-xl bg-green-primary/10 border-2 border-green-primary mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-center">
              <div className="text-xs text-muted-foreground">Total Profit</div>
              <div className="text-2xl font-bold text-green-primary">₹{totalProfit.toLocaleString()}</div>
            </div>
          </motion.div>

          {/* Calculation */}
          <motion.div
            className="p-4 rounded-xl bg-card/90 border border-border text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="space-y-2 text-sm">
              <div>Value per part = ₹{totalProfit.toLocaleString()} ÷ {totalParts} = <span className="font-bold">₹{perPart.toLocaleString()}</span></div>
              <div className="flex justify-center gap-4 mt-3">
                <div className="px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-500">
                  <div className="text-xs text-muted-foreground">A's Share</div>
                  <div className="font-bold text-blue-500">{ratioA} × ₹{perPart.toLocaleString()}</div>
                  <div className="font-bold text-blue-500">= ₹{shareA.toLocaleString()}</div>
                </div>
                <div className="px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500">
                  <div className="text-xs text-muted-foreground">B's Share</div>
                  <div className="font-bold text-amber-500">{ratioB} × ₹{perPart.toLocaleString()}</div>
                  <motion.div 
                    className="font-bold text-amber-500"
                    animate={step >= 3 ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    = ₹{shareB.toLocaleString()}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Answer Highlight */}
          <motion.div
            className="mt-4 px-6 py-2 rounded-full bg-green-primary text-primary-foreground font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: step >= 3 ? 1 : 0, scale: step >= 3 ? 1 : 0.9 }}
            transition={{ delay: 1 }}
          >
            B's Share = ₹{shareB.toLocaleString()}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipDiagram;
