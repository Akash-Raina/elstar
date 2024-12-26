import SubList from "./components/SubList"
import { SubTableTools } from "./components/SubTableTools"

const SubGroup = ()=>{

    return <>
    <div className="flex justify-between mb-4">
        <h3>Sub Group</h3>
        <SubTableTools/>
    </div>
    <SubList/>
</>
}

export default SubGroup