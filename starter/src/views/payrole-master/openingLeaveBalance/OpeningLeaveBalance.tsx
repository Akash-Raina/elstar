import OpeningLeaveBalanceList from "./components/OpeningLeaveBalanceList"
import { OpeningLeaveBalanceTableTools } from "./components/OpeningLeaveBalanceTableTools"

const OpeningLeaveBalance = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Opening Leave Balance</h3>
        <OpeningLeaveBalanceTableTools/>
    </div>
    <OpeningLeaveBalanceList/>
    </>
}

export default OpeningLeaveBalance