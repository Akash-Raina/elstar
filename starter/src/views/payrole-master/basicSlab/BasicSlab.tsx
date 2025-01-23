import BasicSlabList from "./components/BasicSlabList"
import { BasicSlabTableTools } from "./components/BasicSlabTableTools"

const BasicSlab = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Basic Slab</h3>
        <BasicSlabTableTools/>
    </div>
    <BasicSlabList/>
    </>
}

export default BasicSlab