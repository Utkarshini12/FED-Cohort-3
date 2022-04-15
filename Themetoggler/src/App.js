import './App.css';
import ThemeContext from './Context/ThemeContext';

function App() {
  const themeHook = useState('light');
  return (
    <ThemeContext.Provider value={themeHook}>

    </ThemeContext.Provider>
  );
}

export default App;
