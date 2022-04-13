import React, { useState } from "react";

import MiContext from "./context";

const Provider = (props) => {
  const [mission, setMission] = useState({
    mname: "Go to Russia",
    agent: "007",
    accept: "Not accepted"
  }, {}, {});
  return (
    <MiContext.Provider
      value={{
        data: mission
      }}
    >
      {props.children}
    </MiContext.Provider>
  );
};

export default Provider;
