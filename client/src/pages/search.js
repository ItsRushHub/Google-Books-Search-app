//The Search Books component info
import React from "react";
import "./BookCard.css";

class Search extends React.Component {
    state = {
        books: [],
        title: "",
        authors: "",
        description: "",
        search: ""
    };

    componentDidMount() {
        this.uploadedBooks();
    }

    uploadedBooks = () => {
        API.getBooks ().then(res => {
            this.setState({
                books: res.data
            })
        }).catch(err => {
            console.log(err);
        });

        deletedBooks = (id) => {
            API.deletedBooks(id).then(res => {
                this.uploadedBooks();
            }).catch(err => {
                console.log(err);
            });

        }
    }

    render () {
        return (
        <div>
        <Jumbotron>
            <h1>Searched Books</h1>
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



export default search;