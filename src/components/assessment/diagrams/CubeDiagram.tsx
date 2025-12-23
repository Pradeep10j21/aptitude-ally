import { motion } from 'framer-motion';

interface CubeDiagramProps {
  step: number;
}

const CubeDiagram = ({ step }: CubeDiagramProps) => {
  const cornerCubes = 8;
  const edgeCubes = 12;
  const faceCubes = 6;
  const centerCube = 1;
  
  return (
    <div className="diagram-container">
      <div className="diagram-scene flex flex-col items-center justify-center bg-gradient-to-br from-card to-background-secondary p-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* 3D Cube Representation */}
          <motion.div
            className="relative w-48 h-48"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: step >= 1 ? 15 : 0 }}
            transition={{ duration: 1 }}
            style={{ perspective: 500 }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Back face */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: step >= 0 ? 0.3 : 0 }}>
                {/* 3x3 grid for back face */}
                {[0, 1, 2].map(row => 
                  [0, 1, 2].map(col => (
                    <rect
                      key={`back-${row}-${col}`}
                      x={70 + col * 25}
                      y={10 + row * 25}
                      width="23"
                      height="23"
                      fill="hsl(var(--muted))"
                      stroke="hsl(var(--border))"
                      strokeWidth="1"
                    />
                  ))
                )}
              </motion.g>
              
              {/* Right face */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: step >= 0 ? 0.5 : 0 }}>
                {[0, 1, 2].map(row => 
                  [0, 1, 2].map(col => (
                    <polygon
                      key={`right-${row}-${col}`}
                      points={`
                        ${145 + col * 12},${35 + row * 25 - col * 12}
                        ${157 + col * 12},${29 + row * 25 - col * 12}
                        ${157 + col * 12},${51 + row * 25 - col * 12}
                        ${145 + col * 12},${57 + row * 25 - col * 12}
                      `}
                      fill="hsl(var(--green-soft))"
                      stroke="hsl(var(--border))"
                      strokeWidth="1"
                    />
                  ))
                )}
              </motion.g>
              
              {/* Front face - main 3x3 grid */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                {[0, 1, 2].map(row => 
                  [0, 1, 2].map(col => {
                    const isCorner = (row === 0 || row === 2) && (col === 0 || col === 2);
                    const isEdge = !isCorner && (row === 0 || row === 2 || col === 0 || col === 2);
                    const isFace = row === 1 && col === 1;
                    
                    let fillColor = 'hsl(var(--primary))';
                    if (step >= 2) {
                      if (isCorner) fillColor = 'hsl(var(--warning))';
                      else if (isEdge) fillColor = 'hsl(var(--success))';
                      else if (isFace) fillColor = 'hsl(var(--accent))';
                    }
                    
                    return (
                      <motion.rect
                        key={`front-${row}-${col}`}
                        x={45 + col * 35}
                        y={60 + row * 35}
                        width="33"
                        height="33"
                        fill={fillColor}
                        stroke="hsl(var(--primary-foreground))"
                        strokeWidth="2"
                        rx="2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 * (row * 3 + col), type: 'spring' }}
                        whileHover={{ scale: 1.1 }}
                      />
                    );
                  })
                )}
              </motion.g>
              
              {/* Top face */}
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: step >= 1 ? 0.7 : 0 }}>
                {[0, 1, 2].map(row => 
                  [0, 1, 2].map(col => (
                    <polygon
                      key={`top-${row}-${col}`}
                      points={`
                        ${45 + col * 35 + row * 10},${60 - row * 12}
                        ${78 + col * 35 + row * 10},${60 - row * 12}
                        ${88 + col * 35 + row * 10},${48 - row * 12}
                        ${55 + col * 35 + row * 10},${48 - row * 12}
                      `}
                      fill="hsl(var(--green-light))"
                      stroke="hsl(var(--border))"
                      strokeWidth="1"
                    />
                  ))
                )}
              </motion.g>
            </svg>
          </motion.div>

          {/* Legend */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="font-bold text-sm text-foreground mb-4">Cube Positions</h4>
            
            <motion.div
              className="flex items-center gap-3 p-2 rounded-lg bg-warning/10"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: step >= 2 ? 1 : 0.5 }}
              transition={{ delay: 0.7 }}
            >
              <div className="w-6 h-6 rounded bg-warning" />
              <div>
                <p className="font-semibold text-sm">Corners</p>
                <p className="text-xs text-muted-foreground">3 painted faces • {cornerCubes} cubes</p>
              </div>
            </motion.div>
            
            <motion.div
              className="flex items-center gap-3 p-2 rounded-lg bg-success/20 border-2 border-success"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: step >= 2 ? 1 : 0.5 }}
              transition={{ delay: 0.8 }}
            >
              <div className="w-6 h-6 rounded bg-success" />
              <div>
                <p className="font-bold text-sm text-success">Edges ← Answer!</p>
                <p className="text-xs text-muted-foreground">2 painted faces • {edgeCubes} cubes</p>
              </div>
            </motion.div>
            
            <motion.div
              className="flex items-center gap-3 p-2 rounded-lg bg-accent/10"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: step >= 2 ? 1 : 0.5 }}
              transition={{ delay: 0.9 }}
            >
              <div className="w-6 h-6 rounded bg-accent" />
              <div>
                <p className="font-semibold text-sm">Face Centers</p>
                <p className="text-xs text-muted-foreground">1 painted face • {faceCubes} cubes</p>
              </div>
            </motion.div>
            
            <motion.div
              className="flex items-center gap-3 p-2 rounded-lg bg-muted"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: step >= 2 ? 1 : 0.5 }}
              transition={{ delay: 1 }}
            >
              <div className="w-6 h-6 rounded bg-muted-foreground/30" />
              <div>
                <p className="font-semibold text-sm">Center</p>
                <p className="text-xs text-muted-foreground">0 painted faces • {centerCube} cube</p>
              </div>
            </motion.div>
            
            {/* Total Verification */}
            {step >= 3 && (
              <motion.div
                className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring' }}
              >
                <p className="text-sm font-bold text-primary">
                  Total: {cornerCubes} + {edgeCubes} + {faceCubes} + {centerCube} = 27 ✓
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CubeDiagram;
