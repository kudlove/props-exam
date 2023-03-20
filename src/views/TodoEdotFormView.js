import React, { PureComponent } from 'react';
import { TextField, Grid, Button} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';

import { LocalizationProvider ,DatePicker }   from  '@mui/x-date-pickers';


class TodoEditFormView extends PureComponent {
  render(){

    const selectedDate = new Date();

    return(
      <form noValidate>
        <Grid container xs={12} spacing={3}>
          <Grid item xs={3}>
            <TextField
              margin="normal"
              id="outlined-basic"
              label="Title"
              variant="standard" />
          </Grid>
          <Grid item xs={3}>
            <LocalizationProvider >
              <DatePicker
                  margin="normal"
                id="date-picker-dialog"
                label="Date"
                format="yyyy-MM-dd"
                value={selectedDate}
                // onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </LocalizationProvider >
          </Grid>
        </Grid>
        <Grid item >
         <Button variant='contained' color='primary' startIcon={<SaveIcon />}>Add</Button>&nbsp;&nbsp;
         <Button variant='contained' color='default' startIcon={<UpdateIcon />}>Update</Button>&nbsp;&nbsp;
         <Button variant='contained' color='secondary' startIcon={<DeleteIcon />}>Delete</Button>&nbsp;&nbsp;

        </Grid>
      </form>
    )
  }
}

export default TodoEditFormView;