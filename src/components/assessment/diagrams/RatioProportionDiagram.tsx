import { motion } from 'framer-motion';

interface RatioProportionDiagramProps {
  step: number;
}

const RatioProportionDiagram = ({ step }: RatioProportionDiagramProps) => {
  return (
    <div className="diagram-container">
      <div className="diagram-scene relative bg-gradient-to-br from-green-soft/20 via-background to-green-light/20">
        {/* Step Indicator */}
        <motion.div
          className="absolute top-3 left-3 px-2 py-1 rounded-lg bg-card/95 border border-green-primary text-xs font-bold text-green-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Step {step + 1}/4
        </motion.div>

        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Initial Ratios */}
          <motion.div
            className="flex gap-4 mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-blue-500/20 border border-blue-500 text-xs">
              <span className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs">A</span>
              <span>:</span>
              <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs">B</span>
              <span>=</span>
              <span className="font-bold text-blue-600 dark:text-blue-400">2:3</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-500/20 border border-amber-500 text-xs">
              <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs">B</span>
              <span>:</span>
              <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xs">C</span>
              <span>=</span>
              <span className="font-bold text-amber-600 dark:text-amber-400">4:5</span>
            </div>
          </motion.div>

          {/* LCM */}
          <motion.div
            className="p-2 rounded-lg bg-card/90 border border-border text-center text-xs mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
          >
            <div className="text-muted-foreground">Make B same: LCM(3,4) = <span className="font-bold text-green-primary">12</span></div>
          </motion.div>

          {/* Scaled Ratios */}
          <motion.div
            className="flex gap-3 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3 }}
          >
            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/50 text-center text-xs">
              <div className="text-muted-foreground">×4</div>
              <div className="font-bold"><span className="text-blue-500">8</span>:<span className="text-amber-500">12</span></div>
            </div>
            <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/50 text-center text-xs">
              <div className="text-muted-foreground">×3</div>
              <div className="font-bold"><span className="text-amber-500">12</span>:<span className="text-green-500">15</span></div>
            </div>
          </motion.div>

          {/* Final Result */}
          <motion.div
            className="p-3 rounded-xl bg-green-primary/10 border-2 border-green-primary text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: step >= 3 ? 1 : 0.3, scale: step >= 3 ? 1 : 0.9 }}
          >
            <div className="text-xs text-muted-foreground mb-1">Combined Ratio A:B:C</div>
            <motion.div
              className="text-xl font-bold text-green-primary"
              animate={step >= 3 ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              8 : 12 : 15
            </motion.div>
          </motion.div>

          {/* Visual Bar */}
          <motion.div
            className="mt-3 w-full max-w-xs h-5 rounded-full overflow-hidden flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 3 ? 1 : 0 }}
          >
            <div className="bg-blue-500 flex items-center justify-center text-xs text-white font-bold" style={{ width: `${(8/35)*100}%` }}>8</div>
            <div className="bg-amber-500 flex items-center justify-center text-xs text-white font-bold" style={{ width: `${(12/35)*100}%` }}>12</div>
            <div className="bg-green-500 flex items-center justify-center text-xs text-white font-bold" style={{ width: `${(15/35)*100}%` }}>15</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RatioProportionDiagram;
