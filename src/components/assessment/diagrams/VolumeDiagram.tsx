import { motion } from 'framer-motion';

interface VolumeDiagramProps {
  step: number;
  side?: number;
}

const VolumeDiagram = ({ step, side = 4 }: VolumeDiagramProps) => {
  const volume = side * side * side;
  
  return (
    <div className="diagram-container">
      <div className="diagram-scene relative bg-gradient-to-b from-blue-50 to-green-50 dark:from-green-900/20 dark:to-green-950/30">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-200/20 to-transparent dark:from-blue-900/10" />
        
        {/* 3D Cube in center */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <svg width="180" height="180" viewBox="0 0 180 180">
            {/* Back face */}
            <motion.polygon
              points="65,25 145,25 145,105 65,105"
              fill="hsl(var(--green-muted))"
              stroke="hsl(var(--green-dark))"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.2 }}
            />
            
            {/* Left face */}
            <motion.polygon
              points="25,65 65,25 65,105 25,145"
              fill="hsl(var(--green-soft))"
              stroke="hsl(var(--green-dark))"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.3 }}
            />
            
            {/* Top face */}
            <motion.polygon
              points="65,25 145,25 105,65 25,65"
              fill="hsl(var(--green-light))"
              stroke="hsl(var(--green-dark))"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            />
            
            {/* Front face */}
            <motion.polygon
              points="25,65 105,65 105,145 25,145"
              fill="hsl(var(--green-primary))"
              stroke="hsl(var(--green-dark))"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 0.5 }}
            />
            
            {/* Right face */}
            <motion.polygon
              points="105,65 145,25 145,105 105,145"
              fill="hsl(var(--green-dark))"
              stroke="hsl(var(--green-primary))"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.6 }}
            />
            
            {/* Dimension labels */}
            {/* Width */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: step >= 1 ? 1 : 0.4 }} transition={{ delay: 0.3 }}>
              <text x="65" y="160" textAnchor="middle" className="text-xs font-bold fill-green-primary">{side} cm</text>
            </motion.g>
            
            {/* Height */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: step >= 1 ? 1 : 0.4 }} transition={{ delay: 0.5 }}>
              <text x="12" y="105" textAnchor="middle" className="text-xs font-bold fill-green-primary" transform="rotate(-90, 12, 105)">{side} cm</text>
            </motion.g>
            
            {/* Depth */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: step >= 1 ? 1 : 0.4 }} transition={{ delay: 0.7 }}>
              <text x="135" y="38" textAnchor="middle" className="text-xs font-bold fill-green-primary">{side} cm</text>
            </motion.g>
          </svg>
        </motion.div>

        {/* Formula Box */}
        <motion.div
          className="absolute top-4 left-4 p-3 rounded-lg bg-card/95 border border-border shadow-lg max-w-[160px]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-xs font-semibold text-muted-foreground mb-1">Volume of Cube</div>
          <div className="text-sm font-bold text-foreground">
            {step === 0 && (
              <div className="space-y-1">
                <div>V = side × side × side</div>
                <div className="text-green-primary">V = s³</div>
              </div>
            )}
            {step === 1 && (
              <div className="space-y-1">
                <div>Given: side = {side} cm</div>
                <div className="text-green-primary">V = {side}³ = ?</div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-1">
                <div>V = {side} × {side} × {side}</div>
                <div>V = {side * side} × {side}</div>
                <motion.div 
                  className="text-lg text-green-primary"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  = {volume} cm³ ✓
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
                <div className="text-xl text-green-primary font-bold">{volume} cm³</div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Unit cubes visualization */}
        {step >= 2 && (
          <motion.div
            className="absolute top-4 right-4 p-2 rounded-lg bg-card/95 border border-green-muted"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-xs font-semibold text-muted-foreground mb-2">Unit Cubes</div>
            <div className="grid grid-cols-4 gap-0.5">
              {Array.from({ length: 16 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-green-primary/60 border border-green-dark/30"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.03 * i }}
                />
              ))}
            </div>
            <div className="text-xs text-muted-foreground mt-1 text-center">1 layer = {side*side}</div>
          </motion.div>
        )}

        {/* Layers count */}
        {step >= 2 && (
          <motion.div
            className="absolute bottom-4 right-4 flex gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {Array.from({ length: side }).map((_, i) => (
              <motion.div
                key={i}
                className="w-6 h-12 rounded bg-gradient-to-t from-green-primary to-green-light border border-green-dark flex items-center justify-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 * i }}
              >
                <span className="text-xs font-bold text-background">{i + 1}</span>
              </motion.div>
            ))}
            <div className="flex flex-col justify-center ml-1 text-xs">
              <span>{side} layers</span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default VolumeDiagram;