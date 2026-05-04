import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type GreedyColumnLayoutProps<T> = {
  data: T[];
  keyExtractor: (item: T) => string;
  widthExtractor: (item: T) => number;
  heightExtractor: (item: T) => number;
  renderItem: (item: T) => ReactNode;
  pageSize: number;
  page: number;
  numColumns?: number;
  className?: string;
};

function distributeToColumns<T>(
  items: T[],
  numCols: number,
  widthExtractor: (item: T) => number,
  heightExtractor: (item: T) => number,
): T[][] {
  const cols: T[][] = Array.from({ length: numCols }, () => []);
  const heights = new Array(numCols).fill(0);
  for (const item of items) {
    const w = widthExtractor(item);
    const h = heightExtractor(item);
    const minIdx = heights.indexOf(Math.min(...heights));
    cols[minIdx].push(item);
    heights[minIdx] += h / w;
  }
  return cols;
}

export function GreedyColumnLayout<T>({
  data,
  keyExtractor,
  widthExtractor,
  heightExtractor,
  renderItem,
  pageSize,
  page,
  numColumns = 3,
  className,
}: GreedyColumnLayoutProps<T>) {
  const cols = distributeToColumns(
    data,
    numColumns,
    widthExtractor,
    heightExtractor,
  );
  const visibleKeys = new Set(data.slice(0, (page + 1) * pageSize).map(keyExtractor));

  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 items-start',
        className,
      )}
    >
      {cols.map((col, ci) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <div key={ci} className='flex flex-col gap-4'>
          {col.map((item) => {
            const key = keyExtractor(item);
            return (
              <div
                key={key}
                className={visibleKeys.has(key) ? undefined : 'hidden'}
              >
                {renderItem(item)}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
