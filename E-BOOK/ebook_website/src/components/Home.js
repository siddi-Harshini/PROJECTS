import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to E-Book Management</h1>
      <p style={styles.subheading}>Manage your books efficiently and effortlessly.</p>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    backgroundImage: 'url("/background_ebook.png")', // Replace with a direct image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  },
  heading: {
    fontSize: '48px',
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '24px',
  },
};

export default Home;