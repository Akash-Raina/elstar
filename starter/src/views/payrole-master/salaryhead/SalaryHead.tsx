import SalaryHeadList from "./components/SalaryHeadList"
import { SalaryHeadTableTools } from "./components/SalaryHeadTableTools"

const SalaryHead = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Salary Head</h3>
        <SalaryHeadTableTools/>
    </div>
    <SalaryHeadList/>
    </>
}

export default SalaryHead