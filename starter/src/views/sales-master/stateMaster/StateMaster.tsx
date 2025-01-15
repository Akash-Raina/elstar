import StateMasterList from "./components/StateMasterList"
import { StateMasterTableTools } from "./components/StateMasterTableTools"

const StateMaster = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Country Master</h3>
        <StateMasterTableTools/>
    </div>
    <StateMasterList/>
    </>
}

export default StateMaster