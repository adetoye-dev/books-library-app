#  Tech Reads App

## Overview

An E-book library to explore interesting and resourceful tech related contents. This E-Book Library App allows users to view, search and download tech related books,  from the library. The app is built using a Node.js backend with a MongoDB database and a React frontend.

VISIT APP [HERE](https://tech-reads.vercel.app/)

## Features
### MVP 
- [x] Users able to view books collection
- [x] Users able to preview book
- [x] Users able to download book
### Post MVP
- [ ] Filter books based on category
- [ ] Contributors Implementation &Authentication
- [ ] Contributors able to add books by providing details such as title, author, or genre.

## Getting started 

### To get started with the Book Library App, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install` in the project directory.
3. Start the server by running `npm run dev`in the project directory.
4. Navigate to: **http://localhost:3000** 
in your web browser to access the app.
5. Happy viewing!

## Technologies Used

The E-Book Library App uses the following technologies:

1. Node.js - Backend server
2. Express - Web application framework
3. MongoDB - NoSQL database
4. Mongoose - Object data modeling library for MongoDB
5. React Vite - Frontend framework


## API Endpoints

### This E-Book Library App uses the following API endpoints:

1. GET /books - Returns a list of all books in the library.
2. GET /books/:id - Returns the details of a specific book.
3. POST /books - Adds a new book to the library.
4. PUT /books/:id - Updates the details of a specific book.
5. DELETE /books/:id - Deletes a specific book from the library.
#### Its worth noting that none of these functions above is available to users as users can only preview and download books, while the admin can add, update, and delete books from the library.


## Conclusion
The book library app provides users with the ability to preview and download books from a digital library. While users cannot delete books from the library, they can easily access a variety of titles for their reading pleasure. The app is built using a React Vite frontend and a Node.js backend, with data stored in a MongoDB database. The frontend allows users to search for books, view book details, and download books in pdf format. The backend includes endpoints for retrieving book data. To run the app locally, simply clone the repository and follow the instructions in the README. With its user-friendly interface and extensive collection of books, the book library app is a great resource for book lovers everywhere.




## Contributors
[Adetoye](https://github.com/adetoye-dev)

[Remi Daniel](https://github.com/Remi-dee)
