import React from 'react';
import { useParams } from 'react-router-dom';
import { googlePlayBadge } from '../assets';
import { useGetBookByIdQuery } from '../store/api/bookApi';
import { PLAYSTORE_URL } from '../utils/endpoint';

const BookPreview = () => {
  const { id } = useParams();
  const { data: book, isLoading: loading, isError, error } = useGetBookByIdQuery(id);

  const handleOpenInApp = () => {
    // Use Android App Link (HTTPS URL)
    // If the app is installed and verified, Android will automatically open it
    // If not installed, the user stays on this web page (web fallback)
    const appLink = `https://mylibrary.lk/book/${id}`;
    window.location.href = appLink;
  };

  if (loading) {
    return (
      <div className="container my-5 py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading book details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container my-5 py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2>Book Not Found</h2>
            <p className="text-muted">
              {error?.data?.message || error?.message || 'The book you\'re looking for doesn\'t exist or couldn\'t be loaded.'}
            </p>
            <a href="/" className="btn btn-primary mt-3" style={{ backgroundColor: '#529d96', borderColor: '#529d96' }}>
              Go to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (!book) {
    return null;
  }

  return (
    <div className="container my-5 py-5" style={{ minHeight: '70vh' }}>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-lg border-0">
            <div className="row g-0">
              {/* Book Cover */}
              <div className="col-md-4 text-center p-4 d-flex align-items-center justify-content-center bg-light">
                <img
                  src={book.coverImage || '/logo512.png'}
                  alt={book.title}
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: '500px', objectFit: 'contain' }}
                />
              </div>

              {/* Book Details */}
              <div className="col-md-8">
                <div className="card-body p-4 p-md-5">
                  <h1 className="card-title mb-3" style={{ color: '#529d96', fontSize: '2rem' }}>
                    {book.title}
                  </h1>
                  
                  {book.author && (
                    <p className="text-muted mb-3" style={{ fontSize: '1.2rem' }}>
                      by <strong>{book.author}</strong>
                    </p>
                  )}

                  {/* Display categories */}
                  {book.categories && book.categories.length > 0 && (
                    <div className="mb-3">
                      {book.categories.map((cat, index) => (
                        <span key={index} className="badge bg-secondary me-2 mb-2">
                          {cat.name}
                        </span>
                      ))}
                    </div>
                  )}
                  {/* Display library */}
                  {book.library && (
                    <span className="badge bg-info mb-3">{book.library.name}</span>
                  )}

                  <div className="my-4">
                    <h5 className="mb-3">Description</h5>
                    <p className="card-text" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                      {book.description || 'No description available.'}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-5 pt-4 border-top">
                    <div className="d-flex flex-column flex-md-row gap-3 align-items-start">
                      <button
                        onClick={handleOpenInApp}
                        className="btn btn-primary btn-lg px-4 py-3"
                        style={{
                          backgroundColor: '#529d96',
                          borderColor: '#529d96',
                          minWidth: '200px',
                        }}
                      >
                        <i className="bi bi-box-arrow-up-right me-2"></i>
                        Open in App
                      </button>

                      <a
                        href={PLAYSTORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary btn-lg px-4 py-3 d-inline-flex align-items-center"
                        style={{
                          borderColor: '#529d96',
                          color: '#529d96',
                          minWidth: '200px',
                        }}
                      >
                        <img
                          src={googlePlayBadge}
                          alt="Get it on Google Play"
                          style={{ height: '40px', marginRight: '10px' }}
                        />
                        Get the App
                      </a>
                    </div>

                    <p className="text-muted mt-3 mb-0" style={{ fontSize: '0.9rem' }}>
                      Don't have the app? Download it from Google Play Store to read this book and thousands more!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPreview;
