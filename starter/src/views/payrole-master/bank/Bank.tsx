import BankList from "./components/BankList"
import { BankTableTools } from "./components/BankTableTools"

const Bank = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Bank</h3>
        <BankTableTools/>
    </div>
    <BankList/>
    </>
}

export default Bank