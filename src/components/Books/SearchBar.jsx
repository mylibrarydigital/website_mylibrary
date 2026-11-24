import React, { useEffect, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { SEARCH_DEBOUNCE_MS } from '../../utils/books';

const SearchBar = ({ initialValue = '', onSearch, isLoading = false }) => {
  const [value, setValue] = useState(initialValue);
  const pendingSearch = useRef(null);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    return () => {
      if (pendingSearch.current) clearTimeout(pendingSearch.current);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pendingSearch.current) clearTimeout(pendingSearch.current);
    onSearch(value);
  };

  const handleChange = (event) => {
    const nextValue = event.target.value;
    setValue(nextValue);
    if (pendingSearch.current) clearTimeout(pendingSearch.current);
    pendingSearch.current = setTimeout(() => onSearch(nextValue), SEARCH_DEBOUNCE_MS);
  };

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="catalog-search-field relative isolate mx-auto flex w-full items-center gap-2 rounded-2xl border border-[#dce4ef] bg-white p-2 focus-within:border-[#2d71a1] focus-within:ring-2 focus-within:ring-[#2d71a1]/20"
    >
      <FiSearch
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-[#2d71a1]"
      />
      <input
        type="search"
        name="q"
        value={value}
        onChange={handleChange}
        placeholder="Search by title or author…"
        aria-label="Search books"
        className="relative z-0 h-10 min-w-0 flex-1 appearance-none border-0 bg-transparent pl-11 pr-2 text-sm text-[#0d254c] outline-none placeholder:text-[#687d98] sm:h-12 sm:text-base"
      />
      {isLoading && (
        <div
          className="pointer-events-none absolute left-5 top-1/2 z-20 -translate-y-1/2 bg-white"
          aria-hidden="true"
        >
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#2d71a1] border-t-transparent" />
        </div>
      )}
      <button
        type="submit"
        className="shrink-0 rounded-xl bg-gradient-to-r from-[#274685] to-[#3db3c5] px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d71a1] focus-visible:ring-offset-2"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
