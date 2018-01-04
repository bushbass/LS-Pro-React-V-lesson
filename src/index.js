import React from 'react';
import { render } from 'react-dom';
import BasicExample from './BasicExample';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  border:'5px solid black',
  margin: '15px',
  padding: '5px',
};

const App = () => (

  <div style={styles}>

    <BasicExample />    

  </div>

);

render(<App />, document.getElementById('root'));
