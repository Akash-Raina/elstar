import ReasonList from "./components/ReasonList"
import { ReasonTableTools } from "./components/ReasonTableTools"

const Reason = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Reason</h3>
        <ReasonTableTools/>
    </div>
    <ReasonList/>
    </>
}

export default Reason