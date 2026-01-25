import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { googlePlayBadge } from '../assets';

const BookPreview = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO: Replace with your actual API endpoint
    // For now, this is a placeholder that you can update with your API
    const fetchBook = async () => {
      try {
        setLoading(true);
        // Example API call - replace with your actual endpoint
        // const response = await fetch(`https://api.mylibrary.lk/api/books/${id}`);
        // const data = await response.json();
        // setBook(data);

        // Placeholder data - remove this when you have an API
        // This simulates a book object structure
        setTimeout(() => {
          setBook({
            id: id,
            title: 'Book Title',
            author: 'Author Name',
            description: 'This is a sample book description. Replace this with actual book data from your API.',
            coverImage: '/logo512.png', // Placeholder image
            category: 'Fiction',
            language: 'Sinhala',
          });
          setLoading(false);
        }, 500);
      } catch (err) {
        setError('Failed to load book details');
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  const handleOpenInApp = () => {
    // Try custom URL scheme first (mylibrary://book/:id)
    // This is faster if the app is installed
    const customScheme = `mylibrary://book/${id}`;
    
    // Try to open with custom scheme
    window.location.href = customScheme;
    
    // Fallback: If custom scheme doesn't work (app not installed),
    // the browser will stay on the current page, which is fine
    // The user can then use the "Get the App" button
  };

  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.iamkw97.mylibraryv3&pcampaignid=web_share';

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

  if (error || !book) {
    return (
      <div className="container my-5 py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2>Book Not Found</h2>
            <p className="text-muted">The book you're looking for doesn't exist or couldn't be loaded.</p>
            <a href="/" className="btn btn-primary mt-3">Go to Home</a>
          </div>
        </div>
      </div>
    );
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

                  {book.category && (
                    <span className="badge bg-secondary mb-3 me-2">{book.category}</span>
                  )}
                  {book.language && (
                    <span className="badge bg-info mb-3">{book.language}</span>
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
                        href={playStoreUrl}
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
