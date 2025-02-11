import LeaveEmployeeDeductionList from "./components/LeaveEmployeeDeductionList"
import { LeaveEmployeeDeductionTableTools } from "./components/LeaveEmployeeDeductionTableTools"

const LeaveEmployeeDeduction = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Leave Employee Deduction</h3>
        <LeaveEmployeeDeductionTableTools/>  
    </div>
    <LeaveEmployeeDeductionList/>
    </>
}

export default LeaveEmployeeDeduction