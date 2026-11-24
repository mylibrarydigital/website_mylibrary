import React, { useState } from 'react';
import { FALLBACK_COVER_URL } from '../../utils/books';

const BookCover = ({ src, title, priority = false }) => {
  const [failedSrc, setFailedSrc] = useState(null);
  const resolvedSrc = !src || failedSrc === src ? FALLBACK_COVER_URL : src;

  return (
    <img
      src={resolvedSrc}
      alt={title}
      loading={priority ? 'eager' : 'lazy'}
      onError={() => {
        if (src && failedSrc !== src) {
          setFailedSrc(src);
        }
      }}
      className="h-full w-full object-contain"
    />
  );
};

export default BookCover;
