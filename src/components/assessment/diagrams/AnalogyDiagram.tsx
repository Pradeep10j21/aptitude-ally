import { motion } from 'framer-motion';

interface AnalogyDiagramProps {
  step: number;
}

const AnalogyDiagram = ({ step }: AnalogyDiagramProps) => {
  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-background to-green-light/20" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Main Analogy Display */}
          <div className="flex items-center gap-4 mb-6">
            {/* Book : Pages */}
            <motion.div
              className="flex items-center gap-3 p-4 rounded-xl bg-card/90 border-2 border-blue-500"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="text-4xl">📖</div>
              <div className="text-center">
                <div className="font-bold text-lg">Book</div>
                <div className="text-xs text-muted-foreground">Whole</div>
              </div>
              <div className="text-2xl font-bold text-muted-foreground">:</div>
              <div className="text-4xl">📄</div>
              <div className="text-center">
                <div className="font-bold text-lg">Pages</div>
                <div className="text-xs text-muted-foreground">Parts</div>
              </div>
            </motion.div>

            {/* Double Colon */}
            <motion.div
              className="text-3xl font-bold text-green-primary"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: step >= 1 ? 1 : 0.3, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              ::
            </motion.div>

            {/* Tree : ? */}
            <motion.div
              className="flex items-center gap-3 p-4 rounded-xl bg-card/90 border-2 border-green-primary"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: step >= 1 ? 1 : 0.3, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-4xl">🌳</div>
              <div className="text-center">
                <div className="font-bold text-lg">Tree</div>
                <div className="text-xs text-muted-foreground">Whole</div>
              </div>
              <div className="text-2xl font-bold text-muted-foreground">:</div>
              <motion.div
                className="text-4xl"
                animate={step >= 3 ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                {step >= 3 ? '🍃' : '❓'}
              </motion.div>
              <div className="text-center">
                <motion.div 
                  className="font-bold text-lg text-green-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: step >= 3 ? 1 : 0 }}
                >
                  Leaves
                </motion.div>
                <div className="text-xs text-muted-foreground">Parts</div>
              </div>
            </motion.div>
          </div>

          {/* Relationship Box */}
          <motion.div
            className="p-4 rounded-xl bg-accent/10 border border-accent/30 text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-sm font-bold text-accent mb-2">Relationship Pattern</div>
            <div className="text-sm text-muted-foreground">
              "X is composed of Y" or "X contains many Y"
            </div>
          </motion.div>

          {/* Step Breakdown */}
          <motion.div
            className="grid grid-cols-3 gap-3 w-full max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3 }}
            transition={{ delay: 0.7 }}
          >
            <div className={`p-2 rounded-lg text-center ${step >= 0 ? 'bg-green-primary/10 border border-green-primary' : 'bg-muted/50'}`}>
              <div className="text-2xl mb-1">📖→📄</div>
              <div className="text-xs">Book has Pages</div>
            </div>
            <div className={`p-2 rounded-lg text-center ${step >= 2 ? 'bg-green-primary/10 border border-green-primary' : 'bg-muted/50'}`}>
              <div className="text-2xl mb-1">🌳→🍃</div>
              <div className="text-xs">Tree has Leaves</div>
            </div>
            <div className={`p-2 rounded-lg text-center ${step >= 3 ? 'bg-success/10 border border-success' : 'bg-muted/50'}`}>
              <div className="text-2xl mb-1">✓</div>
              <div className="text-xs">Same Pattern!</div>
            </div>
          </motion.div>

          {/* Answer */}
          <motion.div
            className="mt-4 px-6 py-3 rounded-xl bg-green-primary text-primary-foreground font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: step >= 3 ? 1 : 0, scale: step >= 3 ? 1 : 0.9 }}
            transition={{ delay: 0.9 }}
          >
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              Answer: Leaves 🍃
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnalogyDiagram;
