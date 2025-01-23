import OverTimeTypeList from "./components/OverTimeTypeList"
import { OverTimeTypeTableTools } from "./components/OverTimeTypeTableTools"

const OverTimeType = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Over Time Type </h3>
        <OverTimeTypeTableTools/>
    </div>
    <OverTimeTypeList/>
    </>
}

export default OverTimeType