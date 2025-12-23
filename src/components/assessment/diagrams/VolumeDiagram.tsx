import { motion } from 'framer-motion';

interface VolumeDiagramProps {
  step: number;
  side?: number;
}

const VolumeDiagram = ({ step, side = 4 }: VolumeDiagramProps) => {
  const volume = side * side * side;
  
  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-bg-card to-green-light/30" />
        
        {/* 3D Cube */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ perspective: '500px' }}
          initial={{ rotateX: 0, rotateY: 0 }}
          animate={{ rotateY: step >= 1 ? [0, 10, -10, 0] : 0 }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <svg width="220" height="220" viewBox="0 0 220 220">
            {/* Back face */}
            <motion.polygon
              points="80,30 180,30 180,130 80,130"
              fill="hsl(var(--green-muted))"
              stroke="hsl(var(--green-dark))"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.2 }}
            />
            
            {/* Left face */}
            <motion.polygon
              points="30,80 80,30 80,130 30,180"
              fill="hsl(var(--green-soft))"
              stroke="hsl(var(--green-dark))"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.3 }}
            />
            
            {/* Top face */}
            <motion.polygon
              points="80,30 180,30 130,80 30,80"
              fill="hsl(var(--green-light))"
              stroke="hsl(var(--green-dark))"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            />
            
            {/* Front face */}
            <motion.polygon
              points="30,80 130,80 130,180 30,180"
              fill="hsl(var(--green-primary))"
              stroke="hsl(var(--green-dark))"
              strokeWidth="2"
              opacity="0.9"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 0.5 }}
            />
            
            {/* Right face */}
            <motion.polygon
              points="130,80 180,30 180,130 130,180"
              fill="hsl(var(--green-dark))"
              stroke="hsl(var(--green-primary))"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.6 }}
            />
            
            {/* Dimension labels */}
            {/* Width (bottom) */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: step >= 1 ? 1 : 0.3 }}>
              <line x1="30" y1="190" x2="130" y2="190" stroke="hsl(var(--foreground))" strokeWidth="2" />
              <text x="80" y="205" textAnchor="middle" className="text-sm font-bold fill-green-primary">{side} cm</text>
            </motion.g>
            
            {/* Height (left) */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: step >= 1 ? 1 : 0.3 }}>
              <line x1="20" y1="80" x2="20" y2="180" stroke="hsl(var(--foreground))" strokeWidth="2" />
              <text x="10" y="135" textAnchor="middle" className="text-sm font-bold fill-green-primary" transform="rotate(-90, 10, 135)">{side} cm</text>
            </motion.g>
            
            {/* Depth (top) */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: step >= 1 ? 1 : 0.3 }}>
              <line x1="135" y1="75" x2="185" y2="25" stroke="hsl(var(--foreground))" strokeWidth="2" />
              <text x="170" y="40" textAnchor="middle" className="text-sm font-bold fill-green-primary">{side} cm</text>
            </motion.g>
          </svg>
        </motion.div>

        {/* Unit cubes visualization */}
        {step >= 2 && (
          <motion.div
            className="absolute right-4 top-20 p-3 rounded-xl bg-card/95 border border-green-muted"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-xs font-semibold text-muted-foreground mb-2">Unit Cubes</div>
            <div className="grid grid-cols-4 gap-0.5">
              {Array.from({ length: 16 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-4 h-4 bg-green-primary/60 border border-green-dark/30"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.05 * i }}
                />
              ))}
            </div>
            <div className="text-xs text-muted-foreground mt-1 text-center">One layer = {side}×{side} = {side*side}</div>
          </motion.div>
        )}

        {/* Layers visualization */}
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
                className="w-8 h-16 rounded bg-gradient-to-t from-green-primary to-green-light border-2 border-green-dark flex items-center justify-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * i }}
              >
                <span className="text-xs font-bold text-background">{i + 1}</span>
              </motion.div>
            ))}
            <div className="flex flex-col justify-center ml-2 text-xs">
              <span>{side} layers</span>
              <span className="text-green-primary font-bold">× {side*side} each</span>
            </div>
          </motion.div>
        )}

        {/* Formula Box */}
        <motion.div
          className="absolute top-4 left-4 p-4 rounded-xl bg-card/95 border-2 border-green-primary shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-xs font-semibold text-green-muted mb-2">Volume of Cube</div>
          <div className="text-sm font-bold text-foreground">
            {step === 0 && (
              <div className="space-y-1">
                <div>Volume = side × side × side</div>
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
            {step === 3 && (
              <motion.div 
                className="p-3 bg-green-primary/10 rounded-lg text-center"
                animate={{ boxShadow: ['0 0 0 0 rgba(15,44,31,0.4)', '0 0 0 10px rgba(15,44,31,0)', '0 0 0 0 rgba(15,44,31,0)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-xs text-muted-foreground">Answer</div>
                <div className="text-2xl text-green-primary font-bold">{volume} cm³</div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VolumeDiagram;
