// Create an object book with properties title, author, and pages. Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages


const book = {
    title:'Eloquent JavaScript',
    author:'Marijn Haverbeke',
    pages: 474
  }
  
const getBookDetails = ({pages}) => pages > 100;


console.log(getBookDetails(book)) // logs 'true' if the pages are above 100

