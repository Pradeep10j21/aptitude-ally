import { motion } from 'framer-motion';

interface SquaresDiagramProps {
  step: number;
}

const SquaresDiagram = ({ step }: SquaresDiagramProps) => {
  const squares = [
    { n: 1, value: 1 },
    { n: 2, value: 4 },
    { n: 3, value: 9 },
    { n: 4, value: 16 },
    { n: 5, value: 25 },
    { n: 6, value: 36 },
  ];
  
  return (
    <div className="diagram-container">
      <div className="diagram-scene flex flex-col items-center justify-center bg-gradient-to-br from-card to-background-secondary p-4 overflow-x-auto">
        {/* Visual Squares */}
        <div className="flex gap-3 md:gap-6 items-end mb-8 min-w-max">
          {squares.map((square, index) => (
            <motion.div
              key={square.n}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Grid visualization */}
              <motion.div
                className="grid gap-0.5 mb-2"
                style={{ 
                  gridTemplateColumns: `repeat(${square.n}, ${Math.max(8, 24 - square.n * 2)}px)` 
                }}
                initial={{ scale: 0 }}
                animate={{ scale: step >= 1 ? 1 : 0.8 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {Array.from({ length: square.value }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="bg-primary rounded-sm"
                    style={{ 
                      width: Math.max(8, 24 - square.n * 2),
                      height: Math.max(8, 24 - square.n * 2)
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 + i * 0.02 }}
                  />
                ))}
              </motion.div>
              
              {/* n² label */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <p className="text-lg font-bold text-foreground">{square.value}</p>
                <p className="text-xs text-muted-foreground">
                  {square.n}² = {square.n}×{square.n}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Pattern Explanation */}
        {step >= 2 && (
          <motion.div
            className="w-full max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <div className="p-4 rounded-xl bg-success/10 border border-success/30">
              <div className="flex items-center justify-center gap-3 flex-wrap">
                {squares.map((square, index) => (
                  <motion.div
                    key={square.n}
                    className="flex items-center gap-1"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.7 + index * 0.1 }}
                  >
                    <span className={`px-3 py-1 rounded-lg text-sm font-bold ${
                      index === squares.length - 1
                        ? 'bg-success text-success-foreground'
                        : 'bg-primary/20 text-primary'
                    }`}>
                      {square.n}² = {square.value}
                    </span>
                    {index < squares.length - 1 && (
                      <span className="text-muted-foreground">→</span>
                    )}
                  </motion.div>
                ))}
              </div>
              
              <motion.p
                className="text-center text-sm text-muted-foreground mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.3 }}
              >
                These are <span className="font-bold text-success">Perfect Squares</span> - numbers formed by n × n
              </motion.p>
            </div>
            
            {/* Visual comparison */}
            <motion.div
              className="mt-4 p-4 rounded-xl bg-card border border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 3 ? 1 : 0 }}
              transition={{ delay: 2.5 }}
            >
              <p className="text-sm text-center text-muted-foreground mb-3">
                Why they're called "perfect squares":
              </p>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 grid grid-cols-4 gap-0.5 mx-auto mb-2">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="bg-primary/60 rounded-sm" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">4×4 = 16</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 grid grid-cols-5 gap-0.5 mx-auto mb-2">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div key={i} className="bg-primary/60 rounded-sm" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">5×5 = 25</p>
                </div>
              </div>
              <p className="text-xs text-center text-muted-foreground mt-3">
                They form perfect square shapes! 📐
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SquaresDiagram;
