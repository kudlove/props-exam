import React , {Component}   from "react";
import { TextField,InputAdornment,} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

class SearchBar extends Component{

    render(){
        const {onSearchTitle} = this.props;
        return(
            <TextField
                InputProps={{
                    startAdornment:(
                        <InputAdornment position={'start'}>
                            <SearchOutlinedIcon />
                        </InputAdornment>
                    )
                }}
                onChange= {event =>onSearchTitle(event.target.value)}
            />

        )
    }
}
export default SearchBar;