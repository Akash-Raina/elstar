import EmployeeTypeList from "./components/EmployeeTypeList"
import { EmployeeTypeTableTools } from "./components/EmployeeTypeTableTools"

const EmployeeType = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Product Type</h3>
        <EmployeeTypeTableTools/>
    </div>
    <EmployeeTypeList/>
    </>
}

export default EmployeeType