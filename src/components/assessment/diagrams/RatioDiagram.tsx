import { motion } from 'framer-motion';

interface RatioDiagramProps {
  step: number;
  boysRatio?: number;
  girlsRatio?: number;
  total?: number;
}

const RatioDiagram = ({ 
  step, 
  boysRatio = 3, 
  girlsRatio = 5, 
  total = 40 
}: RatioDiagramProps) => {
  const totalParts = boysRatio + girlsRatio;
  const valuePerPart = total / totalParts;
  const boys = boysRatio * valuePerPart;
  const girls = girlsRatio * valuePerPart;
  
  return (
    <div className="diagram-container">
      <div className="diagram-scene flex flex-col items-center justify-center bg-gradient-to-br from-card to-background-secondary p-4">
        {/* Visual Representation */}
        <div className="w-full max-w-md">
          {/* People Icons Row */}
          <motion.div
            className="flex justify-center gap-1 mb-6 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* Boys */}
            {Array.from({ length: boysRatio }).map((_, i) => (
              <motion.div
                key={`boy-${i}`}
                className="flex flex-col items-center"
                initial={{ scale: 0, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ delay: 0.1 * i, type: 'spring' }}
              >
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-xl">
                  👦
                </div>
              </motion.div>
            ))}
            
            <div className="w-4" />
            
            {/* Girls */}
            {Array.from({ length: girlsRatio }).map((_, i) => (
              <motion.div
                key={`girl-${i}`}
                className="flex flex-col items-center"
                initial={{ scale: 0, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ delay: 0.3 + 0.1 * i, type: 'spring' }}
              >
                <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-xl">
                  👧
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Ratio Labels */}
          <motion.div
            className="flex justify-center items-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="px-4 py-2 rounded-lg bg-blue-500/20 text-blue-700 dark:text-blue-300 font-bold">
              Boys: {boysRatio}
            </div>
            <span className="text-2xl font-bold text-muted-foreground">:</span>
            <div className="px-4 py-2 rounded-lg bg-pink-500/20 text-pink-700 dark:text-pink-300 font-bold">
              Girls: {girlsRatio}
            </div>
          </motion.div>

          {/* Bar Visualization */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="h-12 rounded-xl overflow-hidden flex">
              <motion.div
                className="bg-blue-500 flex items-center justify-center text-white font-bold"
                style={{ width: `${(boysRatio / totalParts) * 100}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${(boysRatio / totalParts) * 100}%` }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                {step >= 2 && `${boys}`}
              </motion.div>
              <motion.div
                className="bg-pink-500 flex items-center justify-center text-white font-bold"
                style={{ width: `${(girlsRatio / totalParts) * 100}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${(girlsRatio / totalParts) * 100}%` }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                {step >= 2 && `${girls}`}
              </motion.div>
            </div>
            <div className="flex justify-between mt-1 text-xs text-muted-foreground">
              <span>0</span>
              <span className="font-bold">{total} students total</span>
            </div>
          </motion.div>

          {/* Calculation Steps */}
          <div className="space-y-3">
            <motion.div
              className={`p-3 rounded-lg ${step >= 1 ? 'bg-primary/10 border border-primary/30' : 'bg-muted/50'}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <p className="text-sm">
                <span className="font-bold">Step 1:</span> Total parts = {boysRatio} + {girlsRatio} = <span className="font-bold text-primary">{totalParts} parts</span>
              </p>
            </motion.div>
            
            <motion.div
              className={`p-3 rounded-lg ${step >= 2 ? 'bg-accent/10 border border-accent/30' : 'bg-muted/50'}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: step >= 1 ? 1 : 0.5, x: 0 }}
              transition={{ delay: 1.2 }}
            >
              <p className="text-sm">
                <span className="font-bold">Step 2:</span> Value per part = {total} ÷ {totalParts} = <span className="font-bold text-accent">{valuePerPart} students</span>
              </p>
            </motion.div>
            
            <motion.div
              className={`p-3 rounded-lg ${step >= 3 ? 'bg-success/10 border border-success' : 'bg-muted/50'}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: step >= 2 ? 1 : 0.5, x: 0 }}
              transition={{ delay: 1.4 }}
            >
              <p className="text-sm">
                <span className="font-bold">Step 3:</span> Girls = {girlsRatio} × {valuePerPart} = <motion.span 
                  className="font-bold text-success text-lg"
                  animate={step >= 3 ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {girls} girls
                </motion.span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatioDiagram;
