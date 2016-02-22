import React from 'react';
import { Decorator as Cerebral } from 'cerebral-view-react';
import styles from './App.css';

@Cerebral()
class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <div>Server is running!</div>
        <h1>Instructions</h1>
        <ul>
          <li>1. Start </li>
        </ul>
      </div>
    );
  }
}

export default App;
