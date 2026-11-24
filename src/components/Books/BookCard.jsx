import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BookCover from './BookCover';

const BookCard = ({ book }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link
        to={`/book/${encodeURIComponent(book.id)}`}
        className="book-tile group flex h-full flex-col overflow-hidden rounded-[22px] bg-white p-3 no-underline transition-all duration-300 hover:-translate-y-1"
      >
        <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl bg-[#f1f5f9]">
          <BookCover src={book.coverUrl} title={book.title} />
        </div>
        <div className="z-10 flex flex-1 flex-col items-center bg-white px-1 pb-1 pt-4 text-center">
          <h3
            className="mb-1 line-clamp-2 text-sm font-bold leading-snug text-[#0d254c] sm:text-base"
            title={book.title}
          >
            {book.title}
          </h3>
          <p className="mb-0 line-clamp-1 text-sm text-[#687d98]">
            {book.author}
          </p>
          {book.category?.trim() && (
            <span className="mt-3 inline-block max-w-full break-words rounded-full bg-[#2d71a1]/10 px-3 py-1 text-xs font-medium text-[#2d71a1]">
              {book.category.trim()}
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default BookCard;
