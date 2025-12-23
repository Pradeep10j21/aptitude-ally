import { motion } from 'framer-motion';

interface SpeedConversionDiagramProps {
  step: number;
  speedKmh?: number;
}

const SpeedConversionDiagram = ({ step, speedKmh = 36 }: SpeedConversionDiagramProps) => {
  const speedMs = (speedKmh * 1000) / 3600;

  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Background with track */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100 to-green-50 dark:from-green-900/20 dark:to-green-950/30" />
        
        {/* Sun */}
        <motion.div
          className="absolute top-4 right-8 w-12 h-12 rounded-full bg-yellow-300 dark:bg-yellow-500"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ boxShadow: '0 0 30px rgba(250, 204, 21, 0.5)' }}
        />
        
        {/* Mountains */}
        <svg className="absolute bottom-20 left-0 w-full h-20" viewBox="0 0 400 80" preserveAspectRatio="none">
          <polygon points="0,80 60,20 120,80" fill="hsl(var(--green-muted))" opacity="0.4" />
          <polygon points="100,80 180,10 260,80" fill="hsl(var(--green-dark))" opacity="0.5" />
          <polygon points="220,80 300,25 380,80" fill="hsl(var(--green-muted))" opacity="0.4" />
        </svg>
        
        {/* Ground/Track */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-700 to-green-600 dark:from-green-800 dark:to-green-700" />
        
        {/* Railway Track */}
        <div className="absolute bottom-16 left-0 right-0 h-4 bg-gray-700">
          <div className="absolute inset-0 flex items-center justify-between px-2">
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.div 
                key={i} 
                className="w-1 h-5 bg-amber-800 dark:bg-amber-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.02 * i }}
              />
            ))}
          </div>
        </div>

        {/* Train */}
        <motion.div
          className="absolute bottom-18"
          initial={{ left: '-80px' }}
          animate={{ 
            left: step >= 2 ? '70%' : step >= 1 ? '30%' : '5%'
          }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        >
          <svg width="100" height="60" viewBox="0 0 100 60">
            {/* Main Body */}
            <rect x="10" y="15" width="70" height="30" rx="5" fill="hsl(var(--green-primary))" />
            {/* Cabin */}
            <rect x="55" y="5" width="25" height="40" rx="5" fill="hsl(var(--green-dark))" />
            {/* Windows */}
            <rect x="15" y="20" width="12" height="12" rx="2" fill="hsl(var(--background))" />
            <rect x="32" y="20" width="12" height="12" rx="2" fill="hsl(var(--background))" />
            <rect x="60" y="10" width="15" height="15" rx="2" fill="hsl(var(--background))" />
            {/* Wheels */}
            <circle cx="22" cy="48" r="8" fill="#374151" />
            <circle cx="22" cy="48" r="4" fill="#6B7280" />
            <circle cx="45" cy="48" r="8" fill="#374151" />
            <circle cx="45" cy="48" r="4" fill="#6B7280" />
            <circle cx="68" cy="48" r="8" fill="#374151" />
            <circle cx="68" cy="48" r="4" fill="#6B7280" />
            {/* Chimney */}
            <rect x="18" y="3" width="10" height="14" rx="2" fill="#374151" />
          </svg>
          
          {/* Speed indicator */}
          <motion.div
            className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-bold whitespace-nowrap"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {step >= 3 ? `${speedMs} m/s` : `${speedKmh} km/h`}
          </motion.div>
          
          {/* Smoke */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute -top-4 left-6 w-5 h-5 rounded-full bg-gray-400/50 dark:bg-gray-500/50"
              animate={{
                y: [-10, -35],
                x: [i * 4, i * 4 + 12],
                opacity: [0.7, 0],
                scale: [0.4, 1.3],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: i * 0.25,
              }}
            />
          ))}
        </motion.div>

        {/* Conversion visualization */}
        <motion.div
          className="absolute top-4 left-1/2 -translate-x-1/2 p-4 rounded-xl bg-card/95 border-2 border-green-primary shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-xs font-semibold text-green-muted mb-3 text-center">Speed Conversion</div>
          
          <div className="flex items-center gap-3">
            {/* km/h box */}
            <motion.div
              className={`p-3 rounded-lg border-2 ${step >= 1 ? 'border-green-primary bg-green-light/30' : 'border-green-muted bg-card'}`}
              animate={step >= 1 ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 1 }}
            >
              <div className="text-2xl font-bold text-green-primary">{speedKmh}</div>
              <div className="text-xs text-muted-foreground">km/h</div>
            </motion.div>
            
            {/* Conversion arrow */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 1 ? 1 : 0 }}
            >
              <svg width="60" height="40" viewBox="0 0 60 40">
                <motion.path
                  d="M 5 20 L 45 20"
                  stroke="hsl(var(--green-primary))"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: step >= 2 ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />
                <polygon points="45,20 38,15 38,25" fill="hsl(var(--green-primary))" />
              </svg>
              <div className="text-xs text-muted-foreground">×5/18</div>
            </motion.div>
            
            {/* m/s box */}
            <motion.div
              className={`p-3 rounded-lg border-2 ${step >= 3 ? 'border-green-primary bg-green-primary/10' : 'border-green-muted bg-card'}`}
              animate={step >= 3 ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 1, repeat: step >= 3 ? Infinity : 0, repeatDelay: 1 }}
            >
              <div className={`text-2xl font-bold ${step >= 3 ? 'text-green-primary' : 'text-muted-foreground'}`}>
                {step >= 3 ? speedMs : '?'}
              </div>
              <div className="text-xs text-muted-foreground">m/s</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Formula explanation */}
        <motion.div
          className="absolute bottom-24 left-4 p-3 rounded-xl bg-card/95 border border-green-muted shadow-lg max-w-[200px]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-xs font-semibold text-green-muted mb-2">Formula</div>
          <div className="text-sm text-foreground">
            {step === 0 && (
              <div>
                <div className="font-bold text-green-primary">km/h → m/s</div>
                <div className="text-xs text-muted-foreground">Multiply by 5/18</div>
              </div>
            )}
            {step === 1 && (
              <div className="space-y-1">
                <div>{speedKmh} km/h × (5/18)</div>
                <div className="text-xs text-muted-foreground">1 km = 1000 m</div>
                <div className="text-xs text-muted-foreground">1 hr = 3600 s</div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-1">
                <div>= {speedKmh} × 5 ÷ 18</div>
                <div>= {speedKmh * 5} ÷ 18</div>
                <div className="text-green-primary font-bold">= {speedMs} m/s</div>
              </div>
            )}
            {step === 3 && (
              <motion.div 
                className="p-2 bg-green-primary/10 rounded text-center"
                animate={{ boxShadow: ['0 0 0 0 rgba(15,44,31,0.4)', '0 0 0 8px rgba(15,44,31,0)', '0 0 0 0 rgba(15,44,31,0)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-xs text-muted-foreground">Answer</div>
                <div className="text-xl text-green-primary font-bold">{speedMs} m/s</div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Unit comparison */}
        <motion.div
          className="absolute bottom-24 right-4 p-3 rounded-xl bg-card/95 border border-green-muted text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 1 ? 1 : 0 }}
        >
          <div className="font-semibold text-green-muted mb-2">Quick Reference</div>
          <div className="space-y-1">
            <div className="flex justify-between gap-4">
              <span>18 km/h</span>
              <span className="text-green-primary">=</span>
              <span className="font-bold">5 m/s</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>{speedKmh} km/h</span>
              <span className="text-green-primary">=</span>
              <span className="font-bold">{speedMs} m/s</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SpeedConversionDiagram;
