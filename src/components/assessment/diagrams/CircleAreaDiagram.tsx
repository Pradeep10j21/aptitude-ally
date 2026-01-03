import { motion } from 'framer-motion';

interface CircleAreaDiagramProps {
  step: number;
}

const CircleAreaDiagram = ({ step }: CircleAreaDiagramProps) => {
  return (
    <div className="diagram-container">
      <div className="diagram-scene relative bg-gradient-to-br from-green-soft/20 via-background to-green-light/20">
        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Circles Comparison */}
          <div className="flex items-center justify-center gap-6 mb-4">
            {/* Original */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="relative">
                <motion.div
                  className="w-12 h-12 rounded-full border-4 border-blue-500 bg-blue-500/20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 h-0.5 bg-blue-500 origin-left"
                  style={{ width: '24px' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: step >= 0 ? 1 : 0 }}
                />
                <div className="absolute top-1/2 left-full ml-1 text-xs font-bold text-blue-500">r</div>
              </div>
              <div className="text-xs mt-2 font-bold">Original</div>
              <div className="text-xs text-muted-foreground">Area = πr²</div>
            </motion.div>

            {/* Arrow */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 1 ? 1 : 0.3 }}
            >
              <div className="text-xs font-bold text-green-primary">r → 2r</div>
              <span className="text-xl">→</span>
            </motion.div>

            {/* Doubled */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: step >= 1 ? 1 : 0.3, scale: step >= 1 ? 1 : 0 }}
            >
              <div className="relative">
                <motion.div
                  className="w-24 h-24 rounded-full border-4 border-green-primary bg-green-primary/20"
                  initial={{ scale: 0 }}
                  animate={{ scale: step >= 1 ? 1 : 0 }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 h-0.5 bg-green-primary origin-left"
                  style={{ width: '48px' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: step >= 1 ? 1 : 0 }}
                />
                <div className="absolute top-1/2 left-full ml-1 text-xs font-bold text-green-primary">2r</div>
              </div>
              <div className="text-xs mt-2 font-bold">New</div>
              <div className="text-xs text-muted-foreground">Area = π(2r)²</div>
            </motion.div>
          </div>

          {/* Calculation */}
          <motion.div
            className="p-3 rounded-xl bg-card/90 border border-border text-center mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3 }}
          >
            <div className="space-y-1 text-xs font-mono">
              <div>New Area = π(2r)²</div>
              <div>= π × 4r²</div>
              <div>= <span className="text-green-primary font-bold">4</span> × πr²</div>
              <div>= <span className="text-green-primary font-bold">4</span> × Original</div>
            </div>
          </motion.div>

          {/* Answer */}
          <motion.div
            className="px-4 py-2 rounded-xl bg-green-primary text-primary-foreground"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: step >= 3 ? 1 : 0, scale: step >= 3 ? 1 : 0.9 }}
          >
            <motion.div
              className="text-base font-bold"
              animate={step >= 3 ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              Area × 4 !
            </motion.div>
          </motion.div>

          {/* Pattern */}
          <motion.div
            className="mt-2 text-xs text-muted-foreground text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 3 ? 1 : 0 }}
          >
            Pattern: radius ×n → area ×n²
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CircleAreaDiagram;
