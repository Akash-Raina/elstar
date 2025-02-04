import AllowanceAndDeductionList from "./components/AllowanceAndDeductionList"
import { AllowanceAndDeductionTableTools } from "./components/AllowanceAndDeductionTableTools"


const AllowanceAndDeduction = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Allowance And Deduction
        Employee wise</h3>
        <AllowanceAndDeductionTableTools/>
    </div>
    <AllowanceAndDeductionList/>
    </>
}

export default AllowanceAndDeduction