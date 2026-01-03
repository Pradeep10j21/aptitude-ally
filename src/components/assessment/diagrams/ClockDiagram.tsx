import { motion } from 'framer-motion';

interface ClockDiagramProps {
  step: number;
}

const ClockDiagram = ({ step }: ClockDiagramProps) => {
  return (
    <div className="diagram-container">
      <div className="diagram-scene relative bg-gradient-to-br from-green-soft/20 via-background to-green-light/20">
        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Clock */}
          <motion.div
            className="relative mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <svg width="140" height="140" viewBox="0 0 140 140">
              {/* Clock face */}
              <circle cx="70" cy="70" r="65" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="3" />
              
              {/* Hour markers */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30 - 90) * (Math.PI / 180);
                const x1 = 70 + 52 * Math.cos(angle);
                const y1 = 70 + 52 * Math.sin(angle);
                const x2 = 70 + 58 * Math.cos(angle);
                const y2 = 70 + 58 * Math.sin(angle);
                return (
                  <line
                    key={i}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="hsl(var(--foreground))"
                    strokeWidth={i % 3 === 0 ? 2 : 1}
                  />
                );
              })}
              
              {/* Numbers */}
              {[12, 3, 6, 9].map((num) => {
                const angle = ((num === 12 ? 0 : num) * 30 - 90) * (Math.PI / 180);
                const x = 70 + 45 * Math.cos(angle);
                const y = 70 + 45 * Math.sin(angle) + 3;
                return (
                  <text key={num} x={x} y={y} textAnchor="middle" className="text-xs font-bold fill-foreground">
                    {num}
                  </text>
                );
              })}

              {/* Hour hand */}
              <motion.line
                x1="70" y1="70" x2="70" y2="40"
                stroke="hsl(var(--green-dark))"
                strokeWidth="3"
                strokeLinecap="round"
                style={{ transformOrigin: '70px 70px' }}
                initial={{ rotate: 90 }}
                animate={{ rotate: step >= 3 ? 98 : 90 }}
                transition={{ duration: 1 }}
              />

              {/* Minute hand */}
              <motion.line
                x1="70" y1="70" x2="70" y2="22"
                stroke="hsl(var(--green-primary))"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ transformOrigin: '70px 70px' }}
                initial={{ rotate: 0 }}
                animate={{ rotate: step >= 3 ? 196 : 0 }}
                transition={{ duration: 1.5 }}
              />

              {/* Center */}
              <circle cx="70" cy="70" r="4" fill="hsl(var(--green-primary))" />

              {/* Right angle indicator */}
              {step >= 3 && (
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <path d="M 78 58 L 78 66 L 70 66" fill="none" stroke="hsl(var(--destructive))" strokeWidth="2" />
                  <text x="85" y="55" className="text-xs fill-destructive font-bold">90°</text>
                </motion.g>
              )}
            </svg>
          </motion.div>

          {/* Formula */}
          <motion.div
            className="p-2 rounded-lg bg-card/90 border border-border text-center mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
          >
            <div className="text-xs text-muted-foreground">Angle formula:</div>
            <div className="font-mono text-xs">|30H - 5.5M| = 90°</div>
          </motion.div>

          {/* Calculation */}
          <motion.div
            className="p-3 rounded-xl bg-card/90 border border-border text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3 }}
          >
            <div className="space-y-1 text-xs font-mono">
              <div>At H=3: |90 - 5.5M| = 90</div>
              <div>5.5M = 180</div>
              <motion.div
                className="text-base font-bold text-green-primary"
                animate={step >= 3 ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              >
                M = 32 8/11 min
              </motion.div>
            </div>
          </motion.div>

          {/* Answer */}
          <motion.div
            className="mt-2 px-4 py-1 rounded-full bg-green-primary text-primary-foreground font-bold text-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: step >= 3 ? 1 : 0, scale: step >= 3 ? 1 : 0.9 }}
          >
            Time: 3:32 8/11
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClockDiagram;
