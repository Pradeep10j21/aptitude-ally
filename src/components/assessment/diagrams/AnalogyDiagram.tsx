import { motion } from 'framer-motion';

interface AnalogyDiagramProps {
  step: number;
}

const AnalogyDiagram = ({ step }: AnalogyDiagramProps) => {
  return (
    <div className="diagram-container">
      <div className="diagram-scene relative bg-gradient-to-br from-green-soft/20 via-background to-green-light/20">
        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Analogy Display */}
          <div className="flex items-center gap-2 md:gap-4 mb-4 flex-wrap justify-center">
            {/* Book : Pages */}
            <motion.div
              className="flex items-center gap-2 p-3 rounded-xl bg-card/90 border-2 border-blue-500"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="text-2xl">📖</div>
              <div className="text-center">
                <div className="font-bold text-sm">Book</div>
                <div className="text-xs text-muted-foreground">Whole</div>
              </div>
              <div className="text-lg font-bold">:</div>
              <div className="text-2xl">📄</div>
              <div className="text-center">
                <div className="font-bold text-sm">Pages</div>
                <div className="text-xs text-muted-foreground">Parts</div>
              </div>
            </motion.div>

            {/* :: */}
            <motion.div
              className="text-2xl font-bold text-green-primary"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: step >= 1 ? 1 : 0.3, scale: 1 }}
            >
              ::
            </motion.div>

            {/* Tree : ? */}
            <motion.div
              className="flex items-center gap-2 p-3 rounded-xl bg-card/90 border-2 border-green-primary"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: step >= 1 ? 1 : 0.3, x: 0 }}
            >
              <div className="text-2xl">🌳</div>
              <div className="text-center">
                <div className="font-bold text-sm">Tree</div>
                <div className="text-xs text-muted-foreground">Whole</div>
              </div>
              <div className="text-lg font-bold">:</div>
              <motion.div
                className="text-2xl"
                animate={step >= 3 ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                {step >= 3 ? '🍃' : '❓'}
              </motion.div>
              <div className="text-center">
                <motion.div 
                  className="font-bold text-sm text-green-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: step >= 3 ? 1 : 0 }}
                >
                  Leaves
                </motion.div>
                <div className="text-xs text-muted-foreground">Parts</div>
              </div>
            </motion.div>
          </div>

          {/* Relationship */}
          <motion.div
            className="p-3 rounded-xl bg-accent/10 border border-accent/30 text-center mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
          >
            <div className="text-xs font-bold text-accent">Relationship Pattern</div>
            <div className="text-xs text-muted-foreground">"X is composed of Y"</div>
          </motion.div>

          {/* Step Breakdown */}
          <motion.div
            className="flex gap-2 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3 }}
          >
            <div className={`p-2 rounded-lg text-center text-xs ${step >= 0 ? 'bg-green-primary/10 border border-green-primary' : 'bg-muted/50'}`}>
              <div className="text-xl mb-1">📖→📄</div>
              <div>Book has Pages</div>
            </div>
            <div className={`p-2 rounded-lg text-center text-xs ${step >= 2 ? 'bg-green-primary/10 border border-green-primary' : 'bg-muted/50'}`}>
              <div className="text-xl mb-1">🌳→🍃</div>
              <div>Tree has Leaves</div>
            </div>
            <div className={`p-2 rounded-lg text-center text-xs ${step >= 3 ? 'bg-success/10 border border-success' : 'bg-muted/50'}`}>
              <div className="text-xl mb-1">✓</div>
              <div>Same Pattern!</div>
            </div>
          </motion.div>

          {/* Answer */}
          <motion.div
            className="px-4 py-2 rounded-xl bg-green-primary text-primary-foreground font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: step >= 3 ? 1 : 0, scale: step >= 3 ? 1 : 0.9 }}
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
