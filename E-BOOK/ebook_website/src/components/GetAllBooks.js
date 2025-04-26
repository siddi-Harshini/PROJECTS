import React, { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';

function GetAllBooks() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axiosInstance.get('/getAllBooks');
        setBooks(response.data);
      } catch (err) {
        setError('Error fetching books.');
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h1 style={styles.heading}>All Books</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {books.length > 0 ? (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Title</th>
              <th style={styles.th}>Author</th>
              <th style={styles.th}>Price</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} style={styles.tr}>
                <td style={styles.td}>{book.id}</td>
                <td style={styles.td}>{book.title}</td>
                <td style={styles.td}>{book.author}</td>
                <td style={styles.td}>₹{book.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
}

const styles = {
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  th: {
    border: '1px solid #ddd',
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: 'white',
    textAlign: 'left',
  },
  td: {
    border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left',
  },
  tr: {
    backgroundColor: '#f9f9f9',
  },
  trHover: {
    backgroundColor: '#f1f1f1',
  },
};

export default GetAllBooks;