import RetentionList from "./components/RetentionList"
import { RetentionTableTools } from "./components/RetentionTableTools"

const Retention = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Retention</h3>
        <RetentionTableTools/>
    </div>
    <RetentionList/>
    </>
}

export default Retention