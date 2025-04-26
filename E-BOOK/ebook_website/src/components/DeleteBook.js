import React, { useState } from 'react';
import axiosInstance from '../axiosConfig';

function DeleteBook() {
  const [bookId, setBookId] = useState('');
  const [message, setMessage] = useState('');

  const deleteBook = async () => {
    try {
      await axiosInstance.delete(`/deleteBook/${bookId}`);
      setMessage('Book deleted successfully!');
      setBookId('');
    } catch (err) {
      setMessage('Error deleting book.');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Delete a Book</h1>
      <div style={styles.form}>
        <input
          type="number"
          placeholder="Enter Book ID"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
          style={styles.input}
        />
        <button onClick={deleteBook} style={styles.button}>Delete Book</button>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
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
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '10px',
    color: '#f44336',
    fontWeight: 'bold',
  },
};

export default DeleteBook;