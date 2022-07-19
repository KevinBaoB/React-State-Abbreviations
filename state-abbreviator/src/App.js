import './App.css';
import { useState } from "react";

import StateDropDown from './components/StateDropDown';
import StateAbbrev from './components/StateAbbrev';

function App() {

  const [stateAbbr, setStateAbbr] = useState("")


    return (
        <div className='App'>
          <h1>State Abbreviation</h1>
            {/* // setStateAbbr in the child will give the child the function access */}
            <StateDropDown setStateAbbr={setStateAbbr}/>
            <StateAbbrev abbr={stateAbbr} />
        </div>
    )
}

export default App;
