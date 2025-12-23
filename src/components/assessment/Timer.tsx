import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

interface TimerProps {
  isRunning: boolean;
  onTimeUpdate: (seconds: number) => void;
}

const Timer = ({ isRunning, onTimeUpdate }: TimerProps) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          const newValue = prev + 1;
          onTimeUpdate(newValue);
          return newValue;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, onTimeUpdate]);

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <motion.div
        animate={{ rotate: isRunning ? 360 : 0 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <Clock className="w-4 h-4 text-muted-foreground" />
      </motion.div>
      <motion.span
        className="font-mono text-sm font-medium text-muted-foreground"
        key={seconds}
        initial={{ y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {formatTime(seconds)}
      </motion.span>
    </motion.div>
  );
};

export default Timer;
