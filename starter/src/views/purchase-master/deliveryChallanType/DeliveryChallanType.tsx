import ChallanList from "./components/ChallanList"
import { ChallanTableTools } from "./components/ChallanTableTools"

const DeliveryChallanType = ()=>{

    return <>
        <div className="flex justify-between mb-4">
            <h3>Delivery Challan Type</h3>
            <ChallanTableTools/>
        </div>
        <ChallanList/>
    </>
}

export default DeliveryChallanType