import OverTimeList from "./components/OverTimeList"
import { OverTimeTableTools } from "./components/OverTimeTableTools"

const OverTime = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Over Time</h3>
        <OverTimeTableTools/>
    </div>
    <OverTimeList/>
    </>
}

export default OverTime