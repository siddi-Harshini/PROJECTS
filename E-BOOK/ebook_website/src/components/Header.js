import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>E-Book Management</h1>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/allBooks" style={styles.link}>All Books</Link>
        <Link to="/addBook" style={styles.link}>Add Book</Link>
        <Link to="/updateBook" style={styles.link}>Update Book</Link>
        <Link to="/deleteBook" style={styles.link}>Delete Book</Link>
        <Link to="/getBookById" style={styles.link}>Get Book By ID</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#116466',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    padding: '8px 12px',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  },
  linkHover: {
    backgroundColor: '#45a049',
  },
};

export default Header;