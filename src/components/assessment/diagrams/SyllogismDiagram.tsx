import { motion } from 'framer-motion';

interface SyllogismDiagramProps {
  step: number;
}

const SyllogismDiagram = ({ step }: SyllogismDiagramProps) => {
  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-background to-green-light/20" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Venn Diagram */}
          <motion.div
            className="relative mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <svg width="280" height="180" viewBox="0 0 280 180">
              {/* Animals Circle (largest) */}
              <motion.circle
                cx="140"
                cy="90"
                r="70"
                fill="hsl(var(--green-primary) / 0.2)"
                stroke="hsl(var(--green-primary))"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              />
              <motion.text
                x="140"
                y="30"
                textAnchor="middle"
                className="text-sm font-bold fill-green-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Animals
              </motion.text>

              {/* Dogs Circle (inside Animals) */}
              <motion.circle
                cx="100"
                cy="100"
                r="35"
                fill="hsl(var(--blue-500) / 0.3)"
                stroke="hsl(var(--blue-500))"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: step >= 0 ? 1 : 0 }}
                transition={{ delay: 0.4 }}
              />
              <motion.text
                x="100"
                y="105"
                textAnchor="middle"
                className="text-xs font-bold fill-blue-600 dark:fill-blue-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: step >= 0 ? 1 : 0 }}
                transition={{ delay: 0.5 }}
              >
                Dogs
              </motion.text>

              {/* Cats Circle (partially overlapping Animals) */}
              <motion.circle
                cx="200"
                cy="90"
                r="40"
                fill="hsl(var(--amber-500) / 0.3)"
                stroke="hsl(var(--amber-500))"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: step >= 1 ? 1 : 0 }}
                transition={{ delay: 0.6 }}
              />
              <motion.text
                x="215"
                y="95"
                textAnchor="middle"
                className="text-xs font-bold fill-amber-600 dark:fill-amber-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: step >= 1 ? 1 : 0 }}
                transition={{ delay: 0.7 }}
              >
                Cats
              </motion.text>

              {/* Some label */}
              <motion.text
                x="175"
                y="75"
                textAnchor="middle"
                className="text-xs fill-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: step >= 1 ? 1 : 0 }}
                transition={{ delay: 0.8 }}
              >
                some
              </motion.text>

              {/* No overlap between Dogs and Cats */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: step >= 2 ? 1 : 0 }}
                transition={{ delay: 1 }}
              >
                <line x1="130" y1="95" x2="160" y2="85" stroke="hsl(var(--destructive))" strokeWidth="2" strokeDasharray="4,4" />
                <text x="145" y="80" textAnchor="middle" className="text-xs fill-destructive">No direct link!</text>
              </motion.g>
            </svg>
          </motion.div>

          {/* Statements */}
          <motion.div
            className="space-y-2 mb-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="px-3 py-1 rounded-lg bg-green-primary/10 border border-green-primary/30 text-sm">
              All dogs are animals
            </div>
            <div className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-sm">
              Some animals are cats
            </div>
          </motion.div>

          {/* Conclusions */}
          <motion.div
            className="grid grid-cols-2 gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/30 text-center">
              <div className="text-xs text-muted-foreground mb-1">Conclusion I</div>
              <div className="text-sm">"Some dogs are cats"</div>
              <motion.div
                className="text-lg font-bold text-destructive mt-1"
                initial={{ scale: 0 }}
                animate={{ scale: step >= 2 ? 1 : 0 }}
              >
                ✗ Does NOT follow
              </motion.div>
            </div>
            <div className="p-3 rounded-xl bg-success/10 border border-success text-center">
              <div className="text-xs text-muted-foreground mb-1">Conclusion II</div>
              <div className="text-sm">"Some cats are animals"</div>
              <motion.div
                className="text-lg font-bold text-success mt-1"
                initial={{ scale: 0 }}
                animate={{ scale: step >= 3 ? 1 : 0 }}
              >
                ✓ Follows!
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Tip */}
        <motion.div
          className="absolute bottom-3 left-3 p-2 rounded-lg bg-card/90 border border-muted text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 3 ? 1 : 0 }}
        >
          "Some A are B" ⟺ "Some B are A"
        </motion.div>
      </div>
    </div>
  );
};

export default SyllogismDiagram;
