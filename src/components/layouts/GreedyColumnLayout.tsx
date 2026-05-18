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

function ColumnSet<T>({
  cols,
  visibleKeys,
  keyExtractor,
  renderItem,
  gridClass,
}: {
  cols: T[][];
  visibleKeys: Set<string>;
  keyExtractor: (item: T) => string;
  renderItem: (item: T) => ReactNode;
  gridClass: string;
}) {
  return (
    <div className={cn('grid gap-4 items-start', gridClass)}>
      {cols.map((col, ci) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: column index is stable
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
  const cols1 = distributeToColumns(data, 1, widthExtractor, heightExtractor);
  const cols2 = distributeToColumns(data, 2, widthExtractor, heightExtractor);
  const cols3 = numColumns >= 3
    ? distributeToColumns(data, 3, widthExtractor, heightExtractor)
    : null;

  const visibleKeys = new Set(
    data.slice(0, (page + 1) * pageSize).map(keyExtractor),
  );

  const shared = { visibleKeys, keyExtractor, renderItem };

  return (
    <div className={cn('relative', className)}>
      <div className='sm:hidden'>
        <ColumnSet cols={cols1} gridClass='grid-cols-1' {...shared} />
      </div>
      <div className={cn('hidden sm:block', cols3 ? 'lg:hidden' : '')}>
        <ColumnSet cols={cols2} gridClass='grid-cols-2' {...shared} />
      </div>
      {cols3 && (
        <div className='hidden lg:block'>
          <ColumnSet cols={cols3} gridClass='grid-cols-3' {...shared} />
        </div>
      )}
    </div>
  );
}
