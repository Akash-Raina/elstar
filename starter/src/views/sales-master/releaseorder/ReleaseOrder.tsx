import ReleaseOrderList from "./components/ReleaseOrderList"
import { ReleaseOrderTableTools } from "./components/ReleaseOrderTableTools"

const ReleaseOrder = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Release Order Type</h3>
        <ReleaseOrderTableTools/>
    </div>
    <ReleaseOrderList/>
    </>
}

export default ReleaseOrder