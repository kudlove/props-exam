import React , {Component} from "react";
import {Paper, Grid,Typography, ListItem ,withStyles} from  '@mui/material';

class BookListItem extends Component{
    render(){
        const {book ,onSelectedBook } = this.props;
        // console.log("book", book);
        return (
            <ListItem onClick ={()=>onSelectedBook(book)}>
                <Paper>
                    <Grid container spacing={2}>
                        <Grid  item>
                            <img style={{width:80,height:100}} src={book.imgUrl} />
                        </Grid>

                        <Grid item style={{width:360}}>
                            <Typography component='h5' variant='h5'>
                                {book.title}
                            </Typography>
                            <Typography gutterBottom>
                                {book.author}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </ListItem>

        )
    }
}

export default BookListItem;