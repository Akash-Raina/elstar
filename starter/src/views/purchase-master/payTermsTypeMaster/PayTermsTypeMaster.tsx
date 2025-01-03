import PayTermsList from "./components/PayTermsList"
import { PayTermsTableTools } from "./components/PayTermsTableTools"

const PayTermsTypeMaster = ()=>{

    return <>
    <div className="flex justify-between mb-4">
        <h3>Payment terms type Master</h3>
        <PayTermsTableTools/>
    </div>
    <PayTermsList/>
</>
}

export default PayTermsTypeMaster