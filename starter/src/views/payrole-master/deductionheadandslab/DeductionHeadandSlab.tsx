import DeductionHeadandSlabList from "./components/DeductionHeadandSlabList"
import { DeductionHeadandSlabTableTools } from "./components/DeductionHeadandSlabTableTools"

const DeductionHeadandSlab = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Deduction Head and Slab</h3>
        <DeductionHeadandSlabTableTools/>
    </div>
    <DeductionHeadandSlabList/>
    </>
}

export default DeductionHeadandSlab