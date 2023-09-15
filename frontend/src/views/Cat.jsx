import React, { Component } from "react";
import axios from 'axios';
import { connect } from 'react-redux'; // Import connect from react-redux
import { setTwinkle } from '../store/actions'; // Import your action

// import { getState } from '../store/state'

class Cat extends Component {


  constructor() {
    super();
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8080/`)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
// const data  = getState('TEST1') ;

return (
      <>

        <h1>This is cat</h1>
          <h2>Getting: {this.props.value} {/* Access the variable from props */}</h2>
      </>
    );
  }
}

// Define a mapStateToProps function to map state variables to props
const mapStateToProps = (state) => ({
  value: state.test.value, // Map the variable from the Redux store to props
});
// Connect the component to the Redux store
export default connect(mapStateToProps, { setTwinkle })(Cat);
