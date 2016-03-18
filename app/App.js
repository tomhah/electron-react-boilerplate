import React from 'react';
import { Decorator as Cerebral } from 'cerebral-view-react';
import styles from './App.css';

@Cerebral({
  serverIP: 'serverDashboard.serverIP',
  gamePath: 'serverDashboard.gamePath',
  refreshRate: 'serverDashboard.refreshRate'
})
class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <div>Server is running on IP: {this.props.serverIP}</div>
        <h1 className={styles.title}>Instructions</h1>
        {this.props.gamePath ?
          <div className={styles.listItem}>
            <div className={styles.listItemNumber}>1.</div>
            <div className={styles.listItemContent}>
              <div>rFactor path: {this.props.gamePath}</div>
              <button onClick={() => this.props.signals.serverDashboard.selectGameFolderClicked()}>Change path</button>
            </div>
          </div>
        :
          <div className={styles.listItem}>
            <div className={styles.listItemNumber}>1.</div>
            <div className={styles.listItemContent}>
              <button onClick={() => this.props.signals.serverDashboard.selectGameFolderClicked()}>Select rFactor path</button>
            </div>
          </div>
        }

        <div className={styles.listItem}>
          <div className={styles.listItemNumber}>2.</div>
          <div className={styles.listItemContent}>
            Start the rFactor Telemetry Client
          </div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.listItemNumber}>3.</div>
          <div className={styles.listItemContent}>
            Enter <i>{this.props.serverIP}</i> into the IP input
          </div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.listItemNumber}>4.</div>
          <div className={styles.listItemContent}>Start rFactor</div>
        </div>
        <br/><br/><br/>
        {process.env.NODE_ENV === 'development' ?
          <div>
            <input placeholder="Updates after x ms" value={this.props.refreshRate} onChange={(e) => this.props.signals.serverDashboard.refreshRateChanged({value: e.target.value})}/>
            <button onClick={() => this.props.signals.serverDashboard.changeRefreshRateClicked()}>Change refresh rate</button>
          </div>
        : null}
      </div>
    );
  }
}

export default App;
