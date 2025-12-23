import { motion } from 'framer-motion';

interface SequenceDiagramProps {
  step: number;
  sequence?: number[];
  answer?: number;
}

const SequenceDiagram = ({ step, sequence = [2, 6, 12, 20, 30], answer = 42 }: SequenceDiagramProps) => {
  const differences = [4, 6, 8, 10, 12];
  
  return (
    <div className="diagram-container">
      <div className="diagram-scene flex flex-col items-center justify-center bg-gradient-to-br from-card to-background-secondary p-4">
        {/* Numbers Row */}
        <div className="flex items-end gap-2 md:gap-4 mb-8">
          {sequence.map((num, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <motion.div
                className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg md:text-xl shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                {num}
              </motion.div>
            </motion.div>
          ))}
          
          {/* Answer Box */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: step >= 2 ? 1 : 0.3, 
              scale: step >= 2 ? 1 : 0.9 
            }}
            transition={{ delay: 0.8, type: 'spring' }}
          >
            <motion.div
              className={`w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center font-bold text-lg md:text-xl shadow-lg ${
                step >= 2 
                  ? 'bg-success text-success-foreground' 
                  : 'bg-muted border-2 border-dashed border-primary/50 text-muted-foreground'
              }`}
              animate={step >= 2 ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              {step >= 2 ? answer : '?'}
            </motion.div>
          </motion.div>
        </div>

        {/* Differences Row */}
        {step >= 1 && (
          <motion.div
            className="flex items-center gap-4 md:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {differences.map((diff, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: i <= step ? 1 : 0.3, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                {/* Arrow */}
                <svg width="40" height="30" viewBox="0 0 40 30" className="text-accent">
                  <motion.path
                    d="M5 5 Q20 25 35 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="50"
                    initial={{ strokeDashoffset: 50 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  />
                  <motion.polygon
                    points="32,2 38,6 34,10"
                    fill="currentColor"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + i * 0.1 }}
                  />
                </svg>
                
                {/* Difference Value */}
                <motion.div
                  className={`px-2 py-1 rounded-lg text-sm font-bold ${
                    i === differences.length - 1 && step >= 2
                      ? 'bg-success/20 text-success'
                      : 'bg-accent/20 text-accent-foreground'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.1 + i * 0.1, type: 'spring' }}
                >
                  +{diff}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Pattern Explanation */}
        {step >= 1 && (
          <motion.div
            className="mt-6 p-4 rounded-xl bg-card/80 border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <span className="text-sm text-muted-foreground">Pattern:</span>
              <div className="flex items-center gap-2">
                {differences.slice(0, -1).map((diff, i) => (
                  <motion.span
                    key={i}
                    className="flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.7 + i * 0.1 }}
                  >
                    <span className="px-2 py-1 rounded bg-primary/10 text-primary font-semibold text-sm">
                      +{diff}
                    </span>
                    {i < differences.length - 2 && (
                      <span className="text-muted-foreground">→</span>
                    )}
                  </motion.span>
                ))}
                <span className="text-muted-foreground">→</span>
                <motion.span
                  className="px-2 py-1 rounded bg-success/20 text-success font-bold text-sm"
                  initial={{ scale: 0 }}
                  animate={{ scale: step >= 2 ? 1 : 0.8 }}
                  transition={{ delay: 2, type: 'spring' }}
                >
                  +{differences[differences.length - 1]}
                </motion.span>
              </div>
            </div>
            <motion.p
              className="text-center text-xs text-muted-foreground mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
            >
              Each difference increases by +2
            </motion.p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SequenceDiagram;
