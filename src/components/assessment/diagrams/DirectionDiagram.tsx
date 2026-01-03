import { motion } from 'framer-motion';

interface DirectionDiagramProps {
  step: number;
}

const DirectionDiagram = ({ step }: DirectionDiagramProps) => {
  return (
    <div className="diagram-container">
      <div className="diagram-scene relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-soft/20 via-background to-green-light/20">
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <defs>
              <pattern id="grid-dir" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="hsl(var(--green-dark))" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-dir)" />
          </svg>
        </div>
        
        {/* Compass */}
        <motion.div
          className="absolute top-3 right-3 w-16 h-16"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
        >
          <svg viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="28" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
            <text x="30" y="15" textAnchor="middle" className="text-xs font-bold fill-green-primary">N</text>
            <text x="30" y="52" textAnchor="middle" className="text-xs fill-muted-foreground">S</text>
            <text x="10" y="33" textAnchor="middle" className="text-xs fill-muted-foreground">W</text>
            <text x="50" y="33" textAnchor="middle" className="text-xs fill-muted-foreground">E</text>
            <polygon points="30,18 27,28 33,28" fill="hsl(var(--destructive))" />
            <polygon points="30,42 27,32 33,32" fill="hsl(var(--muted))" />
          </svg>
        </motion.div>

        {/* Path Visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="280" height="220" viewBox="0 0 280 220">
            {/* Starting Point */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <circle cx="100" cy="180" r="8" fill="hsl(var(--green-primary))" />
              <text x="100" y="200" textAnchor="middle" className="text-xs font-bold fill-foreground">Start</text>
            </motion.g>

            {/* Path 1: 5 km North */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 0 ? 1 : 0.3 }}
              transition={{ delay: 0.2 }}
            >
              <motion.line
                x1="100" y1="175" x2="100" y2="75"
                stroke="hsl(var(--blue-500))"
                strokeWidth="3"
                strokeDasharray="200"
                initial={{ strokeDashoffset: 200 }}
                animate={{ strokeDashoffset: step >= 0 ? 0 : 200 }}
                transition={{ duration: 0.8 }}
              />
              <polygon points="100,75 95,85 105,85" fill="hsl(var(--blue-500))" />
              <rect x="105" y="115" width="50" height="20" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
              <text x="130" y="129" textAnchor="middle" className="text-xs font-bold fill-blue-500">5 km N</text>
            </motion.g>

            {/* Path 2: 3 km East */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 1 ? 1 : 0.3 }}
              transition={{ delay: 0.5 }}
            >
              <motion.line
                x1="105" y1="75" x2="180" y2="75"
                stroke="hsl(var(--amber-500))"
                strokeWidth="3"
                strokeDasharray="100"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: step >= 1 ? 0 : 100 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              <polygon points="180,75 170,70 170,80" fill="hsl(var(--amber-500))" />
              <rect x="130" y="55" width="50" height="18" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
              <text x="155" y="67" textAnchor="middle" className="text-xs font-bold fill-amber-500">3 km E</text>
            </motion.g>

            {/* Path 3: 5 km South */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 2 ? 1 : 0.3 }}
              transition={{ delay: 0.8 }}
            >
              <motion.line
                x1="180" y1="80" x2="180" y2="180"
                stroke="hsl(var(--purple-500))"
                strokeWidth="3"
                strokeDasharray="100"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: step >= 2 ? 0 : 100 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              <polygon points="180,180 175,170 185,170" fill="hsl(var(--purple-500))" />
              <rect x="185" y="115" width="50" height="20" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
              <text x="210" y="129" textAnchor="middle" className="text-xs font-bold fill-purple-500">5 km S</text>
            </motion.g>

            {/* Final Position */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: step >= 2 ? 1 : 0, scale: step >= 2 ? 1 : 0 }}
              transition={{ delay: 1.2 }}
            >
              <circle cx="180" cy="180" r="8" fill="hsl(var(--destructive))" />
              <text x="180" y="200" textAnchor="middle" className="text-xs font-bold fill-foreground">End</text>
            </motion.g>

            {/* Distance Line */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 3 ? 1 : 0 }}
              transition={{ delay: 1.5 }}
            >
              <line x1="100" y1="180" x2="180" y2="180" stroke="hsl(var(--green-primary))" strokeWidth="3" strokeDasharray="8,4" />
              <motion.text
                x="140" y="175"
                textAnchor="middle"
                className="text-sm font-bold fill-green-primary"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                3 km
              </motion.text>
            </motion.g>
          </svg>
        </div>

        {/* Explanation Box */}
        <motion.div
          className="absolute bottom-3 left-3 p-3 rounded-lg bg-card/95 border border-green-primary text-xs max-w-[180px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 3 ? 1 : 0 }}
          transition={{ delay: 1.5 }}
        >
          <div className="font-bold text-green-primary mb-1">Analysis:</div>
          <div className="text-muted-foreground">5km N + 5km S = 0 (cancel)</div>
          <div className="text-muted-foreground">Only 3km E remains</div>
          <div className="font-bold mt-1">Distance = 3 km</div>
        </motion.div>
      </div>
    </div>
  );
};

export default DirectionDiagram;
