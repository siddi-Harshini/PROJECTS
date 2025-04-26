import React, { useState } from 'react';
import axiosInstance from '../axiosConfig';

function AddBook() {
  const [book, setBook] = useState({ title: '', author: '', price: '' });
  const [message, setMessage] = useState('');

  const addBook = async () => {
    try {
      await axiosInstance.post('/addBook', book);
      setMessage('Book added successfully!');
      setBook({ title: '', author: '', price: '' });
    } catch (err) {
      setMessage('Error adding book.');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Add a New Book</h1>
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Title"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Author"
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Price"
          value={book.price}
          onChange={(e) => setBook({ ...book, price: e.target.value })}
          style={styles.input}
        />
        <button onClick={addBook} style={styles.button}>Add Book</button>
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
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '10px',
    color: '#4CAF50',
    fontWeight: 'bold',
  },
};

export default AddBook;