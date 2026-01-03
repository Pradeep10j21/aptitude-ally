import { motion } from 'framer-motion';

interface AgeProblemDiagramProps {
  step: number;
}

const AgeProblemDiagram = ({ step }: AgeProblemDiagramProps) => {
  // Son = x, Father = 4x
  // After 16 years: 4x + 16 = 2(x + 16)
  // 4x + 16 = 2x + 32, 2x = 16, x = 8

  const sonAge = 8;
  const fatherAge = 32;
  const years = 16;

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-background to-green-light/20" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Timeline */}
          <motion.div
            className="w-full max-w-md mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex justify-between items-center">
              {/* Present */}
              <div className="text-center">
                <div className="text-xs text-muted-foreground mb-2">PRESENT</div>
                <div className="flex gap-4">
                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="text-3xl">👦</div>
                    <div className="mt-1 px-3 py-1 rounded-lg bg-blue-500/20 border border-blue-500">
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                        {step >= 3 ? `${sonAge} yrs` : 'x'}
                      </span>
                    </div>
                    <div className="text-xs mt-1 text-muted-foreground">Son</div>
                  </motion.div>
                  
                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="text-3xl">👨</div>
                    <div className="mt-1 px-3 py-1 rounded-lg bg-amber-500/20 border border-amber-500">
                      <span className="text-sm font-bold text-amber-600 dark:text-amber-400">
                        {step >= 3 ? `${fatherAge} yrs` : '4x'}
                      </span>
                    </div>
                    <div className="text-xs mt-1 text-muted-foreground">Father</div>
                  </motion.div>
                </div>
                <motion.div
                  className="mt-2 text-xs text-green-primary font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: step >= 0 ? 1 : 0 }}
                >
                  Father = 4 × Son
                </motion.div>
              </div>

              {/* Arrow */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: step >= 1 ? 1 : 0.3 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-sm font-bold text-green-primary">+{years} years</div>
                <svg width="60" height="20" viewBox="0 0 60 20">
                  <path d="M 0 10 L 50 10 M 45 5 L 50 10 L 45 15" stroke="hsl(var(--green-primary))" strokeWidth="2" fill="none" />
                </svg>
              </motion.div>

              {/* Future */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: step >= 1 ? 1 : 0.3, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="text-xs text-muted-foreground mb-2">AFTER {years} YEARS</div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="text-3xl">👦</div>
                    <div className="mt-1 px-3 py-1 rounded-lg bg-blue-500/20 border border-blue-500">
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                        {step >= 3 ? `${sonAge + years}` : 'x+16'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="text-3xl">👨</div>
                    <div className="mt-1 px-3 py-1 rounded-lg bg-amber-500/20 border border-amber-500">
                      <span className="text-sm font-bold text-amber-600 dark:text-amber-400">
                        {step >= 3 ? `${fatherAge + years}` : '4x+16'}
                      </span>
                    </div>
                  </div>
                </div>
                <motion.div
                  className="mt-2 text-xs text-green-primary font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: step >= 1 ? 1 : 0 }}
                >
                  Father = 2 × Son
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Equation */}
          <motion.div
            className="p-4 rounded-xl bg-card/90 border border-border text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="space-y-2 text-sm font-mono">
              <div>4x + 16 = 2(x + 16)</div>
              <div>4x + 16 = 2x + 32</div>
              <div>2x = 16</div>
              <motion.div
                className="text-xl font-bold text-green-primary"
                animate={step >= 3 ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              >
                x = 8 years
              </motion.div>
            </div>
          </motion.div>

          {/* Verification */}
          <motion.div
            className="mt-4 p-2 rounded-lg bg-success/10 border border-success text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 3 ? 1 : 0 }}
            transition={{ delay: 1 }}
          >
            Verify: After 16 yrs → Son = 24, Father = 48 = 2 × 24 ✓
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AgeProblemDiagram;
