import MolassesCustomerList from "./components/MolassesCustomerList"
import { MolassesCustomerTableTools } from "./components/MolassesCustomerTableTools"

const MolassesCustomerSetting = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Molasses sale setting-Customer Export</h3>
        <MolassesCustomerTableTools/>
    </div>
    <MolassesCustomerList/>
    </>
}

export default MolassesCustomerSetting