import StateList from "./components/StateList"
import { StateTableTools } from "./components/StateTableTools"

const StateMaster = ()=>{


    return <>
        <div className="flex justify-between mb-4">
            <h3>State Master</h3>
            <StateTableTools/> 
        </div>
        <StateList/>
    </>
}

export default StateMaster