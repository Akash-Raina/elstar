import EmployeeMasterList from "./components/EmployeeMasterList"
import { EmployeeMasterTableTools } from "./components/EmployeeMasterTableTools"

const EmployeeMaster = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Product Type</h3>
        <EmployeeMasterTableTools/>
    </div>
    <EmployeeMasterList/>
    </>
}

export default EmployeeMaster