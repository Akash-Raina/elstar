import OrderTypeList from "./components/OrderTypeList"
import { OrderTypeTableTools } from "./components/OrderTypeTableTools"

const OrderAcceptanceType = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Release Order Type</h3>
        <OrderTypeTableTools/>
    </div>
    <OrderTypeList/>
    </>
}

export default OrderAcceptanceType