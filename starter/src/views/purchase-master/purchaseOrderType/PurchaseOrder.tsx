import PurchaseOrderList from "./components/PurchaseOrderList"
import { PurchaseOrderTableTools } from "./components/PurchaseOrderTableTools"

const PurchaseOrder = ()=>{

    return <>
        <div className="flex justify-between mb-4">
            <h3>Purchase Order Type</h3>
            <PurchaseOrderTableTools/>
        </div>
        <PurchaseOrderList/>
    </>
}

export default PurchaseOrder