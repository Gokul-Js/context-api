import React, {Fragment} from 'react';
import Provider from './provider';
import Context from './context';
import './App.css';

const Agents = () => {
  return <AgentOne />
}

const AgentOne = () => {
  return <AgentTwo />
}

const AgentTwo = () => {
  return <AgentBond />
}

const AgentBond = () => {
  return (
    <Context.Consumer>
    {
      (context) => (
        <Fragment>
          <h3>Agent Information</h3>
          <p>Mission Name: {context.data.mname}</p>
          <h3>Mission Status: {context.data.accept}</h3>
          <button onClick={context.isMissionAccepted}> Choose to Accept </button>
        </Fragment>
      )
    }
    </Context.Consumer>
  )
}


function App() {
  return (
    <div className="App">
    <h1> Context API React World Mission</h1>
    <Provider>
      <Agents />
    </Provider>
    </div>
  );
}

export default App;
