import BalasseSaleList from "./components/BalasseSaleList"
import { BalasseSaleTableTools } from "./components/BalasseSaleTableTools"

const BalasseSaleSetting = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Release Order Type</h3>
        <BalasseSaleTableTools/>
    </div>
    <BalasseSaleList/>
    </>
}

export default BalasseSaleSetting