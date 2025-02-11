import ChangeMonthList from "./components/ChangeMonthList"
import { ChangeMonthTableTools } from "./components/ChangeMonthTableTools"

const ChangeMonth = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Change Month</h3>
        <ChangeMonthTableTools/>
    </div>
    <ChangeMonthList/>
    </>
}

export default ChangeMonth