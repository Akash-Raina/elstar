import OtherIncomeList from "./components/OtherIncomeList"
import { OtherIncomeTableTools } from "./components/OtherIncomeTableTools"

const OtherIncome = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Other Income</h3>
        <OtherIncomeTableTools/>
    </div>
    <OtherIncomeList/>
    </>
}

export default OtherIncome
