import { motion } from 'framer-motion';

interface AnagramDiagramProps {
  step: number;
  scrambled: string;
  answer: string;
  category: string;
}

const AnagramDiagram = ({ 
  step, 
  scrambled = 'CIFAIPC', 
  answer = 'PACIFIC',
  category = 'Ocean'
}: AnagramDiagramProps) => {
  const letters = scrambled.split('');
  const answerLetters = answer.split('');
  
  return (
    <div className="diagram-container">
      <div className="diagram-scene flex flex-col items-center justify-center bg-gradient-to-br from-card to-background-secondary p-6">
        {/* Scrambled Letters */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-center text-sm text-muted-foreground mb-3">Scrambled Letters</p>
          <div className="flex gap-2 justify-center">
            {letters.map((letter, index) => (
              <motion.div
                key={`scrambled-${index}`}
                className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-warning/20 border-2 border-warning flex items-center justify-center font-bold text-lg md:text-xl text-warning"
                initial={{ rotate: Math.random() * 30 - 15, y: -50, opacity: 0 }}
                animate={{ 
                  rotate: step >= 2 ? 0 : Math.random() * 10 - 5,
                  y: 0,
                  opacity: 1
                }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.1, rotate: 0 }}
              >
                {letter}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Arrow Animation */}
        <motion.div
          className="my-4"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: step >= 2 ? 1 : 0, scale: step >= 2 ? 1 : 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" className="text-primary">
              <path
                d="M20 5 L20 30 M10 22 L20 32 L30 22"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Answer Letters */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 2 ? 1 : 0.3 }}
          transition={{ delay: 1 }}
        >
          <p className="text-center text-sm text-muted-foreground mb-3">Rearranged</p>
          <div className="flex gap-2 justify-center">
            {answerLetters.map((letter, index) => (
              <motion.div
                key={`answer-${index}`}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center font-bold text-lg md:text-xl ${
                  step >= 2 
                    ? 'bg-success/20 border-2 border-success text-success' 
                    : 'bg-muted border-2 border-dashed border-muted-foreground/30 text-muted-foreground'
                }`}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ 
                  scale: step >= 2 ? 1 : 0.8,
                  rotate: 0
                }}
                transition={{ delay: 1 + index * 0.08, type: 'spring', stiffness: 200 }}
              >
                {step >= 2 ? letter : '?'}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Answer Reveal */}
        {step >= 3 && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <div className="relative inline-block">
              {/* Water/Ocean Effect */}
              <motion.div
                className="absolute inset-0 bg-blue-400/20 rounded-2xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/50">
                <motion.div
                  className="text-5xl mb-2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🌊
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-1">{answer}</h3>
                <p className="text-muted-foreground">The {category}</p>
                
                {/* Wave decoration */}
                <svg className="absolute bottom-0 left-0 right-0 h-8" viewBox="0 0 200 30" preserveAspectRatio="none">
                  <motion.path
                    d="M0,15 Q25,0 50,15 T100,15 T150,15 T200,15 V30 H0 Z"
                    fill="hsl(var(--primary) / 0.1)"
                    animate={{
                      d: [
                        "M0,15 Q25,0 50,15 T100,15 T150,15 T200,15 V30 H0 Z",
                        "M0,15 Q25,30 50,15 T100,15 T150,15 T200,15 V30 H0 Z",
                        "M0,15 Q25,0 50,15 T100,15 T150,15 T200,15 V30 H0 Z"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </svg>
              </div>
            </div>
            
            <motion.p
              className="text-sm text-muted-foreground mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              The Pacific Ocean - the largest ocean on Earth! 🌏
            </motion.p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AnagramDiagram;
