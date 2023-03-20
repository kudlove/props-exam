import React,{Component} from 'react';
import {Container,Grid} from '@mui/material';

import Conter from "./Conter";
import BookList  from "./components/BookList";
import SearchBar from "./components/SearchBar";
import Books from "./static_data/Books";
import BookDetail from  "./components/BookDetail";

// 함수형으로 처음 제작되어 있음 -> Class 형으로 변환
class App_searchBook extends Component{

    constructor(props) {
        super(props);

        this.state = {
            books : Books,
            selectedBook : Books[0],
        }
    }

    onSearchTitle(title){
        let updateList = Books;
        updateList = updateList.filter(book=>{
            return book.title.toLowerCase().search(title.toLowerCase()) !== -1;
        })

        this.setState({
            books : updateList,
        });
    }

    onSelectedBook(book){
        this.setState({
            selectedBook : book,
        });
    }
  render() {
    return (
      //  <Conter />

     <Container>
       <SearchBar onSearchTitle={ this.onSearchTitle.bind(this)}/>
         <Grid container spacing={2} >
             <Grid item>
                 <BookList onSelectedBook={this.onSelectedBook.bind(this)} books={this.state.books} />
             </Grid>
             <Grid item>
                 <BookDetail book={this.state.selectedBook}></BookDetail>
             </Grid>
         </Grid>

     </Container>
    )
  }
}

export default App_searchBook;
