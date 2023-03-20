import React, { Component } from 'react';
import { Button, Box } from   '@mui/material';

import {inject,observer} from 'mobx-react';

@inject('counterStore')
@observer
class CounterComponent extends Component {
  render(){
      const {counterStore} = this.props;
    return(
      <div>
        <Button
            onClick={()=>counterStore.decrement()}
            variant='contained' color='primary' size='large'> - </Button>
        
        <Box component='span' m={5}> {counterStore.count} </Box>
        
        <Button
            onClick={() => counterStore.increment()}
            variant='contained' color='primary' size='large'> + </Button>

          <Button
              onClick={() => counterStore.makeZero()}
              variant='contained' color='primary' size='large'> Zero</Button>
      </div>
    )
  }
}

export default CounterComponent;