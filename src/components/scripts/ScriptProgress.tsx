import { motion } from 'framer-motion';
import { StopCircle } from 'lucide-react';

interface ScriptProgressProps {
  progress: number;
  onStop: () => void;
  status: 'running' | 'success' | 'failed' | 'idle';
  output?: string;
}

export function ScriptProgress({ progress, onStop, status, output }: ScriptProgressProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'running':
        return 'bg-blue-600';
      case 'success':
        return 'bg-green-600';
      case 'failed':
        return 'bg-red-600';
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <div className="mt-4 space-y-4">
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="ml-2 text-sm text-gray-500">{Math.round(progress)}%</span>
          </div>
          {status === 'running' && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={onStop}
              className="p-1 text-red-600 hover:bg-red-50 rounded-lg"
              title="Stop Execution"
            >
              <StopCircle className="w-5 h-5" />
            </motion.button>
          )}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
            className={`h-full ${getStatusColor()}`}
          />
        </div>
      </div>

      {output && (
        <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm max-h-60 overflow-y-auto">
          <pre className="text-gray-100 whitespace-pre-wrap">{output}</pre>
        </div>
      )}
    </div>
  );
}