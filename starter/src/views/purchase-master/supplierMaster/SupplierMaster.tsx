import SupplierList from "./components/SupplierMasterList"
import { SupplierMasterTableTools } from "./components/SupplierMastertTableTools"

const SupplierMaster = ()=>{

    return <>
    <div className="flex justify-between mb-4">
        <h3>Sub Group</h3>
        <SupplierMasterTableTools/>
    </div>
    <SupplierList/>
</>
}

export default SupplierMaster