import WorkOrderList from "./components/WorkOrderList"
import { WorkOrderTableTools } from "./components/WorkOrderTableTools"

const WorkOrderTypes = ()=>{

    return <>
    <div className="flex justify-between mb-4">
        <h3>Work Order Types</h3>
        <WorkOrderTableTools/>
    </div>
    <WorkOrderList/>
</>
}

export default WorkOrderTypes