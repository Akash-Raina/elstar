import TenderList from "./components/TenderList"
import { TenderTableTools } from "./components/TenderTableTools"

const TenderType = ()=>{

    return <>
    <div className="flex justify-between mb-4">
        <h3>Tender Type</h3>
        <TenderTableTools/>
    </div>
    <TenderList/>
</>
}

export default TenderType