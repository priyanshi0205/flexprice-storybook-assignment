import { FC, useEffect, useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/atoms';

export interface SearchBarProps {
  value: string;
  placeholder?: string;
  debounceMs?: number;
  onChange: (val: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({
  value,
  placeholder = 'Search...',
  debounceMs = 300,
  onChange,
}) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    const t = setTimeout(() => {
      onChange(localValue);
    }, debounceMs);

    return () => clearTimeout(t);
  }, [localValue, debounceMs, onChange]);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <div className="relative w-full">
      <Input
        value={localValue}
        placeholder={placeholder}
        onChange={(e) => setLocalValue(e)}
        inputPrefix={<Search className="w-4 h-4 text-gray-400" />}
        suffix={
          localValue ? (
            <X
              data-testid="clear-btn"
              className="w-4 h-4 text-gray-400 cursor-pointer"
              onClick={() => setLocalValue('')}
            />
          ) : null
        }
      />
    </div>
  );
};

export default SearchBar;