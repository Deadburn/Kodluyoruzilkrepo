const authors = [
  {
    id: "1",
    name: "Albert",
    surname: "Camus",
    age: 55,
  },
  {
    id: "2",
    name: "Van",
    surname: "Goethe",
    age: 55,
  },
];

const books = [
  {
    id: "1",
    title: "Yabancı",
    author_id: '1',
    score: 6.9,
    isPublished: true,
  },
  {
    id: "2",
    title: "tabanca 2",
    author_id: '1',
    score: 8,
    isPublished: false,
  },
  {
    id: "2",
    title: "Deneme Kitap",
    author_id: '2',
    score: 6,
    isPublished: false,
  },
];

module.exports = {
  authors,
  books,
};
