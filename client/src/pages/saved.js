//The Saved Books component info
import React from "react";
import "./BookCard.css";

class Saved extends React.Component {
    state = {
        books: [],
        title: "",
        authors: "",
        description: "",
    };

    componentDidMount() {
        this.uploadedBooks();
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: IDBCursorWithValue
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.searchBook(this.state.search)
        .then(res => this.setState({ books: res.data.items }))
        .cacth(err => console.log(err));
    };

    handleSavedBook = data => {
        API.saveBook(data)
        .then(res => alert("Your book was saved!"))
        .catch(err => console.log(err));
    }


    render () {
        return (
        <div>
        <Jumbotron>
            <h1>Saved Books</h1>
        </Jumbotron>

        <Container>
            {this.state.books.length (
                <List>
                    {this.state.books.map(book =>
                        <BookCard
                        key= {index}
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        image={book.image}
                        link={book.link}
                        deletedBooks={() => this.deletedBooks(book._id)}
                        />)}
                </List>
            )}
        </Container>
        </div>
        );
    }
}


export default saved;