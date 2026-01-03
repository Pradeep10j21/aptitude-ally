import { motion } from 'framer-motion';

interface ClockDiagramProps {
  step: number;
}

const ClockDiagram = ({ step }: ClockDiagramProps) => {
  // At 3:32 8/11, hands are at right angle
  const minuteAngle = step >= 3 ? (360 / 11) * 6 : 0; // ~196.36 degrees from 12
  const hourAngle = step >= 3 ? 90 + (360 / 11) * 0.5 : 90; // Starting at 90 (3 o'clock) + movement

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-background to-green-light/20" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Clock */}
          <motion.div
            className="relative mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <svg width="180" height="180" viewBox="0 0 180 180">
              {/* Clock face */}
              <circle cx="90" cy="90" r="85" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="3" />
              <circle cx="90" cy="90" r="80" fill="none" stroke="hsl(var(--muted))" strokeWidth="1" />
              
              {/* Hour markers */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30 - 90) * (Math.PI / 180);
                const x1 = 90 + 70 * Math.cos(angle);
                const y1 = 90 + 70 * Math.sin(angle);
                const x2 = 90 + 75 * Math.cos(angle);
                const y2 = 90 + 75 * Math.sin(angle);
                return (
                  <line
                    key={i}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="hsl(var(--foreground))"
                    strokeWidth={i % 3 === 0 ? 3 : 1}
                  />
                );
              })}
              
              {/* Numbers */}
              {[12, 3, 6, 9].map((num) => {
                const angle = ((num === 12 ? 0 : num) * 30 - 90) * (Math.PI / 180);
                const x = 90 + 60 * Math.cos(angle);
                const y = 90 + 60 * Math.sin(angle) + 4;
                return (
                  <text
                    key={num}
                    x={x}
                    y={y}
                    textAnchor="middle"
                    className="text-sm font-bold fill-foreground"
                  >
                    {num}
                  </text>
                );
              })}

              {/* Hour hand */}
              <motion.line
                x1="90" y1="90"
                x2="90" y2="50"
                stroke="hsl(var(--green-dark))"
                strokeWidth="4"
                strokeLinecap="round"
                style={{ transformOrigin: '90px 90px' }}
                initial={{ rotate: 90 }}
                animate={{ rotate: step >= 3 ? 98 : 90 }}
                transition={{ duration: 1 }}
              />

              {/* Minute hand */}
              <motion.line
                x1="90" y1="90"
                x2="90" y2="25"
                stroke="hsl(var(--green-primary))"
                strokeWidth="3"
                strokeLinecap="round"
                style={{ transformOrigin: '90px 90px' }}
                initial={{ rotate: 0 }}
                animate={{ rotate: step >= 3 ? 196 : 0 }}
                transition={{ duration: 1.5 }}
              />

              {/* Center dot */}
              <circle cx="90" cy="90" r="5" fill="hsl(var(--green-primary))" />

              {/* Right angle indicator */}
              {step >= 3 && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <path
                    d="M 100 75 L 100 85 L 90 85"
                    fill="none"
                    stroke="hsl(var(--destructive))"
                    strokeWidth="2"
                  />
                  <text x="108" y="78" className="text-xs fill-destructive font-bold">90°</text>
                </motion.g>
              )}
            </svg>
          </motion.div>

          {/* Formula */}
          <motion.div
            className="p-3 rounded-xl bg-card/90 border border-border text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-xs text-muted-foreground mb-1">Angle between hands formula:</div>
            <div className="font-mono text-sm">|30H - 5.5M| = 90° (for right angle)</div>
          </motion.div>

          {/* Calculation */}
          <motion.div
            className="p-4 rounded-xl bg-card/90 border border-border text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="space-y-1 text-sm font-mono">
              <div>At H = 3: |90 - 5.5M| = 90</div>
              <div>5.5M - 90 = 90</div>
              <div>5.5M = 180</div>
              <motion.div
                className="text-lg font-bold text-green-primary"
                animate={step >= 3 ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              >
                M = 360/11 = 32 8/11 min
              </motion.div>
            </div>
          </motion.div>

          {/* Answer */}
          <motion.div
            className="mt-4 px-6 py-2 rounded-full bg-green-primary text-primary-foreground font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: step >= 3 ? 1 : 0, scale: step >= 3 ? 1 : 0.9 }}
            transition={{ delay: 1 }}
          >
            Time: 3:32 8/11 minutes
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClockDiagram;
