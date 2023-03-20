import React, { Component } from 'react';
import {Grid,List,ListItem} from '@mui/material';
import lessonsData from "../static_data/lessonsData";
import {NavLink,Route, Routes,useParams } from 'react-router-dom'
import Lesson from './Lesson';

class Lessons extends Component {

  render(){


    const links = lessonsData.map( lesson => {
      return (
          <ListItem component ='nav' key={lesson.id}>
            <NavLink to={'/lessons/' + lesson.id}>{lesson.name}</NavLink>
          </ListItem>
      )
    })

      function Post()
      {
          let params = useParams();
          return <h1>Post{params.id}</h1>
      }



    return (
      <Grid container spacing={2}>
        <Grid item>
          <List>{links}</List>
        </Grid>
        <Grid item>
          <Routes>
            <Route path ='/lessons/:lessonId' element={<Post />}>
            </Route>
          </Routes>
        </Grid>

      </Grid>
    )
  }
}

export default Lessons;