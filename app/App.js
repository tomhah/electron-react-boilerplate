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
        <div className={styles.listItem}>
          {this.props.gamePath ?
            <div>
              <div>1. rFactor path: {this.props.gamePath}</div>
              <button onClick={() => this.props.signals.serverDashboard.selectGameFolderClicked()}>Change path</button>
            </div>
          :
            <div>
              1. <button onClick={() => this.props.signals.serverDashboard.selectGameFolderClicked()}>Select rFactor path</button>
            </div>
          }


        </div>
        <div className={styles.listItem}>2. Start the rFactor Telemetry Client</div>
        <div className={styles.listItem}>3. Enter <i>{this.props.serverIP}</i> into the IP input</div>
        <div className={styles.listItem}>4. Start rFactor</div>
        <br/><br/>
        <button onClick={() => this.props.signals.serverDashboard.getGameDataClicked()}>Get game data</button>
        <br/><br/><br/>
        <input placeholder="Updates after x ms" value={this.props.refreshRate} onChange={(e) => this.props.signals.serverDashboard.refreshRateChanged({value: e.target.value})}/>
        <button onClick={() => this.props.signals.serverDashboard.changeRefreshRateClicked()}>Change refresh rate</button>
      </div>
    );
  }
}

export default App;
