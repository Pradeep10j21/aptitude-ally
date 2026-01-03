import { motion } from 'framer-motion';

interface DirectionDiagramProps {
  step: number;
}

const DirectionDiagram = ({ step }: DirectionDiagramProps) => {
  return (
    <div className="diagram-container">
      <div className="diagram-scene relative bg-gradient-to-br from-green-soft/20 via-background to-green-light/20">
        {/* Compass */}
        <motion.div
          className="absolute top-3 right-3"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
        >
          <svg width="50" height="50" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="22" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2" />
            <text x="25" y="12" textAnchor="middle" className="text-xs font-bold fill-green-primary">N</text>
            <text x="25" y="43" textAnchor="middle" className="text-xs fill-muted-foreground">S</text>
            <text x="8" y="28" textAnchor="middle" className="text-xs fill-muted-foreground">W</text>
            <text x="42" y="28" textAnchor="middle" className="text-xs fill-muted-foreground">E</text>
            <polygon points="25,15 22,22 28,22" fill="hsl(var(--destructive))" />
          </svg>
        </motion.div>

        {/* Main Content */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <svg width="260" height="200" viewBox="0 0 260 200">
            {/* Grid */}
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="260" height="200" fill="url(#grid)" />

            {/* Start */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <circle cx="80" cy="160" r="6" fill="hsl(var(--green-primary))" />
              <text x="80" y="178" textAnchor="middle" className="text-xs font-bold fill-foreground">Start</text>
            </motion.g>

            {/* Path 1: North */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 0 ? 1 : 0.3 }}
            >
              <motion.line
                x1="80" y1="155" x2="80" y2="60"
                stroke="hsl(var(--blue-500))"
                strokeWidth="3"
                strokeDasharray="100"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: step >= 0 ? 0 : 100 }}
                transition={{ duration: 0.6 }}
              />
              <polygon points="80,60 75,70 85,70" fill="hsl(var(--blue-500))" />
              <text x="95" y="110" className="text-xs font-bold fill-blue-500">5km N</text>
            </motion.g>

            {/* Path 2: East */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 1 ? 1 : 0.3 }}
            >
              <motion.line
                x1="85" y1="60" x2="160" y2="60"
                stroke="hsl(var(--amber-500))"
                strokeWidth="3"
                strokeDasharray="80"
                initial={{ strokeDashoffset: 80 }}
                animate={{ strokeDashoffset: step >= 1 ? 0 : 80 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
              <polygon points="160,60 150,55 150,65" fill="hsl(var(--amber-500))" />
              <text x="120" y="50" className="text-xs font-bold fill-amber-500">3km E</text>
            </motion.g>

            {/* Path 3: South */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 2 ? 1 : 0.3 }}
            >
              <motion.line
                x1="160" y1="65" x2="160" y2="160"
                stroke="hsl(var(--purple-500))"
                strokeWidth="3"
                strokeDasharray="100"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: step >= 2 ? 0 : 100 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
              <polygon points="160,160 155,150 165,150" fill="hsl(var(--purple-500))" />
              <text x="175" y="110" className="text-xs font-bold fill-purple-500">5km S</text>
            </motion.g>

            {/* End Point */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: step >= 2 ? 1 : 0, scale: step >= 2 ? 1 : 0 }}
              transition={{ delay: 1 }}
            >
              <circle cx="160" cy="160" r="6" fill="hsl(var(--destructive))" />
              <text x="160" y="178" textAnchor="middle" className="text-xs font-bold fill-foreground">End</text>
            </motion.g>

            {/* Distance Line */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 3 ? 1 : 0 }}
            >
              <line x1="80" y1="160" x2="160" y2="160" stroke="hsl(var(--green-primary))" strokeWidth="2" strokeDasharray="6,3" />
              <motion.text
                x="120" y="155"
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

        {/* Explanation */}
        <motion.div
          className="absolute bottom-3 left-3 p-2 rounded-lg bg-card/95 border border-green-primary text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 3 ? 1 : 0 }}
        >
          <div className="font-bold text-green-primary">Analysis:</div>
          <div className="text-muted-foreground">5N + 5S = 0 (cancel)</div>
          <div className="font-bold">Distance = 3 km East</div>
        </motion.div>
      </div>
    </div>
  );
};

export default DirectionDiagram;
