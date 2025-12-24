import { motion } from 'framer-motion';

interface TimeWorkDiagramProps {
  step: number;
  totalDays?: number;
}

const TimeWorkDiagram = ({ step, totalDays = 12 }: TimeWorkDiagramProps) => {
  return (
    <div className="diagram-container">
      <div className="diagram-scene relative bg-gradient-to-b from-sky-100 to-green-50 dark:from-green-900/20 dark:to-green-950/30">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-200/30 to-transparent dark:from-blue-900/20" />
        
        {/* Sun decoration */}
        <motion.div
          className="absolute top-4 right-6 w-10 h-10 rounded-full bg-yellow-300 dark:bg-yellow-500"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ boxShadow: '0 0 20px rgba(250, 204, 21, 0.5)' }}
        />

        {/* Factory/Work background */}
        <svg className="absolute bottom-14 left-0 w-full h-24" viewBox="0 0 400 100" preserveAspectRatio="none">
          <rect x="20" y="40" width="60" height="60" fill="hsl(var(--green-muted))" opacity="0.4" />
          <rect x="80" y="50" width="40" height="50" fill="hsl(var(--green-dark))" opacity="0.5" />
          <polygon points="20,40 50,15 80,40" fill="hsl(var(--green-dark))" opacity="0.5" />
          <rect x="300" y="30" width="80" height="70" fill="hsl(var(--green-muted))" opacity="0.4" />
          <rect x="320" y="45" width="20" height="25" fill="hsl(var(--background))" opacity="0.6" />
        </svg>
        
        {/* Ground */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-green-700 to-green-600 dark:from-green-800 dark:to-green-700" />

        {/* Worker SVG */}
        <motion.div
          className="absolute left-8 bottom-14"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <svg width="60" height="80" viewBox="0 0 60 80">
            {/* Head */}
            <motion.circle 
              cx="30" cy="18" r="14" 
              fill="hsl(var(--green-dark))"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {/* Face */}
            <circle cx="26" cy="16" r="2" fill="hsl(var(--background))" />
            <circle cx="34" cy="16" r="2" fill="hsl(var(--background))" />
            <path d="M 26 22 Q 30 26 34 22" stroke="hsl(var(--background))" strokeWidth="2" fill="none" />
            {/* Hard hat */}
            <ellipse cx="30" cy="8" rx="14" ry="6" fill="hsl(var(--warning))" />
            {/* Body */}
            <rect x="18" y="34" width="24" height="28" rx="4" fill="hsl(var(--green-primary))" />
            {/* Arms */}
            <motion.rect 
              x="8" y="38" width="10" height="6" rx="3" 
              fill="hsl(var(--green-dark))"
              animate={{ rotate: step >= 1 ? [0, -10, 0] : 0 }}
              transition={{ duration: 0.6, repeat: step >= 1 ? Infinity : 0 }}
              style={{ originX: '100%', originY: '50%' }}
            />
            <motion.rect 
              x="42" y="38" width="10" height="6" rx="3" 
              fill="hsl(var(--green-dark))"
              animate={{ rotate: step >= 1 ? [0, 10, 0] : 0 }}
              transition={{ duration: 0.6, repeat: step >= 1 ? Infinity : 0, delay: 0.3 }}
              style={{ originX: '0%', originY: '50%' }}
            />
            {/* Legs */}
            <rect x="20" y="62" width="8" height="16" rx="3" fill="hsl(var(--green-dark))" />
            <rect x="32" y="62" width="8" height="16" rx="3" fill="hsl(var(--green-dark))" />
          </svg>
          <div className="text-center text-xs font-bold text-foreground mt-1">Person A</div>
        </motion.div>

        {/* Work Progress Visualization */}
        <motion.div
          className="absolute right-6 top-1/2 -translate-y-1/2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-sm font-semibold text-foreground mb-2 text-center">Total Work = 1 Unit</div>
          
          {/* Days grid - 4 columns */}
          <div className="grid grid-cols-4 gap-1 mb-3">
            {Array.from({ length: totalDays }).map((_, i) => (
              <motion.div
                key={i}
                className={`w-7 h-7 rounded flex items-center justify-center text-xs font-bold ${
                  step >= 2 && i === 0 
                    ? 'bg-green-primary text-primary-foreground' 
                    : 'bg-green-light/50 text-green-dark'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.05 * i }}
              >
                {i + 1}
              </motion.div>
            ))}
          </div>
          
          {/* Progress bar */}
          <div className="h-5 bg-green-light/30 rounded-full overflow-hidden border-2 border-green-muted">
            <motion.div
              className="h-full bg-gradient-to-r from-green-primary to-green-dark"
              initial={{ width: '0%' }}
              animate={{ width: step >= 2 ? `${(1/12) * 100}%` : '0%' }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          <div className="text-center text-xs text-muted-foreground mt-1">
            {step >= 2 ? '1 day = 1/12 work' : 'Progress'}
          </div>
        </motion.div>

        {/* Formula Box */}
        <motion.div
          className="absolute top-4 left-4 p-3 rounded-lg bg-card/95 border border-border shadow-lg max-w-[180px]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-xs font-semibold text-muted-foreground mb-1">Time & Work Formula</div>
          <div className="text-sm font-bold text-foreground">
            {step === 0 && (
              <div className="space-y-1">
                <div>Work per day = 1 ÷ Total days</div>
              </div>
            )}
            {step === 1 && (
              <div className="space-y-1">
                <div>A takes {totalDays} days</div>
                <div className="text-green-primary">Work per day = ?</div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-1">
                <div>Work per day = 1 ÷ {totalDays}</div>
                <motion.div 
                  className="text-lg text-green-primary"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                >
                  = 1/{totalDays} ✓
                </motion.div>
              </div>
            )}
            {step >= 3 && (
              <motion.div 
                className="p-2 bg-green-primary/10 rounded text-center"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-xs text-muted-foreground">Answer</div>
                <div className="text-xl text-green-primary font-bold">1/{totalDays}</div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Pie visualization when step >= 2 */}
        {step >= 2 && (
          <motion.div
            className="absolute bottom-16 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <svg width="70" height="70" viewBox="0 0 70 70">
              <circle cx="35" cy="35" r="28" fill="hsl(var(--green-light))" opacity="0.5" />
              <motion.path
                d="M 35 35 L 35 7 A 28 28 0 0 1 58 49 Z"
                fill="hsl(var(--green-primary))"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <text x="35" y="38" textAnchor="middle" className="text-xs font-bold fill-foreground">1/{totalDays}</text>
            </svg>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TimeWorkDiagram;