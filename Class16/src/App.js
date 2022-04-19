import React from 'react';
import Sidebar from './Sidebar';
import {AppProvider} from './context'

function App() {
  return (
    <>
     <AppProvider>
      <Sidebar />
      </AppProvider>
    </>
  );
}

export default App;