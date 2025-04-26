# 📚 EBook Website

This is a React-based frontend project for managing books in an **E-Book Management System**. 
The application integrates with a Spring Boot backend to perform CRUD (Create, Read, Update, Delete) operations on books.



## ✨ Features

- **Home Page**: A welcoming page with a background image.
- **Get All Books**: Displays all books in a table format.
- **Get Book By ID**: Fetches and displays details of a specific book by its ID.
- **Add Book**: Allows users to add a new book to the system.
- **Update Book**: Enables users to update the details of an existing book.
- **Delete Book**: Allows users to delete a book by its ID.
- **Responsive Design**: Styled using Flexbox for a clean and modern layout.



## 🛠 Technologies Used

- **Frontend**: React.js
- **Backend**: Spring Boot (integrated via REST API)
- **Styling**: CSS (inline styles and Flexbox)
- **HTTP Client**: Axios



## 🚀 Installation and Setup

### ✅ Prerequisites
- Node.js and npm installed
- A running Spring Boot backend with the required endpoints

### 📦 Steps to Run the Project

```bash
# Clone the repository
git clone https://github.com/siddi-Harshini/PROJECTS.git

# Navigate to the E-BOOK folder
cd PROJECTS/E-BOOK/ebook_website

# Install dependencies
npm install

# Start the development server
npm start


📁 Project Structure
-----------------------------------------------------------------------------------------------
E-BOOK/
├── src/
│   ├── components/
│   │   ├── AddBook.js        # Add Book page
│   │   ├── DeleteBook.js     # Delete Book page
│   │   ├── GetAllBooks.js    # Get All Books page
│   │   ├── GetBookById.js    # Get Book By ID page
│   │   ├── UpdateBook.js     # Update Book page
│   │   ├── Header.js         # Header with navigation links
│   │   ├── Footer.js         # Footer component
│   │   ├── Home.js           # Home page with background image
│   ├── App.js                # Main application file
│   ├── axiosConfig.js        # Axios configuration for API calls
│   ├── index.js              # Entry point of the application
├── public/
│   ├── index.html            # HTML template
├── package.json              # Project dependencies and scripts

-------------------------------------------------------------------------------------------------

🔗 API Endpoints (Spring Boot Backend)

GET /books/getAllBooks - Get all books
GET /books/getBookById/{id} - Get a book by ID
POST /books/addBook - Add a new book
PUT /books/updateBook/{id} - Update a book
DELETE /books/deleteBook/{id} - Delete a book

--------------------------------------------------------------------------------------------------



