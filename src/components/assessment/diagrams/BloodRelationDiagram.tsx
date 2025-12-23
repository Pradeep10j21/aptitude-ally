import { motion } from 'framer-motion';

interface BloodRelationDiagramProps {
  step: number;
}

const BloodRelationDiagram = ({ step }: BloodRelationDiagramProps) => {
  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-bg-card to-green-light/30" />
        
        {/* Family tree */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <svg width="320" height="220" viewBox="0 0 320 220">
            {/* Connection lines */}
            {/* A to B horizontal line (siblings) */}
            <motion.line
              x1="80" y1="100" x2="160" y2="100"
              stroke="hsl(var(--green-muted))"
              strokeWidth="3"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: step >= 1 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />
            
            {/* B to C horizontal line (siblings) */}
            <motion.line
              x1="160" y1="100" x2="240" y2="100"
              stroke="hsl(var(--green-muted))"
              strokeWidth="3"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: step >= 2 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />

            {/* Sibling connector bar */}
            <motion.line
              x1="80" y1="60" x2="240" y2="60"
              stroke="hsl(var(--green-primary))"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: step >= 3 ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            />
            
            {/* Vertical connectors to bar */}
            <motion.line
              x1="80" y1="60" x2="80" y2="80"
              stroke="hsl(var(--green-primary))"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: step >= 3 ? 1 : 0 }}
            />
            <motion.line
              x1="160" y1="60" x2="160" y2="80"
              stroke="hsl(var(--green-primary))"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: step >= 3 ? 1 : 0 }}
            />
            <motion.line
              x1="240" y1="60" x2="240" y2="80"
              stroke="hsl(var(--green-primary))"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: step >= 3 ? 1 : 0 }}
            />
            
            {/* Person A - Male (Brother) */}
            <motion.g
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              {/* Male icon - Square with rounded corners */}
              <rect x="55" y="80" width="50" height="50" rx="8" fill="hsl(var(--green-primary))" />
              {/* Face */}
              <circle cx="80" cy="95" r="12" fill="hsl(var(--green-light))" />
              <circle cx="76" cy="93" r="2" fill="hsl(var(--green-dark))" />
              <circle cx="84" cy="93" r="2" fill="hsl(var(--green-dark))" />
              <path d="M 76 100 Q 80 104 84 100" stroke="hsl(var(--green-dark))" strokeWidth="1.5" fill="none" />
              {/* Body indication */}
              <rect x="70" y="110" width="20" height="15" rx="3" fill="hsl(var(--green-dark))" />
              {/* Label */}
              <text x="80" y="150" textAnchor="middle" className="text-sm font-bold fill-foreground">A</text>
              <motion.text 
                x="80" y="165" 
                textAnchor="middle" 
                className="text-xs fill-green-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: step >= 0 ? 1 : 0 }}
              >
                (Brother)
              </motion.text>
              
              {/* Male symbol */}
              <circle cx="105" cy="75" r="8" stroke="hsl(var(--green-primary))" strokeWidth="2" fill="none" />
              <line x1="111" y1="69" x2="118" y2="62" stroke="hsl(var(--green-primary))" strokeWidth="2" />
              <polyline points="113,62 118,62 118,67" stroke="hsl(var(--green-primary))" strokeWidth="2" fill="none" />
            </motion.g>
            
            {/* Person B - Female (Sister) */}
            <motion.g
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              {/* Female icon - Circle */}
              <circle cx="160" cy="105" r="28" fill="hsl(var(--green-soft))" stroke="hsl(var(--green-dark))" strokeWidth="2" />
              {/* Face */}
              <circle cx="160" cy="95" r="12" fill="hsl(var(--green-light))" />
              <circle cx="156" cy="93" r="2" fill="hsl(var(--green-dark))" />
              <circle cx="164" cy="93" r="2" fill="hsl(var(--green-dark))" />
              <path d="M 156 100 Q 160 104 164 100" stroke="hsl(var(--green-dark))" strokeWidth="1.5" fill="none" />
              {/* Hair indication */}
              <path d="M 148 88 Q 155 78 160 85 Q 165 78 172 88" fill="hsl(var(--green-dark))" />
              {/* Label */}
              <text x="160" y="150" textAnchor="middle" className="text-sm font-bold fill-foreground">B</text>
              <motion.text 
                x="160" y="165" 
                textAnchor="middle" 
                className="text-xs fill-green-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: step >= 1 ? 1 : 0 }}
              >
                (Sister of C)
              </motion.text>
              
              {/* Female symbol */}
              <circle cx="195" cy="85" r="6" stroke="hsl(var(--green-muted))" strokeWidth="2" fill="none" />
              <line x1="195" y1="91" x2="195" y2="100" stroke="hsl(var(--green-muted))" strokeWidth="2" />
              <line x1="190" y1="96" x2="200" y2="96" stroke="hsl(var(--green-muted))" strokeWidth="2" />
            </motion.g>
            
            {/* Person C */}
            <motion.g
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              {/* Unknown gender - Diamond */}
              <rect x="215" y="80" width="50" height="50" rx="8" fill="hsl(var(--green-muted))" transform="rotate(0, 240, 105)" />
              {/* Face */}
              <circle cx="240" cy="95" r="12" fill="hsl(var(--green-light))" />
              <circle cx="236" cy="93" r="2" fill="hsl(var(--green-dark))" />
              <circle cx="244" cy="93" r="2" fill="hsl(var(--green-dark))" />
              <path d="M 236 100 Q 240 103 244 100" stroke="hsl(var(--green-dark))" strokeWidth="1.5" fill="none" />
              {/* Label */}
              <text x="240" y="150" textAnchor="middle" className="text-sm font-bold fill-foreground">C</text>
              <motion.text 
                x="240" y="165" 
                textAnchor="middle" 
                className="text-xs fill-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: step >= 2 ? 1 : 0 }}
              >
                (Sibling)
              </motion.text>
            </motion.g>
            
            {/* Relationship labels */}
            {step >= 1 && (
              <motion.text
                x="120" y="90"
                textAnchor="middle"
                className="text-xs font-semibold fill-green-dark"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Brother of
              </motion.text>
            )}
            
            {step >= 2 && (
              <motion.text
                x="200" y="90"
                textAnchor="middle"
                className="text-xs font-semibold fill-green-dark"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Sister of
              </motion.text>
            )}
            
            {/* Final answer arrow */}
            {step >= 3 && (
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <path
                  d="M 80 175 Q 160 210 240 175"
                  stroke="hsl(var(--green-primary))"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,4"
                />
                <polygon points="240,175 232,180 234,170" fill="hsl(var(--green-primary))" />
                <text x="160" y="205" textAnchor="middle" className="text-sm font-bold fill-green-primary">A is BROTHER of C</text>
              </motion.g>
            )}
          </svg>
        </motion.div>

        {/* Formula Box */}
        <motion.div
          className="absolute top-4 left-4 p-4 rounded-xl bg-card/95 border-2 border-green-primary shadow-lg max-w-[200px]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-xs font-semibold text-green-muted mb-2">Blood Relations</div>
          <div className="text-sm font-bold text-foreground">
            {step === 0 && (
              <div className="space-y-1">
                <div>Given:</div>
                <div className="text-green-primary">A = Brother of B</div>
              </div>
            )}
            {step === 1 && (
              <div className="space-y-1">
                <div>Also given:</div>
                <div className="text-green-primary">B = Sister of C</div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-1">
                <div>This means:</div>
                <div className="text-xs text-muted-foreground">A, B, C are siblings</div>
                <div className="text-green-primary">A is a male sibling</div>
              </div>
            )}
            {step === 3 && (
              <motion.div 
                className="p-3 bg-green-primary/10 rounded-lg text-center"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-xs text-muted-foreground">Answer</div>
                <div className="text-lg text-green-primary font-bold">Brother</div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          className="absolute bottom-4 left-4 p-2 rounded-lg bg-card/80 border border-green-muted text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 rounded bg-green-primary" />
              <span>Male</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-green-soft border border-green-dark" />
              <span>Female</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BloodRelationDiagram;
