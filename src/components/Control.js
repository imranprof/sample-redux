import React from "react";
import {connect} from 'react-redux';
import {Button} from '@material-ui/core'

const Control = (props) => {
  return (
    <div>
      <Button onClick={() => props.plus() }  variant="contained" color="secondary"> + Plus</Button>
      <Button onClick={() => props.minus() }  variant="contained" color = "primary"> - Minus</Button>
    </div>
  )
}

//this is for change a value of the main state by dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    plus: () => { dispatch({ type: 'PLUS' }) },
    minus: () => { dispatch({ type: 'MINUS' }) }
  }
}


export default connect(null, mapDispatchToProps)(Control);  //if not need any data to show then call Connect first argument by null