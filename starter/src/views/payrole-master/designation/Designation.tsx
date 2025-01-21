import DesignationList from "./components/DesignationList"
import { DesignationTableTools } from "./components/DesignationTableTools"

const Designation = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Designation</h3>
        <DesignationTableTools/>
    </div>
    <DesignationList/>
    </>
}

export default Designation