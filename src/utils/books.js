export const BOOKS_PER_PAGE = Number(process.env.REACT_APP_BOOKS_PER_PAGE) || 20;
export const SEARCH_DEBOUNCE_MS = Number(process.env.REACT_APP_SEARCH_DEBOUNCE_MS) || 500;
export const FALLBACK_COVER_URL = '/android-chrome-512x512.png';

export function normalizeDescription(value) {
  if (typeof value !== 'string') return '';
  return value.replace(/\\r\\n|\\n/g, '\n');
}

function hasControlChars(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str.charCodeAt(i) <= 0x1f) return true;
  }
  return false;
}

function isValidCoverUrl(cover) {
  if (typeof cover !== 'string' || !cover || cover !== cover.trim()) return false;
  if (cover.startsWith('/') && !cover.startsWith('//') && !cover.includes('\\')) {
    return true;
  }
  try {
    const url = new URL(cover);
    return (url.protocol === 'http:' || url.protocol === 'https:') && Boolean(url.hostname);
  } catch {
    return false;
  }
}

export function validateAndNormalizeBooks(value, source = 'My Library Books API data') {
  if (!Array.isArray(value)) {
    throw new Error(`${source} must contain an array of books.`);
  }

  const ids = new Set();

  return value.map((item, index) => {
    const label = `${source}: book ${index + 1}`;
    if (!item || typeof item !== 'object' || Array.isArray(item)) {
      throw new Error(`${label} must be an object.`);
    }

    const coverCandidate =
      item.coverUrl == null || item.coverUrl === '' ? FALLBACK_COVER_URL : item.coverUrl;

    for (const field of ['id', 'title', 'author']) {
      if (typeof item[field] !== 'string' || !item[field].trim()) {
        throw new Error(`${label}: "${field}" is required and must be a non-empty string.`);
      }
    }

    for (const field of ['description', 'category', 'language']) {
      if (item[field] !== undefined && item[field] !== null && typeof item[field] !== 'string') {
        throw new Error(`${label}: "${field}" must be a string when provided.`);
      }
    }

    const id = item.id;
    if (id !== id.trim() || /[/?#\\]/u.test(id) || hasControlChars(id) || id === '.' || id === '..') {
      throw new Error(
        `${label}: "id" must not contain slashes, query markers, control characters, or surrounding spaces.`
      );
    }

    if (ids.has(id)) {
      throw new Error(`${label}: duplicate id "${id}". Each book needs a unique id.`);
    }
    ids.add(id);

    const coverUrl = isValidCoverUrl(coverCandidate) ? coverCandidate : FALLBACK_COVER_URL;

    return {
      id,
      title: item.title,
      author: item.author,
      coverUrl,
      ...(typeof item.description === 'string'
        ? { description: normalizeDescription(item.description) }
        : {}),
      ...(typeof item.category === 'string' ? { category: item.category } : {}),
      ...(typeof item.language === 'string' ? { language: item.language } : {}),
    };
  });
}

export function selectBooks(books, query = '', page = 1, category = '', language = '') {
  const normalize = (value) => value.normalize('NFC').toLocaleLowerCase().trim();
  const libraryBooks = language
    ? books.filter((book) => normalize(book.language || '') === normalize(language))
    : books;

  const categoryLabels = new Map();
  for (const book of libraryBooks) {
    const label = book.category?.trim();
    if (label && !categoryLabels.has(normalize(label))) {
      categoryLabels.set(normalize(label), label);
    }
  }
  const categories = [...categoryLabels.values()].sort((a, b) => a.localeCompare(b));

  const words = query
    .normalize('NFC')
    .toLocaleLowerCase()
    .trim()
    .split(/\s+/u)
    .filter(Boolean);

  const matches = libraryBooks.filter((book) => {
    if (category && normalize(book.category || '') !== normalize(category)) return false;
    const text = [book.title, book.author, book.category, book.language]
      .filter(Boolean)
      .join(' ')
      .normalize('NFC')
      .toLocaleLowerCase();
    return words.every((word) => text.includes(word));
  });

  const safePage = Number.isSafeInteger(page) && page > 0 ? page : 1;
  const end = safePage * BOOKS_PER_PAGE;

  return {
    docs: matches.slice(0, end),
    numFound: matches.length,
    categories,
  };
}
