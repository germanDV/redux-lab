const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const PORT = 4000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.get('/books', (req, res) => {
  res.json({ books: booksDB })
})

app.get('/authors', (req, res) => {
  res.json({ authors: authorsDB })
})

app.get('/publishers', (req, res) => {
  res.json({ publishers: publishersDB })
})

const booksDB = [
  {
    id: 'b0001',
    title: 'Design Patterns',
    year: 1994,
    publisherId: 'p0001',
    author: ['a0001', 'a0002'],
    genres: ['technology', 'programming'],
  },
  {
    id: 'b0002',
    title: 'Clean Code',
    year: 2009,
    publisherId: 'p0002',
    author: ['a0003'],
    genres: ['technology', 'programming'],
  },
  {
    id: 'b0003',
    title: 'Agile Software Development',
    year: 2007,
    publisherId: 'p0002',
    author: ['a0003'],
    genres: ['agile', 'programming'],
  },
  {
    id: 'b0004',
    title: 'Let\'s Go',
    year: 2018,
    publisherId: 'p0003',
    author: ['a0004'],
    genres: ['golang'],
  },
  {
    id: 'b0005',
    title: 'Let\'s Go Further',
    year: 2019,
    publisherId: 'p0003',
    author: ['a0004'],
    genres: ['golang'],
  },
  {
    id: 'b0006',
    title: 'The Phoenix Project',
    year: 2013,
    publisherId: 'p0004',
    author: ['a0005'],
    genres: ['technology', 'fiction'],
  },
  {
    id: 'b0007',
    title: 'The Unicorn Project',
    year: 2019,
    publisherId: 'p0004',
    author: ['a0005'],
    genres: ['technology', 'fiction'],
  },
]

const authorsDB = [
  {
    id: 'a0001',
    name: 'Erich Gamma',
    books: ['b0001'],
  },
  {
    id: 'a0002',
    name: 'Richard Helm',
    books: ['b0001'],
  },
  {
    id: 'a0003',
    name: 'Robert C. Martin',
    books: ['b0002', 'b0003'],
  },
  {
    id: 'a0004',
    name: 'Alex Edwards',
    books: ['b0004', 'b0005'],
  },
  {
    id: 'a0005',
    name: 'Gene Kim',
    books: ['b0006', 'b0007'],
  },
]

const publishersDB = [
  {
    id: 'p0001',
    name: 'Addison-Wesley',
    books: ['b0001'],
  },
  {
    id: 'p0002',
    name: 'Prentice Hall',
    books: ['b0002', 'b0003'],
  },
  {
    id: 'p0003',
    name: 'First Edition',
    books: ['b0004', 'b0005'],
  },
  {
    id: 'p0004',
    name: 'IT Revolution Press',
    books: ['b0006', 'b0007'],
  },
]
