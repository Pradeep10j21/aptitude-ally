import { motion } from 'framer-motion';

interface ErrorSpottingDiagramProps {
  step: number;
}

const ErrorSpottingDiagram = ({ step }: ErrorSpottingDiagramProps) => {
  const sentenceParts = [
    { text: 'He', label: 'A', hasError: false, explanation: 'Subject (3rd person singular) - Correct' },
    { text: 'go', label: 'B', hasError: true, explanation: 'Should be "goes" for 3rd person singular' },
    { text: 'to school', label: 'C', hasError: false, explanation: 'Prepositional phrase - Correct' },
    { text: 'every day', label: 'D', hasError: false, explanation: 'Time adverb (simple present) - Correct' },
  ];

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-bg-card to-green-light/30" />
        
        {/* Magnifying glass decoration */}
        <motion.div
          className="absolute top-4 right-4"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60">
            <circle cx="25" cy="25" r="18" fill="none" stroke="hsl(var(--green-primary))" strokeWidth="4" />
            <line x1="38" y1="38" x2="55" y2="55" stroke="hsl(var(--green-primary))" strokeWidth="5" strokeLinecap="round" />
            <circle cx="25" cy="25" r="12" fill="hsl(var(--green-light))" opacity="0.3" />
          </svg>
        </motion.div>

        {/* Sentence display */}
        <motion.div
          className="absolute top-20 left-1/2 -translate-x-1/2 p-6 rounded-2xl bg-card border-2 border-green-muted shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-xs text-muted-foreground mb-3 text-center">Find the error in the sentence:</div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {sentenceParts.map((part, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className={`px-4 py-3 rounded-lg border-2 transition-all ${
                  step >= index + 1 
                    ? part.hasError 
                      ? 'border-red-400 bg-red-50 dark:bg-red-900/20 dark:border-red-600' 
                      : 'border-green-primary bg-green-light/30'
                    : 'border-green-muted bg-card'
                }`}>
                  <div className="text-lg font-semibold text-foreground">
                    {part.hasError && step >= 2 ? (
                      <span className="relative">
                        <span className="line-through text-red-500 dark:text-red-400">{part.text}</span>
                        <motion.span
                          className="absolute -top-6 left-0 text-xs text-green-primary font-bold whitespace-nowrap"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: step >= 3 ? 1 : 0 }}
                        >
                          goes ✓
                        </motion.span>
                      </span>
                    ) : (
                      part.text
                    )}
                  </div>
                  <div className={`absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    step >= index + 1
                      ? part.hasError
                        ? 'bg-red-400 text-white dark:bg-red-600'
                        : 'bg-green-primary text-primary-foreground'
                      : 'bg-green-muted text-green-dark'
                  }`}>
                    {part.label}
                  </div>
                </div>
                
                {/* Explanation popup */}
                {step >= index + 1 && (
                  <motion.div
                    className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 p-2 rounded-lg text-xs whitespace-nowrap ${
                      part.hasError 
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300' 
                        : 'bg-green-light text-green-dark'
                    }`}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {part.hasError ? '✗ ' : '✓ '}{part.explanation}
                  </motion.div>
                )}
              </motion.div>
            ))}
            <span className="text-lg">.</span>
          </div>
        </motion.div>

        {/* Grammar rule box */}
        <motion.div
          className="absolute bottom-24 left-4 p-4 rounded-xl bg-card/95 border-2 border-green-primary shadow-lg max-w-[280px]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: step >= 1 ? 1 : 0, x: step >= 1 ? 0 : -20 }}
        >
          <div className="text-xs font-semibold text-green-muted mb-2">Grammar Rule</div>
          <div className="text-sm">
            <div className="mb-2">
              <span className="font-bold text-green-primary">Simple Present Tense</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-green-light/30 rounded">
                <div className="font-bold">I/You/We/They</div>
                <div className="text-muted-foreground">→ go</div>
              </div>
              <div className="p-2 bg-green-primary/10 rounded border border-green-primary">
                <div className="font-bold text-green-primary">He/She/It</div>
                <div className="text-green-primary">→ goes (+ s/es)</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Answer box */}
        {step >= 3 && (
          <motion.div
            className="absolute bottom-4 right-4 p-4 rounded-xl bg-green-primary/10 border-2 border-green-primary"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-center">
              <div className="text-xs text-muted-foreground">The Error is in</div>
              <motion.div 
                className="text-2xl font-bold text-green-primary"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                B) go
              </motion.div>
              <div className="text-xs text-muted-foreground mt-1">
                Should be: "He <span className="text-green-primary font-bold">goes</span> to school every day."
              </div>
            </div>
          </motion.div>
        )}

        {/* Correction arrow */}
        {step >= 3 && (
          <motion.div
            className="absolute bottom-40 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <svg width="200" height="40" viewBox="0 0 200 40">
              <motion.path
                d="M 40 35 L 100 10 L 160 35"
                stroke="hsl(var(--green-primary))"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8 }}
              />
              <polygon points="100,5 95,15 105,15" fill="hsl(var(--green-primary))" />
            </svg>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ErrorSpottingDiagram;
