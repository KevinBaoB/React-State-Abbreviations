// dots represent levels 
import USAStates from '../statedata/data.js'

function StateDropDown(props){

    // const onSelectState = (evt) => {
    //     // print the selected state
    //     // console.log(evt.currentTarget.value);
    //     // update internal state value
  
    //     setStateAbbr(evt.currentTarget.value) // async
    //   }

    const populateStateDropDown = () => {
        let elements = []
          for(let i = 0; i < USAStates.length; i++){
              elements.push(<option key={`state-${i}`} value={USAStates[i]['alpha-2']}>{USAStates[i]['name']}</option>)
          }
          return elements
      }
    
      return (
            <div>
                <select onChange={(evt) => props.setStateAbbr(evt.currentTarget.value)}>
                    {populateStateDropDown()}
                </select>
            </div>
      )
}

export default StateDropDown