import React, { Component } from 'react';
import Login from './components/Login/Login'
import Flying from './components/Flying/Flying'
import { isLoginSuccess } from './store/actions/actions'
import { connect } from "react-redux";


class App extends Component {

  componentDidMount() {
    if(localStorage.isLogin) {
      this.props.getLogin();
    }
  }

  render() {
    return (
      <>
        {this.props.isLogin ? <Flying /> : <Login />}
      </>
    );
  }

}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    getLogin: () => dispatch(isLoginSuccess())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
