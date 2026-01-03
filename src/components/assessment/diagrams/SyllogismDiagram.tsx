import { motion } from 'framer-motion';

interface SyllogismDiagramProps {
  step: number;
}

const SyllogismDiagram = ({ step }: SyllogismDiagramProps) => {
  return (
    <div className="diagram-container">
      <div className="diagram-scene relative bg-gradient-to-br from-green-soft/20 via-background to-green-light/20">
        {/* Tip - Step 3 */}
        {step >= 3 && (
          <motion.div
            className="absolute bottom-3 left-3 p-2 rounded-lg bg-card/90 border border-muted text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            "Some A are B" ⟺ "Some B are A"
          </motion.div>
        )}

        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Venn Diagram - Always visible */}
          <motion.div className="mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <svg width="220" height="130" viewBox="0 0 220 130">
              {/* Animals Circle */}
              <motion.circle
                cx="110"
                cy="65"
                r="55"
                fill="hsl(var(--green-primary) / 0.15)"
                stroke="hsl(var(--green-primary))"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              />
              <text x="110" y="25" textAnchor="middle" className="text-xs font-bold fill-green-primary">Animals</text>

              {/* Dogs Circle */}
              <motion.circle
                cx="80"
                cy="75"
                r="28"
                fill="hsl(var(--blue-500) / 0.25)"
                stroke="hsl(var(--blue-500))"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              />
              <text x="80" y="78" textAnchor="middle" className="text-xs font-bold fill-blue-600 dark:fill-blue-400">Dogs</text>

              {/* Cats Circle - Step 1 */}
              {step >= 1 && (
                <>
                  <motion.circle
                    cx="155"
                    cy="65"
                    r="32"
                    fill="hsl(var(--amber-500) / 0.25)"
                    stroke="hsl(var(--amber-500))"
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  />
                  <text x="165" y="68" textAnchor="middle" className="text-xs font-bold fill-amber-600 dark:fill-amber-400">Cats</text>
                </>
              )}

              {/* No link indicator - Step 2 */}
              {step >= 2 && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <line x1="105" y1="70" x2="125" y2="62" stroke="hsl(var(--destructive))" strokeWidth="2" strokeDasharray="3,3" />
                  <text x="115" y="55" textAnchor="middle" className="text-xs fill-destructive">✗</text>
                </motion.g>
              )}
            </svg>
          </motion.div>

          {/* Statements - Always visible */}
          <motion.div
            className="flex gap-2 mb-3 flex-wrap justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="px-2 py-1 rounded-lg bg-green-primary/10 border border-green-primary/30 text-xs">
              All dogs are animals
            </div>
            <div className="px-2 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs">
              Some animals are cats
            </div>
          </motion.div>

          {/* Conclusions - Step 2 */}
          {step >= 2 && (
            <motion.div
              className="grid grid-cols-2 gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="p-2 rounded-lg bg-destructive/10 border border-destructive/30 text-center">
                <div className="text-xs text-muted-foreground">Conclusion I</div>
                <div className="text-xs">"Some dogs are cats"</div>
                <motion.div
                  className="text-sm font-bold text-destructive"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  ✗ Doesn't follow
                </motion.div>
              </div>
              <div className="p-2 rounded-lg bg-success/10 border border-success text-center">
                <div className="text-xs text-muted-foreground">Conclusion II</div>
                <div className="text-xs">"Some cats are animals"</div>
                {step >= 3 && (
                  <motion.div
                    className="text-sm font-bold text-success"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    ✓ Follows!
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SyllogismDiagram;