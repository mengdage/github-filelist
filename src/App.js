import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FileList from './FileList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FileList files={this.props.files}/>
      </div>
    );
  }
}

App.propTypes = {
  files: PropTypes.array
};

export default App;
