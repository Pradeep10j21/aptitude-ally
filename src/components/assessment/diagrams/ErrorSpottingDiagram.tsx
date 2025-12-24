import { motion } from 'framer-motion';

interface ErrorSpottingDiagramProps {
  step: number;
}

const ErrorSpottingDiagram = ({ step }: ErrorSpottingDiagramProps) => {
  const sentenceParts = [
    { text: 'He', label: 'A', hasError: false, explanation: 'Subject - OK' },
    { text: 'go', label: 'B', hasError: true, explanation: 'Should be "goes"' },
    { text: 'to school', label: 'C', hasError: false, explanation: 'Phrase - OK' },
    { text: 'every day', label: 'D', hasError: false, explanation: 'Time - OK' },
  ];

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative bg-gradient-to-b from-rose-50 to-green-50 dark:from-green-900/20 dark:to-green-950/30">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-rose-200/20 to-transparent dark:from-rose-900/10" />
        
        {/* Magnifying glass */}
        <motion.div
          className="absolute top-3 right-4"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40">
            <circle cx="18" cy="18" r="12" fill="none" stroke="hsl(var(--green-primary))" strokeWidth="3" />
            <line x1="27" y1="27" x2="36" y2="36" stroke="hsl(var(--green-primary))" strokeWidth="4" strokeLinecap="round" />
            <circle cx="18" cy="18" r="8" fill="hsl(var(--green-light))" opacity="0.3" />
          </svg>
        </motion.div>

        {/* Sentence display */}
        <motion.div
          className="absolute top-12 left-1/2 -translate-x-1/2 p-4 rounded-xl bg-card border-2 border-green-muted shadow-md"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-xs text-muted-foreground mb-2 text-center">Find the error:</div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {sentenceParts.map((part, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className={`px-3 py-2 rounded-lg border-2 ${
                  step >= index + 1 
                    ? part.hasError 
                      ? 'border-red-400 bg-red-50 dark:bg-red-900/20 dark:border-red-600' 
                      : 'border-green-primary bg-green-light/30'
                    : 'border-green-muted bg-card'
                }`}>
                  <div className="text-base font-semibold text-foreground">
                    {part.hasError && step >= 2 ? (
                      <span className="relative">
                        <span className="line-through text-red-500 dark:text-red-400">{part.text}</span>
                        {step >= 3 && (
                          <motion.span
                            className="absolute -top-5 left-0 text-xs text-green-primary font-bold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            goes ✓
                          </motion.span>
                        )}
                      </span>
                    ) : (
                      part.text
                    )}
                  </div>
                  <div className={`absolute -top-2 -left-2 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                    step >= index + 1
                      ? part.hasError
                        ? 'bg-red-400 text-white'
                        : 'bg-green-primary text-primary-foreground'
                      : 'bg-green-muted text-green-dark'
                  }`}>
                    {part.label}
                  </div>
                </div>
              </motion.div>
            ))}
            <span className="text-base">.</span>
          </div>
        </motion.div>

        {/* Grammar rule */}
        <motion.div
          className="absolute bottom-20 left-4 p-3 rounded-lg bg-card/95 border border-green-primary shadow-md max-w-[200px]"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: step >= 1 ? 1 : 0, x: step >= 1 ? 0 : -15 }}
        >
          <div className="text-xs font-semibold text-green-muted mb-1">Grammar Rule</div>
          <div className="text-xs">
            <div className="font-bold text-green-primary mb-1">Simple Present</div>
            <div className="grid grid-cols-2 gap-1">
              <div className="p-1 bg-green-light/30 rounded text-center">
                <div className="font-bold">I/You/They</div>
                <div className="text-muted-foreground">go</div>
              </div>
              <div className="p-1 bg-green-primary/10 rounded border border-green-primary text-center">
                <div className="font-bold text-green-primary">He/She/It</div>
                <div className="text-green-primary">goes</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Answer */}
        {step >= 3 && (
          <motion.div
            className="absolute bottom-4 right-4 p-3 rounded-lg bg-green-primary/10 border-2 border-green-primary"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-center">
              <div className="text-xs text-muted-foreground">Error is in</div>
              <motion.div 
                className="text-xl font-bold text-green-primary"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                B) go
              </motion.div>
              <div className="text-xs text-muted-foreground">
                Should be "goes"
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ErrorSpottingDiagram;