import { motion } from 'framer-motion';

interface VennDiagramProps {
  step: number;
}

const VennDiagram = ({ step }: VennDiagramProps) => {
  return (
    <div className="diagram-container">
      <div className="diagram-scene flex items-center justify-center bg-gradient-to-br from-card to-background-secondary">
        <svg width="350" height="280" viewBox="0 0 350 280">
          {/* Main Flowers Circle */}
          <motion.circle
            cx="175"
            cy="140"
            r="120"
            fill="none"
            stroke="hsl(var(--green-muted))"
            strokeWidth="3"
            strokeDasharray={step >= 1 ? "0" : "10 5"}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.text
            x="175"
            y="30"
            textAnchor="middle"
            className="text-sm font-bold fill-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            ALL FLOWERS
          </motion.text>

          {/* Roses Circle - inside Flowers */}
          <motion.circle
            cx="120"
            cy="140"
            r="50"
            fill="hsl(var(--success) / 0.2)"
            stroke="hsl(var(--success))"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: step >= 1 ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
          <motion.text
            x="120"
            y="145"
            textAnchor="middle"
            className="text-xs font-semibold fill-success"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0 }}
            transition={{ delay: 0.8 }}
          >
            ROSES
          </motion.text>
          
          {/* Rose Emoji */}
          <motion.text
            x="120"
            y="125"
            textAnchor="middle"
            fontSize="20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0, scale: step >= 1 ? 1 : 0 }}
            transition={{ delay: 1, type: 'spring' }}
          >
            🌹
          </motion.text>

          {/* "Some flowers fade" region - could overlap or not */}
          <motion.ellipse
            cx="230"
            cy="140"
            rx="60"
            ry="45"
            fill="hsl(var(--warning) / 0.2)"
            stroke="hsl(var(--warning))"
            strokeWidth="2"
            strokeDasharray="5 3"
            initial={{ scale: 0 }}
            animate={{ scale: step >= 2 ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
          <motion.text
            x="230"
            y="135"
            textAnchor="middle"
            className="text-xs font-semibold fill-warning"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 2 ? 1 : 0 }}
            transition={{ delay: 1.3 }}
          >
            Flowers that
          </motion.text>
          <motion.text
            x="230"
            y="150"
            textAnchor="middle"
            className="text-xs font-semibold fill-warning"
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 2 ? 1 : 0 }}
            transition={{ delay: 1.3 }}
          >
            fade quickly
          </motion.text>

          {/* Question Mark in potential overlap area */}
          <motion.text
            x="170"
            y="145"
            textAnchor="middle"
            fontSize="24"
            className="fill-primary font-bold"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: step >= 2 ? 1 : 0, 
              scale: step >= 2 ? [1, 1.2, 1] : 0 
            }}
            transition={{ 
              delay: 1.5,
              scale: { duration: 1, repeat: Infinity }
            }}
          >
            ?
          </motion.text>
          
          {/* Legend */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 3 ? 1 : 0 }}
            transition={{ delay: 2 }}
          >
            <rect x="20" y="240" width="310" height="35" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
            <text x="175" y="262" textAnchor="middle" className="text-xs fill-muted-foreground">
              We cannot conclude if roses are among flowers that fade!
            </text>
          </motion.g>

          {/* Decorative flowers */}
          {step >= 1 && (
            <>
              <motion.text x="80" y="180" fontSize="16" initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 1.5 }}>🌸</motion.text>
              <motion.text x="270" y="100" fontSize="16" initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 1.6 }}>🌻</motion.text>
              <motion.text x="200" y="200" fontSize="16" initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 1.7 }}>🌷</motion.text>
              <motion.text x="140" y="80" fontSize="16" initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 1.8 }}>💐</motion.text>
            </>
          )}
        </svg>
      </div>
    </div>
  );
};

export default VennDiagram;
