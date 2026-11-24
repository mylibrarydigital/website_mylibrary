import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiBookOpen, FiExternalLink, FiGlobe } from 'react-icons/fi';
import { googlePlayBadge } from '../assets';
import { useGetBookByIdQuery } from '../store/api/bookApi';
import { PLAYSTORE_URL } from '../utils/endpoint';
import BookCover from '../components/Books/BookCover';

const BookPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: book,
    isLoading: loading,
    isError,
    error,
  } = useGetBookByIdQuery(id, {
    pollingInterval: 300000,
    refetchOnFocus: true,
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleOpenInApp = () => {
    // Use Android App Link (HTTPS URL)
    // If the app is installed and verified, Android will automatically open it
    // If not installed, the user stays on this web page (web fallback)
    const appLink = `https://mylibrary.lk/book/${encodeURIComponent(id)}`;
    window.location.href = appLink;
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/books');
    }
  };

  if (loading) {
    return (
      <div className="books-catalog-page min-h-screen bg-[#fbfdff] pt-28 pb-16">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
          <div className="mb-8 h-8 w-28 rounded-lg bg-[#e8eff7] animate-pulse" />
          <div className="grid items-start gap-10 md:grid-cols-[340px_1fr]">
            <div className="aspect-[2/3] w-full rounded-xl bg-[#e8eff7] animate-pulse" />
            <div className="space-y-4">
              <div className="h-10 w-3/4 rounded-lg bg-[#e8eff7] animate-pulse" />
              <div className="h-6 w-1/3 rounded-lg bg-[#e8eff7] animate-pulse" />
              <div className="h-32 w-full rounded-lg bg-[#e8eff7] animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !book) {
    return (
      <div className="books-catalog-page min-h-screen bg-[#fbfdff] pt-28 pb-16">
        <div className="mx-auto max-w-[720px] px-4 py-16 text-center">
          <h2 className="mb-3 text-2xl font-bold text-[#0d254c]">
            {isError ? 'Unable to load book' : 'Book Not Found'}
          </h2>
          <p role="alert" className="mb-6 text-base text-[#687d98]">
            {error?.data?.message ||
              error?.message ||
              "The book you're looking for doesn't exist or couldn't be loaded."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/books"
              className="rounded-xl bg-gradient-to-r from-[#274685] to-[#3db3c5] px-6 py-3 text-sm font-semibold text-white no-underline transition-opacity hover:opacity-90"
            >
              Go to Books
            </Link>
            <Link
              to="/"
              className="rounded-xl border border-[#dce4ef] bg-white px-6 py-3 text-sm font-semibold text-[#0d254c] no-underline transition-colors hover:border-[#2d71a1] hover:text-[#2d71a1]"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const categoryLabels =
    book.categories && book.categories.length > 0
      ? book.categories.map((cat) => cat.name).filter(Boolean)
      : book.category
      ? [book.category]
      : [];

  return (
    <div className="books-catalog-page relative min-h-screen bg-[#fbfdff] pt-28 pb-16">
      <motion.div
        className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <button
          type="button"
          onClick={handleBack}
          className="mb-6 inline-flex items-center gap-2 rounded-lg bg-transparent px-0 py-2 text-sm font-medium text-[#274685] transition-colors hover:text-[#2d71a1]"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back
        </button>

        <div className="grid items-start gap-10 md:grid-cols-[340px_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl bg-[#f1f5f9] shadow-xl"
          >
            <BookCover src={book.coverImage} title={book.title} priority />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="space-y-6"
          >
            <div>
              <h1 className="mb-2 text-3xl font-bold tracking-tight text-[#0d254c] sm:text-4xl">
                {book.title}
              </h1>
              {book.author && (
                <p className="mb-0 text-base text-[#687d98] sm:text-lg">
                  by <strong className="font-semibold text-[#274685]">{book.author}</strong>
                </p>
              )}
            </div>

            <div className="whitespace-pre-line text-base leading-relaxed text-[#2e475d] sm:text-lg">
              {book.description?.trim() || 'No description available.'}
            </div>

            {(categoryLabels.length > 0 || book.language) && (
              <div className="grid grid-cols-2 gap-4 py-2 sm:grid-cols-3 lg:grid-cols-4">
                {categoryLabels.map((catName, index) => (
                  <div
                    key={`${catName}-${index}`}
                    className="flex flex-col items-center justify-center rounded-2xl border border-[#dce4ef] bg-white p-4 text-center shadow-sm"
                  >
                    <FiBookOpen className="mb-2 h-6 w-6 text-[#2d71a1]" />
                    <span className="text-sm font-medium text-[#0d254c]">{catName}</span>
                  </div>
                ))}
                {book.language && (
                  <div className="flex flex-col items-center justify-center rounded-2xl border border-[#dce4ef] bg-white p-4 text-center shadow-sm">
                    <FiGlobe className="mb-1 h-5 w-5 text-[#2d71a1]" />
                    <span className="text-xs text-[#687d98]">Language</span>
                    <p className="mb-0 mt-0.5 text-sm font-medium text-[#0d254c]">
                      {book.language}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="border-t border-[#dce4ef] pt-6">
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={handleOpenInApp}
                  className="inline-flex h-14 min-w-[200px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#274685] to-[#3db3c5] px-6 text-base font-semibold text-white shadow-md transition-opacity hover:opacity-95"
                >
                  <FiExternalLink className="h-5 w-5" />
                  Open in App
                </button>

                <a
                  href={PLAYSTORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 min-w-[200px] items-center justify-center rounded-xl border-2 px-6 text-base font-semibold no-underline transition-all duration-300"
                  style={{
                    borderColor: '#2d71a1',
                    color: isHovered ? '#ffffff' : '#2d71a1',
                    backgroundColor: isHovered ? '#2d71a1' : '#ffffff',
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <img
                    src={googlePlayBadge}
                    alt="Get it on Google Play"
                    style={{ height: '30px', marginRight: '10px', objectFit: 'contain' }}
                  />
                  Get the App
                </a>
              </div>

              <p className="mb-0 mt-3 text-sm text-[#687d98]">
                Don&apos;t have the app? Download it from Google Play Store to read this book and
                thousands more!
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default BookPreview;
