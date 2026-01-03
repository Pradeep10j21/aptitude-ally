import { motion } from 'framer-motion';

interface AgeProblemDiagramProps {
  step: number;
}

const AgeProblemDiagram = ({ step }: AgeProblemDiagramProps) => {
  const sonAge = 8;
  const fatherAge = 32;
  const years = 16;

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative bg-gradient-to-br from-green-soft/20 via-background to-green-light/20">
        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Timeline */}
          <div className="w-full max-w-md mb-4">
            <div className="flex justify-between items-start">
              {/* Present */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="text-xs text-muted-foreground mb-1">NOW</div>
                <div className="flex gap-2">
                  <div className="flex flex-col items-center">
                    <div className="text-2xl">👦</div>
                    <div className="px-2 py-1 rounded bg-blue-500/20 border border-blue-500">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                        {step >= 3 ? `${sonAge}y` : 'x'}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-2xl">👨</div>
                    <div className="px-2 py-1 rounded bg-amber-500/20 border border-amber-500">
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                        {step >= 3 ? `${fatherAge}y` : '4x'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-green-primary font-bold mt-1">F = 4×S</div>
              </motion.div>

              {/* Arrow */}
              <motion.div
                className="flex flex-col items-center pt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: step >= 1 ? 1 : 0.3 }}
              >
                <div className="text-xs font-bold text-green-primary">+{years}y</div>
                <span className="text-xl">→</span>
              </motion.div>

              {/* Future */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: step >= 1 ? 1 : 0.3, x: 0 }}
              >
                <div className="text-xs text-muted-foreground mb-1">AFTER {years}Y</div>
                <div className="flex gap-2">
                  <div className="flex flex-col items-center">
                    <div className="text-2xl">👦</div>
                    <div className="px-2 py-1 rounded bg-blue-500/20 border border-blue-500">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                        {step >= 3 ? `${sonAge + years}` : 'x+16'}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-2xl">👨</div>
                    <div className="px-2 py-1 rounded bg-amber-500/20 border border-amber-500">
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                        {step >= 3 ? `${fatherAge + years}` : '4x+16'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-green-primary font-bold mt-1">F = 2×S</div>
              </motion.div>
            </div>
          </div>

          {/* Equation */}
          <motion.div
            className="p-3 rounded-xl bg-card/90 border border-border text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3, y: 0 }}
          >
            <div className="space-y-1 text-xs font-mono">
              <div>4x + 16 = 2(x + 16)</div>
              <div>4x + 16 = 2x + 32</div>
              <div>2x = 16</div>
              <motion.div
                className="text-lg font-bold text-green-primary"
                animate={step >= 3 ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              >
                x = 8 years
              </motion.div>
            </div>
          </motion.div>

          {/* Verification */}
          <motion.div
            className="mt-2 p-2 rounded-lg bg-success/10 border border-success text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 3 ? 1 : 0 }}
          >
            ✓ After 16y → Son=24, Father=48 = 2×24
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AgeProblemDiagram;
