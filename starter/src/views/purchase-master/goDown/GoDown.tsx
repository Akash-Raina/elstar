import GoDownList from "./components/GoDownList"
import { GoDownTools } from "./components/GoDownTableTools"

const GoDown = ()=>{

    return <>
    <div className="flex justify-between mb-4">
        <h3>Godown</h3>
        <GoDownTools/>
    </div>
    <GoDownList/>
</>
}

export default GoDown