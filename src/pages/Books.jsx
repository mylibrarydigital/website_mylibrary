import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiBookOpen } from 'react-icons/fi';
import { useGetBooksListQuery } from '../store/api/bookApi';
import { selectBooks } from '../utils/books';
import SearchBar from '../components/Books/SearchBar';
import BookCard from '../components/Books/BookCard';
import BookCardSkeleton from '../components/Books/BookCardSkeleton';

const LANGUAGE_OPTIONS = [
  { value: '', label: 'All languages' },
  { value: 'SINHALA', label: 'සිංහල Library' },
  { value: 'ENGLISH', label: 'English Library' },
];

const Books = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const requestedPage = Number(searchParams.get('page') ?? 1);
  const page = Number.isSafeInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;
  const category = searchParams.get('category') ?? '';
  const requestedLanguage = searchParams.get('language')?.toUpperCase();
  const language =
    requestedLanguage === 'SINHALA' || requestedLanguage === 'ENGLISH' ? requestedLanguage : '';

  const updateResults = useCallback(
    (changes) => {
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev.toString());
          for (const [key, value] of Object.entries(changes)) {
            if (value && !(key === 'page' && value === '1')) {
              next.set(key, value);
            } else {
              next.delete(key);
            }
          }
          return next;
        },
        { replace: true }
      );
    },
    [setSearchParams]
  );

  // API cover URLs are signed S3 URLs with a 1-hour expiry; refresh active views every 5 min and on focus.
  const {
    data: allBooks = [],
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useGetBooksListQuery(undefined, {
    pollingInterval: 300000,
    refetchOnFocus: true,
  });

  const { docs: books, numFound: count, categories } = useMemo(
    () => selectBooks(allBooks, query, page, category, language),
    [allBooks, query, page, category, language]
  );

  const hasMore = !isLoading && !isError && books.length < count;
  const loadTrigger = useRef(null);

  const loadNext = useCallback(() => {
    if (isLoading || isError || !hasMore) return;
    updateResults({ page: String(page + 1) });
  }, [isLoading, isError, hasMore, updateResults, page]);

  useEffect(() => {
    if (!loadTrigger.current || !hasMore || isLoading || isError) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadNext();
        }
      },
      { rootMargin: '300px' }
    );
    observer.observe(loadTrigger.current);
    return () => observer.disconnect();
  }, [hasMore, isLoading, isError, loadNext]);

  const handleSearch = useCallback(
    (value) => {
      const nextQuery = value.trim();
      if (nextQuery !== query) {
        updateResults({ q: nextQuery, page: '1' });
      }
    },
    [query, updateResults]
  );

  const errorMessage =
    error?.data?.message || error?.message || 'Unable to load the book catalog.';

  return (
    <div className="books-catalog-page relative min-h-screen bg-[#fbfdff] pt-28 pb-16">
      <div className="relative z-10 mx-auto w-full max-w-[1480px] px-4 sm:px-8 lg:px-12">
        <div className="space-y-8">
          <section className="catalog-heading">
            <div className="catalog-title">
              <h1 className="flex items-center justify-center gap-3 text-4xl font-bold tracking-tight text-[#0d254c] sm:text-5xl">
                <span className="catalog-icon">
                  <FiBookOpen className="h-7 w-7 sm:h-8 sm:w-8" />
                </span>
                Books
              </h1>
              <p className="mt-4 mb-0 text-sm leading-relaxed text-[#687d98] sm:text-base">
                A world of stories. Find your next favorite.
              </p>
            </div>
            <div className="catalog-search">
              <SearchBar
                onSearch={handleSearch}
                isLoading={isLoading || isFetching}
                initialValue={query}
              />
            </div>
          </section>

          <section id="book-results" className="scroll-mt-32" aria-busy={isLoading}>
            <div
              role="group"
              aria-label="Choose library language"
              className="mb-6 flex flex-wrap items-center justify-center gap-2"
            >
              {LANGUAGE_OPTIONS.map((option) => {
                const isActive = language === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() =>
                      updateResults({ language: option.value, category: '', page: '1' })
                    }
                    className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d71a1] focus-visible:ring-offset-2 ${
                      isActive
                        ? 'border-transparent bg-gradient-to-r from-[#274685] to-[#3db3c5] text-white shadow-sm'
                        : 'border-[#dce4ef] bg-white text-[#0d254c] hover:border-[#2d71a1] hover:text-[#2d71a1]'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>

            {categories.length > 0 && (
              <div
                role="group"
                aria-label="Filter books by category"
                className="mb-6 flex flex-wrap items-center justify-center gap-2"
              >
                {['', ...categories].map((value) => {
                  const isActive = category === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => updateResults({ category: value, page: '1' })}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d71a1] focus-visible:ring-offset-2 ${
                        isActive
                          ? 'border-[#2d71a1] bg-[#2d71a1] text-white shadow-sm'
                          : 'border-[#dce4ef] bg-white text-[#687d98] hover:border-[#2d71a1] hover:text-[#2d71a1]'
                      }`}
                    >
                      {value || 'All books'}
                    </button>
                  );
                })}
                {category && !categories.includes(category) && (
                  <span className="rounded-full border border-[#2d71a1] px-4 py-2 text-sm text-[#2d71a1]">
                    {category}
                  </span>
                )}
              </div>
            )}

            <p
              role="status"
              className="mb-5 min-h-[20px] text-center text-sm text-[#687d98]"
            >
              {books.length > 0
                ? `Showing ${books.length} of ${count.toLocaleString()} books`
                : isLoading
                ? 'Loading books…'
                : ''}
            </p>

            {isError && (
              <div className="py-10 text-center text-[#dc2626]">
                <p className="mb-0 text-base">{errorMessage}</p>
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => refetch()}
                    className="rounded-lg border border-[#dce4ef] bg-white px-5 py-2.5 text-sm font-medium text-[#0d254c] transition-colors hover:border-[#2d71a1] hover:text-[#2d71a1]"
                  >
                    Try again
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {!isLoading &&
                !isError &&
                books.map((book) => <BookCard key={book.id} book={book} />)}
              {isLoading &&
                Array.from({ length: 10 }).map((_, index) => (
                  <BookCardSkeleton key={index} />
                ))}
            </div>

            {!isLoading && !isError && books.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-lg text-[#687d98]">
                  {query || category || language
                    ? 'No books match these filters. Try another language, category, or search.'
                    : 'No books in the catalog yet.'}
                </p>
              </div>
            )}

            <div
              ref={loadTrigger}
              className="mt-9 flex min-h-[48px] items-center justify-center"
              role="status"
            >
              {isLoading ? (
                <p className="mb-0 text-sm text-[#687d98]">Loading more books…</p>
              ) : !isError && hasMore ? (
                <button
                  type="button"
                  onClick={loadNext}
                  className="rounded-lg border border-[#dce4ef] bg-white px-5 py-2.5 text-sm font-medium text-[#0d254c] transition-colors hover:border-[#2d71a1] hover:text-[#2d71a1]"
                >
                  Load more books
                </button>
              ) : !isError && books.length > 0 ? (
                <p className="mb-0 text-sm text-[#687d98]">
                  You’ve reached the end of the library.
                </p>
              ) : null}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Books;
