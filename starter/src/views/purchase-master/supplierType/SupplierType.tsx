import SupplierList from "./components/SupplierList"
import { SupplierTableTools } from "./components/SupplierTableTools"

const SupplierType = ()=>{

    return <>
    <div className="flex justify-between mb-4">
        <h3>Supplier Type</h3>
        <SupplierTableTools/>
    </div>
    <SupplierList/>
</>
}

export default SupplierType