import { FC } from 'react';
import { cn } from '@/lib/utils';

export interface UsageBarProps {
  label?: string;
  used: number;
  total: number;
  unit?: string;
  className?: string;
}

const UsageBar: FC<UsageBarProps> = ({ label, used, total, unit = '', className }) => {
  const percentage = total > 0 ? Math.min((used / total) * 100, 100) : 0;

  return (
    <div className={cn('w-full space-y-1', className)}>
      {label && (
        <div className="flex justify-between text-xs text-gray-600">
          <span>{label}</span>
          <span>{used}{unit} / {total}{unit}</span>
        </div>
      )}

      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          data-testid="usage-fill"
          className="h-full bg-blue-500 transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default UsageBar;