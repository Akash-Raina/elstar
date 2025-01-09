import GodownList from "./components/GodownList"
import { GoDownTableTools } from "./components/GoDownTableTools"

const Godown = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Release Order Type</h3>
        <GoDownTableTools/>
    </div>
    <GodownList/>
    </>
}

export default Godown