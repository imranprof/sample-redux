import {connect} from 'react-redux';

const Clicked = (props) => {
  return (
    <div>
      <h2>Clicked : {props.type}</h2>
    </div>
  )
}

const mapStateToProps =(state)=> {
  console.log(state);
  return {
    type: state.type
  }
}

export default connect(mapStateToProps)(Clicked);