import BankBranchMasterList from "./components/BankBranchMasterList"
import { BankBranchMasterTableTools } from "./components/BankBranchMasterTableTools"

const BankBranchMaster = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Bank Branch Master</h3>
        <BankBranchMasterTableTools/>
    </div>
    <BankBranchMasterList/>
    </>
}

export default BankBranchMaster