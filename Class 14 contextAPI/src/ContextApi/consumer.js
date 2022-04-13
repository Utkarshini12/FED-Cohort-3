import React, { Fragment } from "react";
import Provider from "./provider";
import MiContext from "./context";

const Agents = () => {
  return <AgentFive />;
};

const AgentFive = () => {
  return <AgentSix />;
};

const AgentSix = () => {
  return <AgentBond />;
};

const AgentBond = () => {
  return (
    <MiContext.Consumer>
      {(context) => (
        <Fragment>
          <h3>Agent Information</h3>
          <p>Mission Name: {context.data.mname}</p>
          <p>Agent Name: {context.data.agent}</p>

      
        
        </Fragment>
      )}
    </MiContext.Consumer>
  );
};

export default AgentBond;