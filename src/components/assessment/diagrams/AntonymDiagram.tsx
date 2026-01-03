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
      <div className="diagram-scene relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-background to-green-light/20" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Main Word */}
          <motion.div
            className="p-4 rounded-xl bg-blue-500/20 border-2 border-blue-500 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-xs text-muted-foreground text-center mb-1">Find the ANTONYM of:</div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 text-center">
              {word}
            </div>
            <div className="text-xs text-center text-muted-foreground mt-1">
              (= hardworking, showing persistent effort)
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
          >
            <div className="text-sm text-green-primary font-bold text-center">Find the OPPOSITE ↓</div>
          </motion.div>

          {/* Options */}
          <motion.div
            className="grid grid-cols-2 gap-3 w-full max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {options.map((opt, i) => (
              <motion.div
                key={opt.word}
                className={`p-3 rounded-xl border-2 ${
                  opt.type === 'antonym' && step >= 2
                    ? 'bg-success/10 border-success'
                    : opt.type === 'synonym' && step >= 2
                    ? 'bg-destructive/10 border-destructive/50 opacity-60'
                    : 'bg-card/90 border-border'
                }`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + 0.1 * i }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{opt.icon}</span>
                  <span className="font-bold">{opt.word}</span>
                </div>
                {step >= 2 && (
                  <motion.div
                    className={`text-xs mt-1 ${opt.type === 'antonym' ? 'text-success' : 'text-destructive'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {opt.type === 'antonym' ? '✓ OPPOSITE' : '✗ Similar meaning'}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Explanation */}
          <motion.div
            className="mt-4 p-3 rounded-xl bg-card/90 border border-border text-center max-w-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 3 ? 1 : 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <div className="text-xl">💪</div>
                <div className="text-sm font-bold text-blue-500">Diligent</div>
                <div className="text-xs text-muted-foreground">Works hard</div>
              </div>
              <motion.div
                className="text-2xl"
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ↔️
              </motion.div>
              <div className="text-center">
                <div className="text-xl">😴</div>
                <div className="text-sm font-bold text-green-primary">Lazy</div>
                <div className="text-xs text-muted-foreground">Avoids work</div>
              </div>
            </div>
          </motion.div>

          {/* Answer */}
          <motion.div
            className="mt-4 px-6 py-2 rounded-full bg-green-primary text-primary-foreground font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: step >= 3 ? 1 : 0, scale: step >= 3 ? 1 : 0.9 }}
            transition={{ delay: 1 }}
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
