const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitles = (books) => books.map((book) => book.title);

console.log(getTheTitles(books));
module.exports = getTheTitles;
