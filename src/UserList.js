import React , {Component} from "react";
import {Button, List, ListItemText,Grid} from "@mui/material";
import axios from 'axios';

class UserList extends Component{

    constructor(props) {
        super(props);

        this.state={
            users:[{
                id:'',
                email:'',
                name:'',
                username:'',

            }]
        }
    }
    loadUser(){
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            response =>{
                this.setState({
                        users: response.data
                    }
                )
            }
        )
    }



    componentDidMount() {
        this.loadUser();
    }

    render(){
        const userList = this.state.users.map( user =>{
            //return <ListItemText primary={user.name} key={user.id} secondary={user.email}/>
            return <Grid container spacing={4} >
                <Grid style ={{width:250}} item>{user.name}</Grid>
                <Grid style ={{width:200}} item>{user.username}</Grid>
                <Grid style ={{width:20}} item>{user.id}</Grid>
                <Grid style ={{width:100}} item>{user.email}</Grid>
            </Grid>
        })

        return (
            <div>

                {/*<Button
                    onClick = {this.loadUser.bind(this)}
                    variant='contained' color='primary'>Load</Button>*/}

                <List>
                    {userList}
                 </List>
            </div>
        )
    }
}
export default UserList;