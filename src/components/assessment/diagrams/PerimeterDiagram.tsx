import { motion } from 'framer-motion';

interface PerimeterDiagramProps {
  step: number;
  side?: number;
}

const PerimeterDiagram = ({ step, side = 8 }: PerimeterDiagramProps) => {
  const perimeter = side * 4;
  
  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-bg-card to-green-light/30">
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--green-dark))" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Square SVG */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          <svg width="200" height="200" viewBox="0 0 200 200">
            {/* Square */}
            <motion.rect 
              x="40" y="40" width="120" height="120" 
              fill="hsl(var(--green-light))" 
              stroke="hsl(var(--green-primary))" 
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
            />
            
            {/* Side labels */}
            {/* Top */}
            <motion.g
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: step >= 1 ? 1 : 0.3, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <line x1="50" y1="30" x2="150" y2="30" stroke="hsl(var(--green-dark))" strokeWidth="2" />
              <polygon points="50,30 55,25 55,35" fill="hsl(var(--green-dark))" />
              <polygon points="150,30 145,25 145,35" fill="hsl(var(--green-dark))" />
              <rect x="85" y="15" width="30" height="20" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--green-muted))" />
              <text x="100" y="30" textAnchor="middle" className="text-sm font-bold fill-green-primary">{side}</text>
            </motion.g>
            
            {/* Right */}
            <motion.g
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: step >= 1 ? 1 : 0.3, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <line x1="170" y1="50" x2="170" y2="150" stroke="hsl(var(--green-dark))" strokeWidth="2" />
              <polygon points="170,50 165,55 175,55" fill="hsl(var(--green-dark))" />
              <polygon points="170,150 165,145 175,145" fill="hsl(var(--green-dark))" />
              <rect x="175" y="85" width="30" height="20" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--green-muted))" />
              <text x="190" y="100" textAnchor="middle" className="text-sm font-bold fill-green-primary">{side}</text>
            </motion.g>
            
            {/* Bottom */}
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: step >= 1 ? 1 : 0.3, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <line x1="50" y1="170" x2="150" y2="170" stroke="hsl(var(--green-dark))" strokeWidth="2" />
              <polygon points="50,170 55,165 55,175" fill="hsl(var(--green-dark))" />
              <polygon points="150,170 145,165 145,175" fill="hsl(var(--green-dark))" />
              <rect x="85" y="175" width="30" height="20" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--green-muted))" />
              <text x="100" y="190" textAnchor="middle" className="text-sm font-bold fill-green-primary">{side}</text>
            </motion.g>
            
            {/* Left */}
            <motion.g
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: step >= 1 ? 1 : 0.3, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <line x1="30" y1="50" x2="30" y2="150" stroke="hsl(var(--green-dark))" strokeWidth="2" />
              <polygon points="30,50 25,55 35,55" fill="hsl(var(--green-dark))" />
              <polygon points="30,150 25,145 35,145" fill="hsl(var(--green-dark))" />
              <rect x="-5" y="85" width="30" height="20" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--green-muted))" />
              <text x="10" y="100" textAnchor="middle" className="text-sm font-bold fill-green-primary">{side}</text>
            </motion.g>

            {/* Perimeter highlight animation */}
            {step >= 2 && (
              <motion.rect
                x="40" y="40" width="120" height="120"
                fill="none"
                stroke="hsl(var(--green-primary))"
                strokeWidth="6"
                strokeDasharray="480"
                initial={{ strokeDashoffset: 480 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2, ease: 'linear' }}
              />
            )}
          </svg>
        </motion.div>

        {/* Walking ant animation around perimeter */}
        {step >= 2 && (
          <motion.div
            className="absolute"
            style={{ left: 'calc(50% - 100px)', top: 'calc(50% - 100px)' }}
            animate={{
              offsetDistance: ['0%', '100%'],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            initial={{ offsetPath: 'path("M 0 0 L 120 0 L 120 120 L 0 120 Z")' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="6" fill="hsl(var(--green-primary))" />
              <circle cx="8" cy="8" r="3" fill="hsl(var(--background))" />
            </svg>
          </motion.div>
        )}

        {/* Formula Box */}
        <motion.div
          className="absolute top-4 left-4 p-4 rounded-xl bg-card/95 border-2 border-green-primary shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-xs font-semibold text-green-muted mb-2">Perimeter Formula</div>
          <div className="text-sm font-bold text-foreground">
            {step === 0 && (
              <div className="space-y-1">
                <div>Perimeter of Square</div>
                <div className="text-green-primary">= 4 × side</div>
              </div>
            )}
            {step === 1 && (
              <div className="space-y-1">
                <div>Given: side = {side} cm</div>
                <div className="text-green-primary">P = 4 × {side}</div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-1">
                <div>P = 4 × {side}</div>
                <div>P = {side} + {side} + {side} + {side}</div>
                <motion.div 
                  className="text-lg text-green-primary"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  = {perimeter} cm ✓
                </motion.div>
              </div>
            )}
            {step === 3 && (
              <motion.div 
                className="p-3 bg-green-primary/10 rounded-lg text-center"
                animate={{ boxShadow: ['0 0 0 0 rgba(15,44,31,0.4)', '0 0 0 10px rgba(15,44,31,0)', '0 0 0 0 rgba(15,44,31,0)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-xs text-muted-foreground">Answer</div>
                <div className="text-2xl text-green-primary font-bold">{perimeter} cm</div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Visual breakdown */}
        <motion.div
          className="absolute bottom-4 right-4 p-3 rounded-xl bg-card/95 border border-green-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 2 ? 1 : 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2 text-sm">
            <span className="px-2 py-1 bg-green-light rounded">{side}</span>
            <span>+</span>
            <span className="px-2 py-1 bg-green-light rounded">{side}</span>
            <span>+</span>
            <span className="px-2 py-1 bg-green-light rounded">{side}</span>
            <span>+</span>
            <span className="px-2 py-1 bg-green-light rounded">{side}</span>
            <span>=</span>
            <span className="px-2 py-1 bg-green-primary text-primary-foreground rounded font-bold">{perimeter}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PerimeterDiagram;
