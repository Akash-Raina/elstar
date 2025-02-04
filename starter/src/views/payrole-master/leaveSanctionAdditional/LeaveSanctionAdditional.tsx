import LeaveSanctionAdditionalList from "./components/LeaveSanctionAdditionalList"
import { LeaveSanctionAdditionalTableTools } from "./components/LeaveSanctionAdditionalTableTools"

const LeaveSanctionAdditional = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Leave Sanction-Additional</h3>
        <LeaveSanctionAdditionalTableTools/>
    </div>
    <LeaveSanctionAdditionalList/>
    </>
}

export default LeaveSanctionAdditional