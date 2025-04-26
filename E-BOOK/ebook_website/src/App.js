import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import GetAllBooks from './components/GetAllBooks';
import AddBook from './components/AddBook';
import UpdateBook from './components/UpdateBook';
import DeleteBook from './components/DeleteBook';
import GetBookById from './components/GetBookById';

function App() {
  return (
    <Router>
      <div style={{ paddingBottom: '50px' }}>
        <Header />
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allBooks" element={<GetAllBooks />} />
            <Route path="/addBook" element={<AddBook />} />
            <Route path="/updateBook" element={<UpdateBook />} />
            <Route path="/deleteBook" element={<DeleteBook />} />
            <Route path="/getBookById" element={<GetBookById />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  main: {
    padding: '20px',
  },
};

export default App;
