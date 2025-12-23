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
      <div className="diagram-scene relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-bg-card to-green-light/30" />
        
        {/* Calendar visualization */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <svg width="340" height="200" viewBox="0 0 340 200">
            {/* Week circle */}
            <circle cx="170" cy="100" r="80" fill="none" stroke="hsl(var(--green-light))" strokeWidth="20" opacity="0.3" />
            
            {/* Day markers */}
            {DAYS.map((day, i) => {
              const angle = (i * 360 / 7 - 90) * (Math.PI / 180);
              const x = 170 + Math.cos(angle) * 80;
              const y = 100 + Math.sin(angle) * 80;
              const isStart = i === startIndex;
              const isEnd = i === endIndex;
              const isInPath = step >= 2 && (
                (startIndex < endIndex && i > startIndex && i <= endIndex) ||
                (startIndex === endIndex && i === startIndex)
              );
              
              return (
                <motion.g key={day}>
                  <motion.circle
                    cx={x}
                    cy={y}
                    r={isStart || isEnd ? 22 : 18}
                    fill={isStart ? 'hsl(var(--green-primary))' : isEnd && step >= 3 ? 'hsl(var(--green-dark))' : isInPath ? 'hsl(var(--green-muted))' : 'hsl(var(--green-light))'}
                    stroke={isStart || isEnd ? 'hsl(var(--green-dark))' : 'hsl(var(--green-muted))'}
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: 1,
                      boxShadow: isEnd && step >= 3 ? '0 0 20px rgba(15,44,31,0.5)' : 'none'
                    }}
                    transition={{ delay: 0.1 * i }}
                  />
                  <text
                    x={x}
                    y={y + 4}
                    textAnchor="middle"
                    className={`text-xs font-bold ${isStart || (isEnd && step >= 3) ? 'fill-background' : 'fill-foreground'}`}
                  >
                    {SHORT_DAYS[i]}
                  </text>
                </motion.g>
              );
            })}
            
            {/* Animated arrow path */}
            {step >= 2 && (
              <>
                {Array.from({ length: daysToAdd }).map((_, i) => {
                  const fromIndex = (startIndex + i) % 7;
                  const toIndex = (startIndex + i + 1) % 7;
                  const fromAngle = (fromIndex * 360 / 7 - 90) * (Math.PI / 180);
                  const toAngle = (toIndex * 360 / 7 - 90) * (Math.PI / 180);
                  const x1 = 170 + Math.cos(fromAngle) * 80;
                  const y1 = 100 + Math.sin(fromAngle) * 80;
                  const x2 = 170 + Math.cos(toAngle) * 80;
                  const y2 = 100 + Math.sin(toAngle) * 80;
                  
                  // Calculate arc control point
                  const midAngle = ((fromIndex + 0.5) * 360 / 7 - 90) * (Math.PI / 180);
                  const cx = 170 + Math.cos(midAngle) * 110;
                  const cy = 100 + Math.sin(midAngle) * 110;
                  
                  return (
                    <motion.path
                      key={i}
                      d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
                      stroke="hsl(var(--green-primary))"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8,4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.3 * i, duration: 0.5 }}
                    />
                  );
                })}
              </>
            )}
            
            {/* Step numbers on path */}
            {step >= 2 && Array.from({ length: daysToAdd }).map((_, i) => {
              const midIndex = startIndex + i + 0.5;
              const midAngle = (midIndex * 360 / 7 - 90) * (Math.PI / 180);
              const x = 170 + Math.cos(midAngle) * 110;
              const y = 100 + Math.sin(midAngle) * 110;
              
              return (
                <motion.g key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + 0.2 * i }}>
                  <circle cx={x} cy={y} r="12" fill="hsl(var(--card))" stroke="hsl(var(--green-primary))" strokeWidth="2" />
                  <text x={x} y={y + 4} textAnchor="middle" className="text-xs font-bold fill-green-primary">+1</text>
                </motion.g>
              );
            })}
            
            {/* Labels */}
            <motion.text
              x="170"
              y="100"
              textAnchor="middle"
              className="text-sm font-bold fill-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Week
            </motion.text>
          </svg>
        </motion.div>

        {/* Linear day representation */}
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
                  <div className={`px-3 py-2 rounded-lg text-xs font-bold ${
                    isFirst ? 'bg-green-primary text-primary-foreground' :
                    isLast && step >= 3 ? 'bg-green-dark text-primary-foreground' :
                    'bg-green-light text-green-dark'
                  }`}>
                    {SHORT_DAYS[dayIndex]}
                  </div>
                  {!isLast && (
                    <motion.div
                      className="mx-1 text-green-primary font-bold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 + 0.1 * i }}
                    >
                      →
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
          <div className="text-center text-xs text-muted-foreground mt-2">
            {startDay} + {daysToAdd} days = {endDay}
          </div>
        </motion.div>

        {/* Formula Box */}
        <motion.div
          className="absolute top-4 left-4 p-4 rounded-xl bg-card/95 border-2 border-green-primary shadow-lg max-w-[220px]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-xs font-semibold text-green-muted mb-2">Day Puzzle</div>
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
                <div className="text-green-primary">{startDay} → ?</div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-1">
                <div>Counting:</div>
                {Array.from({ length: daysToAdd }).map((_, i) => (
                  <div key={i} className="text-xs text-muted-foreground">
                    +1 → {DAYS[(startIndex + i + 1) % 7]}
                  </div>
                ))}
              </div>
            )}
            {step === 3 && (
              <motion.div 
                className="p-3 bg-green-primary/10 rounded-lg text-center"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-xs text-muted-foreground">Answer</div>
                <div className="text-lg text-green-primary font-bold">{endDay}</div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Calendar icon */}
        <motion.div
          className="absolute top-4 right-4"
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 0 }}
        >
          <svg width="60" height="70" viewBox="0 0 60 70">
            <rect x="5" y="10" width="50" height="55" rx="5" fill="hsl(var(--card))" stroke="hsl(var(--green-primary))" strokeWidth="2" />
            <rect x="5" y="10" width="50" height="15" rx="5" fill="hsl(var(--green-primary))" />
            <rect x="10" y="5" width="8" height="12" rx="2" fill="hsl(var(--green-dark))" />
            <rect x="42" y="5" width="8" height="12" rx="2" fill="hsl(var(--green-dark))" />
            <text x="30" y="50" textAnchor="middle" className="text-lg font-bold fill-green-primary">{daysToAdd}</text>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default PuzzleDayDiagram;
