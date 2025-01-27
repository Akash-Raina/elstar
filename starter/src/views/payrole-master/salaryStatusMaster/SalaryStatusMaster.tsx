import SalaryStatusMasterList from "./components/SalaryStatusMasterList"
import { SalaryStatusMasterTableTools } from "./components/SalaryStatusMasterTableTools"

const SalaryStatusMaster = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Salary Status Master</h3>
        <SalaryStatusMasterTableTools/>
    </div>
    <SalaryStatusMasterList/>
    </>
}

export default SalaryStatusMaster