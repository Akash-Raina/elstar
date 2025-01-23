import CastMasterList from "./components/CastMasterList"
import { CastMasterTableTools } from "./components/CastMasterTableTools"

const CastMaster = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Other Income Head</h3>
        <CastMasterTableTools/>
    </div>
    <CastMasterList/>
    </>
}

export default CastMaster