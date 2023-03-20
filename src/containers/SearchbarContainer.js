import React, { Component } from 'react';
import { TextField, InputAdornment  }  from "@mui/material";
import  SearchIcon   from  '@mui/icons-material/SearchOutlined';

class SearchbarContainer extends Component {
  render(){
    return (
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    )}
}

export default SearchbarContainer;