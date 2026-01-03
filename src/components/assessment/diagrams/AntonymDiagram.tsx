import { motion } from 'framer-motion';

interface AntonymDiagramProps {
  step: number;
}

const AntonymDiagram = ({ step }: AntonymDiagramProps) => {
  const word = 'DILIGENT';
  const options = [
    { word: 'Lazy', type: 'antonym', icon: '😴' },
    { word: 'Careful', type: 'synonym', icon: '🔍' },
    { word: 'Hardworking', type: 'synonym', icon: '💪' },
    { word: 'Persistent', type: 'synonym', icon: '🎯' },
  ];

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative bg-gradient-to-br from-green-soft/20 via-background to-green-light/20">
        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Main Word */}
          <motion.div
            className="p-3 rounded-xl bg-blue-500/20 border-2 border-blue-500 mb-3 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-xs text-muted-foreground mb-1">Find ANTONYM of:</div>
            <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{word}</div>
            <div className="text-xs text-muted-foreground">(= hardworking)</div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            className="mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
          >
            <div className="text-xs text-green-primary font-bold">Find OPPOSITE ↓</div>
          </motion.div>

          {/* Options */}
          <motion.div
            className="grid grid-cols-2 gap-2 w-full max-w-sm mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
          >
            {options.map((opt, i) => (
              <motion.div
                key={opt.word}
                className={`p-2 rounded-lg border-2 ${
                  opt.type === 'antonym' && step >= 2
                    ? 'bg-success/10 border-success'
                    : opt.type === 'synonym' && step >= 2
                    ? 'bg-destructive/10 border-destructive/50 opacity-60'
                    : 'bg-card/90 border-border'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + 0.1 * i }}
              >
                <div className="flex items-center gap-1">
                  <span className="text-lg">{opt.icon}</span>
                  <span className="font-bold text-sm">{opt.word}</span>
                </div>
                {step >= 2 && (
                  <motion.div
                    className={`text-xs mt-1 ${opt.type === 'antonym' ? 'text-success' : 'text-destructive'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {opt.type === 'antonym' ? '✓ OPPOSITE' : '✗ Similar'}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Explanation */}
          <motion.div
            className="p-2 rounded-lg bg-card/90 border border-border text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 3 ? 1 : 0 }}
          >
            <div className="flex items-center justify-center gap-3">
              <div className="text-center">
                <div className="text-lg">💪</div>
                <div className="text-xs font-bold text-blue-500">Diligent</div>
              </div>
              <motion.div
                className="text-xl"
                animate={{ x: [-3, 3, -3] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ↔️
              </motion.div>
              <div className="text-center">
                <div className="text-lg">😴</div>
                <div className="text-xs font-bold text-green-primary">Lazy</div>
              </div>
            </div>
          </motion.div>

          {/* Answer */}
          <motion.div
            className="mt-2 px-4 py-1 rounded-full bg-green-primary text-primary-foreground font-bold text-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: step >= 3 ? 1 : 0, scale: step >= 3 ? 1 : 0.9 }}
          >
            <motion.span
              animate={step >= 3 ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              Answer: Lazy
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AntonymDiagram;
