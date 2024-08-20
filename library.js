//Library stores books
//take book out
// checkbook in
//store books

// fees for book
// late charges for late books

class Library {
    constructor(books) {
        this.books = books
    }
    storeBooks(book) {
      this.books.push(book)
    }
    fetchBook() {
        console.log(this.books)

    }
}

let newBook = new Library('alice')
newBook.fetchBook()
newBook.storeBooks('who is alice')
newBook.fetchBook()