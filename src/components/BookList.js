import React , {Component} from "react";
import {List , ListItem, Container} from "@mui/material";
import BookListItem from "./BookListItem";

class BookList extends Component{
    render(){
        // 둘다 사용가능

        const {books} = this.props;


        const bookItems = books.map( book => {
            return (
                <ListItem key={book.ISBN}>
                    <BookListItem
                        book={book}
                        key ={book.ISBN}
                        onSelectedBook = {this.props.onSelectedBook}
                    />
                </ListItem>
            )
        })
        return (
            <Container>
                <List>
                    {bookItems}
                </List>
            </Container>

        )
    }
}

export default BookList;