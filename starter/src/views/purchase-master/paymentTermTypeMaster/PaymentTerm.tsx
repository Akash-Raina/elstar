import PaymentTermList from "./components/PaymentTermList"
import { PaymentTermTableTools } from "./components/PaymentTermTableTools"

const PaymentTerm = ()=>{

    return <>
    <div className="flex justify-between mb-4">
        <h3>Payment terms type Master</h3>
        <PaymentTermTableTools/>
    </div>
    <PaymentTermList/>
</>
}

export default PaymentTerm