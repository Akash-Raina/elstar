import ShippingPortList from "./components/ShippingPortList"
import { ShippingPortTableTools } from "./components/ShippingPortTabeTools"


const ShippingPort = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Shipping Port</h3>
        <ShippingPortTableTools/>
    </div>
    <ShippingPortList/>
    </>
}

export default ShippingPort