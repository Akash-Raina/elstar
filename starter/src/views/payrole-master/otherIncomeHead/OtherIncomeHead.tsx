import OtherIncomeHeadList from "./components/OtherIncomeHeadList"
import { OtherIncomeHeadTableTools } from "./components/OtherIncomeHeadTableTools"

const OtherIncomeHead = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Other Income Head</h3>
        <OtherIncomeHeadTableTools/>
    </div>
    <OtherIncomeHeadList/>
    </>
}

export default OtherIncomeHead