//The Saved Books component info
import React from "react";
import "./BookCard.css";

class Saved extends React.Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
    }
}


export default saved;