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
      <div className="diagram-scene relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-bg-card to-green-light/30" />
        
        {/* Grammar rule board */}
        <motion.div
          className="absolute top-4 left-1/2 -translate-x-1/2 p-4 rounded-xl bg-card border-2 border-green-primary shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-xs font-semibold text-green-muted mb-2 text-center">Subject-Verb Agreement Rule</div>
          <div className="flex items-center gap-4 text-sm">
            <div className="text-center p-2 bg-green-light/50 rounded">
              <div className="font-bold text-green-primary">She/He/It</div>
              <div className="text-xs text-muted-foreground">3rd person singular</div>
            </div>
            <div className="text-lg text-green-primary">+</div>
            <div className="text-center p-2 bg-green-primary/10 rounded">
              <div className="font-bold text-green-primary">doesn't + verb (base)</div>
              <div className="text-xs text-muted-foreground">NOT don't / doesn't + s</div>
            </div>
          </div>
        </motion.div>

        {/* Options analysis */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-8 w-[90%] max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="space-y-3">
            {options.map((option, index) => {
              const showAnalysis = step >= index + 1;
              const letter = String.fromCharCode(65 + index);
              
              return (
                <motion.div
                  key={index}
                  className={`p-3 rounded-xl border-2 ${
                    option.isCorrect && step >= 3 
                      ? 'border-green-primary bg-green-primary/10' 
                      : showAnalysis && !option.isCorrect 
                        ? 'border-red-300 bg-red-50 dark:bg-red-900/10 dark:border-red-800' 
                        : 'border-green-muted bg-card'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      option.isCorrect && step >= 3
                        ? 'bg-green-primary text-primary-foreground'
                        : showAnalysis && !option.isCorrect
                          ? 'bg-red-400 text-white dark:bg-red-600'
                          : 'bg-green-light text-green-dark'
                    }`}>
                      {letter}
                    </div>
                    
                    <div className="flex-1">
                      <div className="text-sm font-medium">
                        {option.error ? (
                          <span>
                            {option.text.split(option.error).map((part, i) => (
                              <span key={i}>
                                {part}
                                {i < option.text.split(option.error).length - 1 && (
                                  <span className={`px-1 rounded ${
                                    showAnalysis 
                                      ? 'bg-red-200 text-red-700 dark:bg-red-800 dark:text-red-200 line-through' 
                                      : ''
                                  }`}>
                                    {option.error}
                                  </span>
                                )}
                              </span>
                            ))}
                          </span>
                        ) : (
                          <span className={step >= 3 ? 'text-green-primary font-bold' : ''}>
                            {option.text}
                          </span>
                        )}
                      </div>
                      
                      {showAnalysis && (
                        <motion.div
                          className="text-xs mt-1"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                        >
                          {option.isCorrect ? (
                            <span className="text-green-primary flex items-center gap-1">
                              <svg width="16" height="16" viewBox="0 0 16 16" className="fill-green-primary">
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM6.5 11.5L3.5 8.5l1-1 2 2 4-4 1 1-5 5z"/>
                              </svg>
                              Correct grammar!
                            </span>
                          ) : (
                            <span className="text-red-500 dark:text-red-400">
                              ✗ Error: "{option.error}" should be "{option.correct}"
                            </span>
                          )}
                        </motion.div>
                      )}
                    </div>
                    
                    {showAnalysis && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-xl"
                      >
                        {option.isCorrect ? '✓' : '✗'}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Answer highlight */}
        {step >= 3 && (
          <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 p-4 rounded-xl bg-green-primary/10 border-2 border-green-primary"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-center">
              <div className="text-xs text-muted-foreground">Correct Answer</div>
              <motion.div 
                className="text-lg font-bold text-green-primary"
                animate={{ scale: [1, 1.05, 1] }}
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
