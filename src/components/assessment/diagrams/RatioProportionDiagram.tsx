import { motion } from 'framer-motion';

interface RatioProportionDiagramProps {
  step: number;
}

const RatioProportionDiagram = ({ step }: RatioProportionDiagramProps) => {
  // A:B = 2:3, B:C = 4:5
  // LCM of 3 and 4 is 12
  // A:B = 8:12, B:C = 12:15
  // A:B:C = 8:12:15

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-background to-green-light/20" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Initial Ratios */}
          <motion.div
            className="flex gap-8 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* A:B */}
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-500/20 border border-blue-500">
              <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">A</span>
              <span className="text-lg font-bold">:</span>
              <span className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">B</span>
              <span className="text-lg font-bold">=</span>
              <span className="font-bold text-blue-600 dark:text-blue-400">2</span>
              <span>:</span>
              <span className="font-bold text-amber-600 dark:text-amber-400">3</span>
            </div>

            {/* B:C */}
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-amber-500/20 border border-amber-500">
              <span className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">B</span>
              <span className="text-lg font-bold">:</span>
              <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">C</span>
              <span className="text-lg font-bold">=</span>
              <span className="font-bold text-amber-600 dark:text-amber-400">4</span>
              <span>:</span>
              <span className="font-bold text-green-600 dark:text-green-400">5</span>
            </div>
          </motion.div>

          {/* LCM Explanation */}
          <motion.div
            className="p-3 rounded-xl bg-card/90 border border-border text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-sm text-muted-foreground">Make B same in both ratios</div>
            <div className="font-bold">LCM of 3 and 4 = <span className="text-green-primary">12</span></div>
          </motion.div>

          {/* Scaled Ratios */}
          <motion.div
            className="flex gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* Scaled A:B */}
            <div className="flex flex-col items-center p-3 rounded-xl bg-blue-500/10 border border-blue-500/50">
              <div className="text-xs text-muted-foreground mb-1">Multiply by 4</div>
              <div className="font-bold">
                <span className="text-blue-500">2×4</span> : <span className="text-amber-500">3×4</span>
              </div>
              <div className="font-bold text-lg">
                <span className="text-blue-500">8</span> : <span className="text-amber-500">12</span>
              </div>
            </div>

            {/* Scaled B:C */}
            <div className="flex flex-col items-center p-3 rounded-xl bg-green-500/10 border border-green-500/50">
              <div className="text-xs text-muted-foreground mb-1">Multiply by 3</div>
              <div className="font-bold">
                <span className="text-amber-500">4×3</span> : <span className="text-green-500">5×3</span>
              </div>
              <div className="font-bold text-lg">
                <span className="text-amber-500">12</span> : <span className="text-green-500">15</span>
              </div>
            </div>
          </motion.div>

          {/* Final Result */}
          <motion.div
            className="p-4 rounded-xl bg-green-primary/10 border-2 border-green-primary"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: step >= 3 ? 1 : 0.3, scale: step >= 3 ? 1 : 0.9 }}
            transition={{ delay: 0.7 }}
          >
            <div className="text-sm text-center text-muted-foreground mb-2">Combined Ratio</div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">A</span>
              <span className="text-xl font-bold">:</span>
              <span className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">B</span>
              <span className="text-xl font-bold">:</span>
              <span className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">C</span>
            </div>
            <motion.div
              className="text-2xl font-bold text-center mt-2 text-green-primary"
              animate={step >= 3 ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              8 : 12 : 15
            </motion.div>
          </motion.div>

          {/* Visual Bar */}
          <motion.div
            className="mt-4 w-full max-w-xs h-6 rounded-full overflow-hidden flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 3 ? 1 : 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="bg-blue-500 flex items-center justify-center text-xs text-white font-bold" style={{ width: `${(8/35)*100}%` }}>8</div>
            <div className="bg-amber-500 flex items-center justify-center text-xs text-white font-bold" style={{ width: `${(12/35)*100}%` }}>12</div>
            <div className="bg-green-500 flex items-center justify-center text-xs text-white font-bold" style={{ width: `${(15/35)*100}%` }}>15</div>
          </motion.div>
        </div>

        {/* Step Indicator */}
        <motion.div
          className="absolute top-3 left-3 p-2 rounded-lg bg-card/95 border border-green-primary"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="text-xs font-semibold text-green-primary">Step {step + 1}/4</div>
        </motion.div>
      </div>
    </div>
  );
};

export default RatioProportionDiagram;
