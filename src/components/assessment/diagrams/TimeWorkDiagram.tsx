import { motion } from 'framer-motion';

interface TimeWorkDiagramProps {
  step: number;
  totalDays?: number;
}

const TimeWorkDiagram = ({ step, totalDays = 12 }: TimeWorkDiagramProps) => {
  const workPerDay = 1 / totalDays;
  const completedDays = step >= 2 ? 1 : 0;
  const progressWidth = (completedDays / totalDays) * 100;

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/30 via-bg-card to-green-light/20" />
        
        {/* Decorative circles */}
        <motion.div
          className="absolute top-4 right-4 w-20 h-20 rounded-full bg-green-primary/10"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Worker SVG */}
        <motion.div
          className="absolute left-8 bottom-20"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <svg width="80" height="120" viewBox="0 0 80 120">
            {/* Head */}
            <motion.circle 
              cx="40" cy="25" r="18" 
              fill="hsl(var(--green-dark))"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {/* Face */}
            <circle cx="35" cy="22" r="2" fill="hsl(var(--background))" />
            <circle cx="45" cy="22" r="2" fill="hsl(var(--background))" />
            <path d="M 35 30 Q 40 35 45 30" stroke="hsl(var(--background))" strokeWidth="2" fill="none" />
            {/* Body */}
            <rect x="25" y="45" width="30" height="40" rx="5" fill="hsl(var(--green-primary))" />
            {/* Arms */}
            <motion.rect 
              x="10" y="50" width="15" height="8" rx="4" 
              fill="hsl(var(--green-dark))"
              animate={{ rotate: step >= 1 ? [0, -15, 0] : 0 }}
              transition={{ duration: 0.8, repeat: step >= 1 ? Infinity : 0 }}
              style={{ originX: '100%', originY: '50%' }}
            />
            <motion.rect 
              x="55" y="50" width="15" height="8" rx="4" 
              fill="hsl(var(--green-dark))"
              animate={{ rotate: step >= 1 ? [0, 15, 0] : 0 }}
              transition={{ duration: 0.8, repeat: step >= 1 ? Infinity : 0, delay: 0.4 }}
              style={{ originX: '0%', originY: '50%' }}
            />
            {/* Legs */}
            <rect x="28" y="85" width="10" height="25" rx="4" fill="hsl(var(--green-dark))" />
            <rect x="42" y="85" width="10" height="25" rx="4" fill="hsl(var(--green-dark))" />
            {/* Label */}
            <text x="40" y="130" textAnchor="middle" className="text-xs font-bold fill-foreground">Person A</text>
          </svg>
        </motion.div>

        {/* Work Progress Bar */}
        <motion.div
          className="absolute right-8 top-1/2 -translate-y-1/2 w-48"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-sm font-semibold text-foreground mb-2 text-center">Total Work</div>
          
          {/* Days grid */}
          <div className="grid grid-cols-4 gap-1 mb-4">
            {Array.from({ length: totalDays }).map((_, i) => (
              <motion.div
                key={i}
                className={`h-8 rounded flex items-center justify-center text-xs font-bold ${
                  step >= 2 && i === 0 
                    ? 'bg-green-primary text-primary-foreground' 
                    : 'bg-green-light/50 text-green-dark'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 * i }}
              >
                {i + 1}
              </motion.div>
            ))}
          </div>
          
          {/* Progress bar */}
          <div className="h-6 bg-green-light/30 rounded-full overflow-hidden border-2 border-green-muted">
            <motion.div
              className="h-full bg-gradient-to-r from-green-primary to-green-dark"
              initial={{ width: '0%' }}
              animate={{ width: step >= 2 ? `${(1/12) * 100}%` : '0%' }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          <div className="text-center text-xs text-muted-foreground mt-1">
            {step >= 2 ? '1 day completed' : 'Work progress'}
          </div>
        </motion.div>

        {/* Formula Box */}
        <motion.div
          className="absolute top-4 left-4 p-4 rounded-xl bg-card/95 border-2 border-green-muted shadow-lg max-w-xs"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-xs font-semibold text-green-muted mb-2">Time & Work Formula</div>
          <div className="text-sm font-bold text-foreground">
            {step === 0 && (
              <div className="space-y-1">
                <div>Work done per day = 1 ÷ Total days</div>
              </div>
            )}
            {step === 1 && (
              <div className="space-y-1">
                <div>A completes work in {totalDays} days</div>
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
            {step === 3 && (
              <div className="space-y-2">
                <div className="text-muted-foreground">If total work = 1 unit</div>
                <div>1 day work = 1/{totalDays} unit</div>
                <motion.div 
                  className="p-2 bg-green-primary/10 rounded text-green-primary font-bold"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Answer: 1/{totalDays}
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Pie chart visualization */}
        {step >= 2 && (
          <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="hsl(var(--green-light))" opacity="0.5" />
              <motion.path
                d="M 50 50 L 50 10 A 40 40 0 0 1 77.3 70 Z"
                fill="hsl(var(--green-primary))"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
              />
              <text x="50" y="55" textAnchor="middle" className="text-xs font-bold fill-foreground">1/{totalDays}</text>
            </svg>
            <div className="text-center text-xs text-muted-foreground">1 Day's Work</div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TimeWorkDiagram;
