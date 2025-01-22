import GradeList from "./components/GradeList"
import { GradeTableTools } from "./components/GradeTableTools"


const Grade = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Designation</h3>
        <GradeTableTools/>
    </div>
    <GradeList/>
    </>
}

export default Grade