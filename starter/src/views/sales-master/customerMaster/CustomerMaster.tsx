import CustomerMasterList from "./components/CustomerMasterList"
import { CustomerMasterTableTools } from "./components/CustomerMasterTableTools"

const CustomerMaster = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Customer Master</h3>
        <CustomerMasterTableTools/>
    </div>
    <CustomerMasterList/>
    </>
}

export default CustomerMaster