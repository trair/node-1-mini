let books = [
    // {
    //     id: 99,
    //     title: "Lord of the Rings",
    //     author: "J R Tolkein"
    // },
    // {
    //     id: 699,
    //     title: "The Giver",
    //     author: "Lois Lowry"
    // }
]     //{id: ___, title: ___, author: ___}

let id = 0

module.exports = {
    read: (req, res) => {
        res.status(200).send(books)
    },
    create: (req, res) => {
        books.push({ title: req.body.title, author: req.body.author, id: id })
        id++
        res.status(200).send(books)
    },
    update: (req, res) => {
        console.log(req)
        let index = +req.params.id
        let bookIndex = books.findIndex(book => book.id === index)
        if (bookIndex !== -1) {
            books[bookIndex] = {
                title: req.body.title,
                author: req.body.author,
                id: index
            }
        }
        res.status(200).send(books)
    },
    delete: (req, res) => {
        let index = +req.params.id
        let bookIndex = books.findIndex(book => book.id === index)
        if (bookIndex !== -1) {
            books.splice(bookIndex, 1)
        }
        res.status(200).send(books)
    }
}