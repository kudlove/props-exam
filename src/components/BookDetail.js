import React , {Component} from 'react';

import {Card,CardHeader,CardMedia,CardContent,Typography} from "@mui/material";

class BookDetail extends Component{
    render(){
        const {book} = this.props;

        return(
            <Card style={{maxWidth:450}}>
                <CardHeader title ={book.title} subheader ={book.author} />
                <CardMedia style={{width:'70%' ,height:'70%'}} component={'img'} image={book.imgUrl}/>
                <CardContent>
                    <Typography variant ='body2' color='textSecondary' component={'p'}>
                        {book.introduce}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export  default  BookDetail;