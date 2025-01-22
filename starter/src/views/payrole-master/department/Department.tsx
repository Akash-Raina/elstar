import DepartmentList from "./components/DepartmentList"
import { DepartmentTableTools } from "./components/DepartmentTableTools"

const Department = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Designation</h3>
        <DepartmentTableTools/>
    </div>
    <DepartmentList/>
    </>
}

export default Department