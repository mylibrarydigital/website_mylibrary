import React from 'react';

const BookCardSkeleton = () => {
  return (
    <div className="book-tile flex h-full flex-col overflow-hidden rounded-[22px] bg-white p-3">
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl bg-[#e8eff7] animate-pulse" />
      <div className="flex flex-1 flex-col items-center gap-2 px-2 pb-2 pt-4">
        <div className="h-5 w-3/4 rounded-md bg-[#e8eff7] animate-pulse" />
        <div className="h-4 w-1/2 rounded-md bg-[#e8eff7] animate-pulse" />
        <div className="mt-2 h-6 w-20 rounded-full bg-[#e8eff7] animate-pulse" />
      </div>
    </div>
  );
};

export default BookCardSkeleton;
