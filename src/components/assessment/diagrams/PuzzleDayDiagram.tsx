import { motion } from 'framer-motion';

interface PuzzleDayDiagramProps {
  step: number;
  startDay?: string;
  daysToAdd?: number;
}

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const SHORT_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const PuzzleDayDiagram = ({ step, startDay = 'Monday', daysToAdd = 3 }: PuzzleDayDiagramProps) => {
  const startIndex = DAYS.indexOf(startDay);
  const endIndex = (startIndex + daysToAdd) % 7;
  const endDay = DAYS[endIndex];

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative bg-gradient-to-b from-purple-50 to-green-50 dark:from-green-900/20 dark:to-green-950/30">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-200/20 to-transparent dark:from-purple-900/10" />
        
        {/* Calendar icon */}
        <motion.div
          className="absolute top-4 right-4"
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 0 }}
        >
          <svg width="50" height="55" viewBox="0 0 50 55">
            <rect x="3" y="8" width="44" height="44" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--green-primary))" strokeWidth="2" />
            <rect x="3" y="8" width="44" height="12" rx="4" fill="hsl(var(--green-primary))" />
            <rect x="10" y="3" width="6" height="10" rx="2" fill="hsl(var(--green-dark))" />
            <rect x="34" y="3" width="6" height="10" rx="2" fill="hsl(var(--green-dark))" />
            <text x="25" y="40" textAnchor="middle" className="text-lg font-bold fill-green-primary">{daysToAdd}</text>
          </svg>
        </motion.div>

        {/* Week circle visualization */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <svg width="200" height="180" viewBox="0 0 200 180">
            {/* Circle background */}
            <circle cx="100" cy="85" r="60" fill="none" stroke="hsl(var(--green-light))" strokeWidth="12" opacity="0.3" />
            
            {/* Day markers */}
            {DAYS.map((day, i) => {
              const angle = (i * 360 / 7 - 90) * (Math.PI / 180);
              const x = 100 + Math.cos(angle) * 60;
              const y = 85 + Math.sin(angle) * 60;
              const isStart = i === startIndex;
              const isEnd = i === endIndex;
              
              return (
                <motion.g key={day}>
                  <motion.circle
                    cx={x}
                    cy={y}
                    r={isStart || isEnd ? 18 : 14}
                    fill={isStart ? 'hsl(var(--green-primary))' : isEnd && step >= 2 ? 'hsl(var(--green-dark))' : 'hsl(var(--green-light))'}
                    stroke={isStart || isEnd ? 'hsl(var(--green-dark))' : 'hsl(var(--green-muted))'}
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.08 * i }}
                  />
                  <text
                    x={x}
                    y={y + 4}
                    textAnchor="middle"
                    className={`text-xs font-bold ${isStart || (isEnd && step >= 2) ? 'fill-background' : 'fill-foreground'}`}
                  >
                    {SHORT_DAYS[i]}
                  </text>
                </motion.g>
              );
            })}
            
            {/* Animated path arrows */}
            {step >= 1 && Array.from({ length: daysToAdd }).map((_, i) => {
              const fromIndex = (startIndex + i) % 7;
              const toIndex = (startIndex + i + 1) % 7;
              const fromAngle = (fromIndex * 360 / 7 - 90) * (Math.PI / 180);
              const toAngle = (toIndex * 360 / 7 - 90) * (Math.PI / 180);
              const x1 = 100 + Math.cos(fromAngle) * 60;
              const y1 = 85 + Math.sin(fromAngle) * 60;
              const x2 = 100 + Math.cos(toAngle) * 60;
              const y2 = 85 + Math.sin(toAngle) * 60;
              const midAngle = ((fromIndex + 0.5) * 360 / 7 - 90) * (Math.PI / 180);
              const cx = 100 + Math.cos(midAngle) * 85;
              const cy = 85 + Math.sin(midAngle) * 85;
              
              return (
                <motion.path
                  key={i}
                  d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
                  stroke="hsl(var(--green-primary))"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="6,3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.25 * i, duration: 0.4 }}
                />
              );
            })}
            
            {/* Center label */}
            <text x="100" y="88" textAnchor="middle" className="text-sm font-bold fill-foreground">Week</text>
          </svg>
        </motion.div>

        {/* Linear day progression at bottom */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 20 }}
        >
          <div className="flex items-center gap-1">
            {Array.from({ length: daysToAdd + 1 }).map((_, i) => {
              const dayIndex = (startIndex + i) % 7;
              const isFirst = i === 0;
              const isLast = i === daysToAdd;
              
              return (
                <motion.div
                  key={i}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <div className={`px-2 py-1 rounded text-xs font-bold ${
                    isFirst ? 'bg-green-primary text-primary-foreground' :
                    isLast && step >= 2 ? 'bg-green-dark text-primary-foreground' :
                    'bg-green-light text-green-dark'
                  }`}>
                    {SHORT_DAYS[dayIndex]}
                  </div>
                  {!isLast && (
                    <motion.span className="mx-1 text-green-primary text-sm">→</motion.span>
                  )}
                </motion.div>
              );
            })}
          </div>
          <div className="text-center text-xs text-muted-foreground mt-1">
            {startDay} + {daysToAdd} days = {endDay}
          </div>
        </motion.div>

        {/* Formula Box */}
        <motion.div
          className="absolute top-4 left-4 p-3 rounded-lg bg-card/95 border border-border shadow-lg max-w-[180px]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-xs font-semibold text-muted-foreground mb-1">Day Puzzle</div>
          <div className="text-sm font-bold text-foreground">
            {step === 0 && (
              <div className="space-y-1">
                <div>Today: <span className="text-green-primary">{startDay}</span></div>
                <div>Add: <span className="text-green-primary">{daysToAdd} days</span></div>
              </div>
            )}
            {step === 1 && (
              <div className="space-y-1">
                <div>Count forward:</div>
                {Array.from({ length: daysToAdd }).map((_, i) => (
                  <div key={i} className="text-xs text-muted-foreground">
                    +1 → {DAYS[(startIndex + i + 1) % 7]}
                  </div>
                ))}
              </div>
            )}
            {step >= 2 && (
              <motion.div 
                className="p-2 bg-green-primary/10 rounded text-center"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-xs text-muted-foreground">Answer</div>
                <div className="text-lg text-green-primary font-bold">{endDay}</div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PuzzleDayDiagram;