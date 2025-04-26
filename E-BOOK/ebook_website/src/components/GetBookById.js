import React, { useState } from 'react';
import axiosInstance from '../axiosConfig';

function GetBookById() {
  const [bookId, setBookId] = useState('');
  const [book, setBook] = useState(null);
  const [error, setError] = useState('');

  const fetchBookById = async () => {
    try {
      const response = await axiosInstance.get(`/getBookById/${bookId}`);
      setBook(response.data);
      setError('');
    } catch (err) {
      setError('Book not found.');
      setBook(null);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Get Book By ID</h1>
      <div style={styles.form}>
        <input
          type="number"
          placeholder="Enter Book ID"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
          style={styles.input}
        />
        <button onClick={fetchBookById} style={styles.button}>Fetch Book</button>
      </div>
      {error && <p style={styles.error}>{error}</p>}
      {book && (
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
            <tr>
              <td style={styles.td}>{book.id}</td>
              <td style={styles.td}>{book.title}</td>
              <td style={styles.td}>{book.author}</td>
              <td style={styles.td}>₹{book.price}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', // Aligns the content closer to the top
    alignItems: 'center', // Centers the content horizontally
    height: '100vh',
    backgroundColor: '#f4f4f4',
    paddingTop: '50px', // Adds spacing from the top
  },
  heading: {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '300px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    marginTop: '10px',
    color: '#f44336',
    fontWeight: 'bold',
  },
  table: {
    marginTop: '20px',
    width: '80%',
    borderCollapse: 'collapse',
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
};

export default GetBookById;