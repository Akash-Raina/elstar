import CurrencyList from "./components/CurrencyList"
import { CurrencyTableTools } from "./components/CurrencyTableTools"

const Currency = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Release Order Type</h3>
        <CurrencyTableTools/>
    </div>
    <CurrencyList/>
    </>
}

export default Currency