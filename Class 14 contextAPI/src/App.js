import AgentBond from "./ContextApi/consumer";
import Provider from "./ContextApi/provider";
import Props from "./Props";
import PropsDrilling from "./PropsDrilling";
function App() {
    return(
        <div>Context
            <Props name='Utkarshini' />
            <PropsDrilling />
            <Provider >
            <AgentBond />
            </Provider>
        </div>
    )
}

export default App;