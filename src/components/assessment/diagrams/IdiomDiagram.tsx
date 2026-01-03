import { motion } from 'framer-motion';

interface IdiomDiagramProps {
  step: number;
}

const IdiomDiagram = ({ step }: IdiomDiagramProps) => {
  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Background - Night Scene */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700" />
        
        {/* Stars */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 40}%` 
            }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2 + Math.random() * 2, repeat: Infinity }}
          />
        ))}

        {/* Moon */}
        <motion.div
          className="absolute top-6 right-8 w-12 h-12 rounded-full bg-yellow-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ boxShadow: '0 0 30px rgba(253, 224, 71, 0.5)' }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Desk Scene */}
          <motion.div
            className="relative mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Desk */}
            <div className="w-64 h-4 bg-amber-800 rounded-t" />
            <div className="w-64 h-24 bg-amber-700 rounded-b flex items-start justify-center pt-4 gap-4">
              {/* Oil Lamp */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="w-6 h-6 rounded-full bg-yellow-500"
                  animate={{ 
                    boxShadow: ['0 0 10px #fbbf24', '0 0 25px #fbbf24', '0 0 10px #fbbf24'] 
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <div className="w-4 h-8 bg-amber-600 rounded-b" />
                <div className="text-xs mt-1 text-amber-200">🪔 Oil</div>
              </motion.div>
              
              {/* Books */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: step >= 1 ? 1 : 0.5 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-3xl">📚</div>
                <div className="text-xs mt-1 text-amber-200">Books</div>
              </motion.div>
              
              {/* Person */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: step >= 1 ? 1 : 0.5 }}
                transition={{ delay: 0.7 }}
              >
                <div className="text-3xl">👨‍💼</div>
                <div className="text-xs mt-1 text-amber-200">Studying</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Time Indicator */}
          <motion.div
            className="flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 0 ? 1 : 0 }}
          >
            <span className="text-xl">🕛</span>
            <span className="text-white text-sm">Midnight</span>
          </motion.div>

          {/* Idiom Breakdown */}
          <motion.div
            className="p-4 rounded-xl bg-card/95 border border-border text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: step >= 2 ? 1 : 0.3, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-lg font-bold mb-2">"Burn the Midnight Oil"</div>
            <div className="text-sm text-muted-foreground mb-3">
              Historical: People used oil lamps to work at night
            </div>
            <motion.div
              className="p-3 rounded-lg bg-green-primary/10 border border-green-primary"
              animate={step >= 3 ? { scale: [1, 1.02, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <div className="text-sm font-bold text-green-primary">
                Meaning: To work or study late into the night
              </div>
            </motion.div>
          </motion.div>

          {/* Example */}
          <motion.div
            className="mt-4 text-center text-sm text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 3 ? 1 : 0 }}
          >
            Example: "She burned the midnight oil preparing for her exam."
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IdiomDiagram;
