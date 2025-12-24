import { motion } from 'framer-motion';

interface SentenceCorrectionDiagramProps {
  step: number;
}

const SentenceCorrectionDiagram = ({ step }: SentenceCorrectionDiagramProps) => {
  const options = [
    { text: "She don't like coffee", error: "don't", correct: "doesn't", isCorrect: false },
    { text: "She doesn't likes coffee", error: "likes", correct: "like", isCorrect: false },
    { text: "She doesn't like coffee", error: null, correct: null, isCorrect: true },
    { text: "She didn't likes coffee", error: "likes", correct: "like", isCorrect: false },
  ];

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative bg-gradient-to-b from-indigo-50 to-green-50 dark:from-green-900/20 dark:to-green-950/30">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-200/20 to-transparent dark:from-indigo-900/10" />
        
        {/* Grammar rule at top */}
        <motion.div
          className="absolute top-3 left-1/2 -translate-x-1/2 p-2 rounded-lg bg-card border border-green-primary shadow-md"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-xs font-semibold text-green-muted mb-1 text-center">Subject-Verb Agreement</div>
          <div className="flex items-center gap-2 text-xs">
            <div className="text-center px-2 py-1 bg-green-light/50 rounded">
              <div className="font-bold text-green-primary">She/He/It</div>
            </div>
            <span className="text-green-primary">+</span>
            <div className="text-center px-2 py-1 bg-green-primary/10 rounded">
              <div className="font-bold text-green-primary">doesn't + verb base</div>
            </div>
          </div>
        </motion.div>

        {/* Options grid */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-4 w-[92%] max-w-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="grid grid-cols-1 gap-2">
            {options.map((option, index) => {
              const showAnalysis = step >= index + 1;
              const letter = String.fromCharCode(65 + index);
              
              return (
                <motion.div
                  key={index}
                  className={`p-2 rounded-lg border-2 flex items-center gap-2 ${
                    option.isCorrect && showAnalysis 
                      ? 'border-green-primary bg-green-primary/10' 
                      : showAnalysis && !option.isCorrect 
                        ? 'border-red-300 bg-red-50 dark:bg-red-900/10 dark:border-red-700' 
                        : 'border-green-muted bg-card'
                  }`}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * index }}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                    option.isCorrect && showAnalysis
                      ? 'bg-green-primary text-primary-foreground'
                      : showAnalysis && !option.isCorrect
                        ? 'bg-red-400 text-white'
                        : 'bg-green-light text-green-dark'
                  }`}>
                    {letter}
                  </div>
                  
                  <div className="flex-1 text-sm">
                    {option.error && showAnalysis ? (
                      <span>
                        {option.text.split(option.error).map((part, i) => (
                          <span key={i}>
                            {part}
                            {i < option.text.split(option.error).length - 1 && (
                              <span className="px-0.5 rounded bg-red-200 text-red-700 dark:bg-red-800 dark:text-red-200 line-through">
                                {option.error}
                              </span>
                            )}
                          </span>
                        ))}
                      </span>
                    ) : (
                      <span className={option.isCorrect && showAnalysis ? 'text-green-primary font-semibold' : ''}>
                        {option.text}
                      </span>
                    )}
                  </div>
                  
                  {showAnalysis && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`text-base ${option.isCorrect ? 'text-green-primary' : 'text-red-500'}`}
                    >
                      {option.isCorrect ? '✓' : '✗'}
                    </motion.span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Answer box */}
        {step >= 3 && (
          <motion.div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 p-3 rounded-lg bg-green-primary/10 border-2 border-green-primary"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-center">
              <div className="text-xs text-muted-foreground">Correct Answer</div>
              <motion.div 
                className="text-sm font-bold text-green-primary"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                C) She doesn't like coffee
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SentenceCorrectionDiagram;