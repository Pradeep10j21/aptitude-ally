import { motion } from 'framer-motion';

interface CircleAreaDiagramProps {
  step: number;
}

const CircleAreaDiagram = ({ step }: CircleAreaDiagramProps) => {
  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-background to-green-light/20" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Circles Comparison */}
          <div className="flex items-center justify-center gap-8 mb-6">
            {/* Original Circle */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="relative">
                <motion.div
                  className="w-16 h-16 rounded-full border-4 border-blue-500 bg-blue-500/20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring' }}
                />
                {/* Radius line */}
                <motion.div
                  className="absolute top-1/2 left-1/2 h-0.5 bg-blue-500 origin-left"
                  style={{ width: '32px' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: step >= 0 ? 1 : 0 }}
                />
                <div className="absolute top-1/2 left-full ml-1 text-xs font-bold text-blue-500">r</div>
              </div>
              <div className="text-sm mt-2 font-bold">Original</div>
              <div className="text-xs text-muted-foreground">Area = πr²</div>
            </motion.div>

            {/* Arrow */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 1 ? 1 : 0.3 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-sm font-bold text-green-primary">r → 2r</div>
              <svg width="60" height="20" viewBox="0 0 60 20">
                <path d="M 0 10 L 50 10 M 45 5 L 50 10 L 45 15" stroke="hsl(var(--green-primary))" strokeWidth="2" fill="none" />
              </svg>
              <div className="text-xs text-muted-foreground">Doubled</div>
            </motion.div>

            {/* New Circle (doubled) */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: step >= 1 ? 1 : 0.3, scale: step >= 1 ? 1 : 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative">
                <motion.div
                  className="w-32 h-32 rounded-full border-4 border-green-primary bg-green-primary/20"
                  initial={{ scale: 0 }}
                  animate={{ scale: step >= 1 ? 1 : 0 }}
                  transition={{ type: 'spring', delay: 0.5 }}
                />
                {/* Radius line */}
                <motion.div
                  className="absolute top-1/2 left-1/2 h-0.5 bg-green-primary origin-left"
                  style={{ width: '64px' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: step >= 1 ? 1 : 0 }}
                  transition={{ delay: 0.6 }}
                />
                <div className="absolute top-1/2 left-full ml-1 text-xs font-bold text-green-primary">2r</div>
              </div>
              <div className="text-sm mt-2 font-bold">New</div>
              <div className="text-xs text-muted-foreground">Area = π(2r)²</div>
            </motion.div>
          </div>

          {/* Calculation */}
          <motion.div
            className="p-4 rounded-xl bg-card/90 border border-border text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="space-y-2 text-sm font-mono">
              <div>New Area = π(2r)²</div>
              <div>= π × 4r²</div>
              <div>= <span className="text-green-primary font-bold">4</span> × πr²</div>
              <div>= <span className="text-green-primary font-bold">4</span> × Original Area</div>
            </div>
          </motion.div>

          {/* Answer */}
          <motion.div
            className="mt-4 px-6 py-3 rounded-xl bg-green-primary text-primary-foreground"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: step >= 3 ? 1 : 0, scale: step >= 3 ? 1 : 0.9 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="text-xl font-bold"
              animate={step >= 3 ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              Area increases 4 times!
            </motion.div>
          </motion.div>

          {/* Pattern Info */}
          <motion.div
            className="mt-3 text-xs text-center text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 3 ? 1 : 0 }}
          >
            Pattern: If radius multiplied by n, area multiplied by n²
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CircleAreaDiagram;
